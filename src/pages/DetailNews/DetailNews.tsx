import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { HandleScroll } from "~/utils/HandleScroll";
import { Topic } from "~/services/const/enum";
import { rssFeed } from "~/services/const/map";
import { RSSApi } from "~/utils/rssUtils";
import MainPage4 from "../MainPage/components/MainPage4";
import { NewsSwiper } from "../MainPage/components/NewsSwiper";
import "./style.css";
import { SpecialNews } from "../MainPage/components/SpecialNews";
import { Article } from "~/utils/Article";
import { ListArticle } from "../MainPage/components/ListArticle";
import { RSS } from "~/services/api/model/RSSModel";
import axios from "axios";
import cheerio from "cheerio";

export const DetailNews = () => {
  const { slug } = useParams();
  const [amountArticle, setAmountArticle] = useState(5);
  const data = RSSApi(rssFeed[Topic.HOME], amountArticle);
  const data2 = RSSApi(rssFeed[Topic.HOME], 7);
  const data3 = RSSApi(rssFeed[Topic.HIGHLIGHTS], 10);
  const data4 = RSSApi(rssFeed[Topic.HOT_NEWS], 10);
  const { distanceFromBottom } = HandleScroll();

  useEffect(() => {
    if (distanceFromBottom < 300) {
      setAmountArticle(amountArticle + 5);
    }
  }, [distanceFromBottom]);

  if (!data) {
    return <BeatLoader />;
  }

  const saveArticleToLocalStorage = (article: RSS) => {
    const storedArticles = localStorage.getItem("readArticles");
    const articles = storedArticles ? JSON.parse(storedArticles) : [];

    const articleExists = articles.some((storedArticle: RSS) => storedArticle.link === article.link);
    if (!articleExists) {
      const articleData = {
        title: article.title,
        link: article.link,
        description: article.description,
        pubDate: article.pubDate,
        image: article.image,
        category: article.category,
      };

      articles.push(articleData);
      localStorage.setItem("readArticles", JSON.stringify(articles));
    }
  };

  useEffect(() => {
    const fetchArticleData = async (url: string) => {
      try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const title = $("meta[property='og:title']").attr("content") || $("title").text();
        const description = $("meta[property='og:description']").attr("content") || "";
        const pubDate = $("meta[property='article:published_time']").attr("content") || new Date().toISOString();
        const image = $("meta[property='og:image']").attr("content") || "";
        const category = $("meta[property='article:section']").attr("content") || "";

        const articleData: RSS = {
          title,
          link: url,
          description,
          pubDate,
          image,
          category
        };

        saveArticleToLocalStorage(articleData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    if (slug) {
      const articleUrl = `https://giaoducthoidai.vn/${slug}`;
      fetchArticleData(articleUrl);
    }
  }, [slug]);

  return (
    <div className="flex flex-col float-left max-w-[820px]">
      <div className="many-pack">
        <div className="box-content content-list">
          <Article url={`https://giaoducthoidai.vn/${slug}`} />
          <NewsSwiper data={data2} />
          <MainPage4 data={data4} />
          <SpecialNews data={data3} />
          <ListArticle data={data} header={true} />
          <div className='flex items-center justify-center mt-5'>
            <button className='text-gray-700 text-[15px] py-3 px-12 rounded-full border border-gray-500'>XEM THÊM</button>
          </div>
        </div>
      </div>
    </div>
  );
};
