import { useEffect, useState } from "react";
import { AlertComp } from "~/pages/MainPage/components/AlertComp";
import { RSS } from "~/services/api/model/RSSModel";
import { Topic } from "~/services/const/enum";
import { rssFeed } from "~/services/const/map";
import { RSSApi } from "./rssUtils";

const NewsAlerts = () => {
  const [articles, setArticles] = useState<RSS[]>([]);
  const newArticles = RSSApi(rssFeed[Topic.HOME], 5);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedArticles = compareAndStoreArticles(newArticles);
      setArticles(updatedArticles);
    }, 60000)
    return () => clearInterval(interval);
  }, [articles]);

  const compareAndStoreArticles = (newArticles: RSS[]) => {
    const storedArticles = getStoredArticles();
    const updatedArticles = newArticles.filter(newArticle => {
      return !storedArticles.find(olditem => JSON.stringify(olditem) === JSON.stringify(newArticle))
    });
    const updatedArticleList = [...storedArticles, ...updatedArticles];

    // storeArticles(updatedArticleList);
    return updatedArticles;
  };

  const getStoredArticles = (): RSS[] => {
    const storedArticles = localStorage.getItem('rssArticles');
    return storedArticles ? JSON.parse(storedArticles) : [];
  };

  const storeArticles = (articlesToStore: RSS[]) => {
    localStorage.setItem('rssArticles', JSON.stringify(articlesToStore));
  };

  return (
    <div>
      {articles.map((article, index) => (
        <AlertComp key={index} item={article} />
      ))}
    </div>
  )
}

export default NewsAlerts;
