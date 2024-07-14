import { useEffect, useState } from "react";
import { AlertComp } from "~/pages/MainPage/components/AlertComp";
import { RSS } from "~/services/api/model/RSSModel";
import { Topic } from "~/services/const/enum";
import { rssFeed } from "~/services/const/map";
import { RSSApi } from "./rssUtils";

export const NewsAlerts = () => {
  const [latestArticle, setLatestArticle] = useState<RSS | null>(null);
  const newArticles = RSSApi(rssFeed[Topic.HOME], 5);

  useEffect(() => {
    const storedArticles: RSS[] = JSON.parse(localStorage.getItem('latestArticles') || '[]');

    if (newArticles.length > 0) {
      const newLatest = newArticles[0];

      if (storedArticles.length === 0 || storedArticles[0].title !== newLatest.title) {
        setLatestArticle(newLatest);
        localStorage.setItem('latestArticles', JSON.stringify(newArticles));
      }
    }
  }, [newArticles]);

  return (
    <div>
      {latestArticle && <AlertComp item={latestArticle} />}
    </div>
  );
}
