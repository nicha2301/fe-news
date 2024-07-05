import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BeatLoader } from "react-spinners"
import { HandleScroll } from "~/utils/HandleScroll"
import { Topic } from "~/services/const/enum"
import { rssFeed } from "~/services/const/map"
import { RSSApi } from "~/utils/rssUtils"
import MainPage4 from "../MainPage/components/MainPage4"
import { NewsSwiper } from "../MainPage/components/NewsSwiper"
import "./style.css"
import { SpecialNews } from "../MainPage/components/SpecialNews"
import { Article } from "~/utils/Article"
import { ListArticle } from "../MainPage/components/ListArticle"
import { RSS } from "~/services/api/model/RSSModel"

export const DetailNews = () => {
  const { slug } = useParams()
  const [amountArticle, setAmountArticle] = useState(5)
  const [amountArticle1, setAmountArticle1] = useState(100);
  const data = RSSApi(rssFeed[Topic.HOME], amountArticle)
  const data2 = RSSApi(rssFeed[Topic.HOME], 7)
  const data3 = RSSApi(rssFeed[Topic.HIGHLIGHTS], 10)
  const data4 = RSSApi(rssFeed[Topic.HOT_NEWS], 10)
  const {distanceFromBottom} = HandleScroll()


  useEffect(() => {
    if (distanceFromBottom < 300) {
      setAmountArticle(amountArticle + 5)
    }
  }, [distanceFromBottom]);

  useEffect(() => {
    if (distanceFromBottom < 300) {
      setAmountArticle1(amountArticle1 + 100)
    }
  }, [distanceFromBottom]);


  if (!data) {
    return <BeatLoader />
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

  const data1 = RSSApi(rssFeed[Topic.CELEBRITIES], amountArticle1);
  const data5 = RSSApi(rssFeed[Topic.CREATION], amountArticle1);
  const data6 = RSSApi(rssFeed[Topic.CULTURAL_LIFE], amountArticle1);
  const data7 = RSSApi(rssFeed[Topic.CULTURE], amountArticle1);
  const data8 = RSSApi(rssFeed[Topic.ECONOMY], amountArticle1);
  const data9 = RSSApi(rssFeed[Topic.EDUCATION], amountArticle1);
  const data10 = RSSApi(rssFeed[Topic.EXCHANGE], amountArticle1);
  const data11 = RSSApi(rssFeed[Topic.EXPERT_CORNER], amountArticle1);
  const data12 = RSSApi(rssFeed[Topic.FACES], amountArticle1);
  const data13 = RSSApi(rssFeed[Topic.FAMILY], amountArticle1);
  const data14 = RSSApi(rssFeed[Topic.FOUR_DIRECTIONS], amountArticle1);
  const data15 = RSSApi(rssFeed[Topic.HEALTH], amountArticle1);
  const data16 = RSSApi(rssFeed[Topic.HIGHLIGHTS], amountArticle1);
  const data17 = RSSApi(rssFeed[Topic.HEALTH_BEAUTY], amountArticle1);
  const data18 = RSSApi(rssFeed[Topic.HOT_NEWS], amountArticle1);
  const data19 = RSSApi(rssFeed[Topic.HUMANITY], amountArticle1);
  const data20 = RSSApi(rssFeed[Topic.INFOGRAPHIC], amountArticle1);
  const data21 = RSSApi(rssFeed[Topic.LABOR_UNION], amountArticle1);
  const data22 = RSSApi(rssFeed[Topic.LEGAL_EDUCATION], amountArticle1);
  const data23 = RSSApi(rssFeed[Topic.LEGAL_SYSTEM], amountArticle1);
  const data24 = RSSApi(rssFeed[Topic.LOCAL], amountArticle1);
  const data25 = RSSApi(rssFeed[Topic.MEDIA], amountArticle1);
  const data26 = RSSApi(rssFeed[Topic.METHODOLOGY], amountArticle1);
  const data27 = RSSApi(rssFeed[Topic.MOVEMENT], amountArticle1);
  const data28 = RSSApi(rssFeed[Topic.NATIONAL_DEFENSE_EDUCATION], amountArticle1);
  const data29 = RSSApi(rssFeed[Topic.NEWS], amountArticle1);
  const data30 = RSSApi(rssFeed[Topic.PHYSICAL], amountArticle1);
  const data31 = RSSApi(rssFeed[Topic.POLICY], amountArticle1);
  const data32 = RSSApi(rssFeed[Topic.POLITICS], amountArticle1);
  const data33 = RSSApi(rssFeed[Topic.READERS_INVESTIGATION], amountArticle1);
  const data34 = RSSApi(rssFeed[Topic.SCHOOL_SPORTS], amountArticle1);
  const data35 = RSSApi(rssFeed[Topic.SCIENCE_TECHNOLOGY], amountArticle1);
  const data36 = RSSApi(rssFeed[Topic.SECURITY], amountArticle1);
  const data37 = RSSApi(rssFeed[Topic.SKILLS], amountArticle1);
  const data38 = RSSApi(rssFeed[Topic.SOCIETY], amountArticle1);
  const data39 = RSSApi(rssFeed[Topic.SPORTS], amountArticle1);
  const data40 = RSSApi(rssFeed[Topic.STRANGE_STORIES], amountArticle1);
  const data41 = RSSApi(rssFeed[Topic.STUDY_ABROAD], amountArticle1);
  const data42 = RSSApi(rssFeed[Topic.TRAINING_ADMISSION], amountArticle1);
  const data43 = RSSApi(rssFeed[Topic.URBAN_EDUCATION], amountArticle1);
  const data44 = RSSApi(rssFeed[Topic.VIDEO], amountArticle1);
  const data45 = RSSApi(rssFeed[Topic.WORLD], amountArticle1);
  const data46 = RSSApi(rssFeed[Topic.WORLD_ISSUES], amountArticle1);
  const data47 = RSSApi(rssFeed[Topic.COMPANION], amountArticle1);
  const data48 = RSSApi(rssFeed[Topic.CONNECTION], amountArticle1);
  const data49 = RSSApi(rssFeed[Topic.COVID_19_PREVENTION], amountArticle1);
  const data50 = RSSApi(rssFeed[Topic.HOME], amountArticle1);

  const allArticles = [
   
    ...data1,
    ...data5,
    ...data6,
    ...data7,
    ...data8,
    ...data9,
    ...data10,
    ...data11,
    ...data12,
    ...data13,
    ...data14,
    ...data15,
    ...data16,
    ...data17,
    ...data18,
    ...data19,
    ...data20,
    ...data21,
    ...data22,
    ...data23,
    ...data24,
    ...data25,
    ...data26,
    ...data27,
    ...data28,
    ...data29,
    ...data30,
    ...data31,
    ...data32,
    ...data33,
    ...data34,
    ...data35,
    ...data36,
    ...data37,
    ...data38,
    ...data39,
    ...data40,
    ...data41,
    ...data42,
    ...data43,
    ...data44,
    ...data45,
    ...data46,
    ...data47,
    ...data48,
    ...data49,
    ...data50,
  ];

  useEffect(() => {
    if (distanceFromBottom < 300) {
      setAmountArticle(amountArticle + 100); // Tăng số lượng bài viết được tải
    }
  }, [distanceFromBottom]);

  useEffect(() => {
    if (slug) {
      console.log("Slug:", slug);
      console.log("All Articles:", allArticles);

      const article = allArticles.find((item: RSS) => {
        console.log("Checking item link:", item.link, "with slug:", slug);
        return item.link?.includes(slug);
      });

      console.log("Found Article:", article);

      if (article) {
        saveArticleToLocalStorage(article);
      } else {
        console.warn("No article found for slug:", slug);
      }
    }
  }, [allArticles, slug]);


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
  )
}
