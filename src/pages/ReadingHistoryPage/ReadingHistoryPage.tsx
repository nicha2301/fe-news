import { useEffect, useState } from 'react';
import { RSS } from '~/services/api/model/RSSModel';
import { ListArticle } from '../MainPage/components/ListArticle';

export const ReadingHistoryPage = () => {
  const [readArticles, setReadArticles] = useState<RSS[]>([]);

  useEffect(() => {
    const storedArticles = localStorage.getItem("readArticles");
    if (storedArticles) {
      setReadArticles(JSON.parse(storedArticles));
    }
  }, []);
  const removeArticle = (link: string) => {
    const updatedArticles = readArticles.filter(article => article.link !== link);
    setReadArticles(updatedArticles);
    localStorage.setItem("readArticles", JSON.stringify(updatedArticles));
  };
 

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Lịch sử các bài báo đã đọc</h1>
      {readArticles.length > 0 ? (
        <ListArticle data={readArticles} header={false}  onRemoveArticle={removeArticle} />
      ) : (
        <p className="text-gray-500">Bạn chưa đọc bài báo nào.</p>
      )}
    </div>
  );
};

export default ReadingHistoryPage;

