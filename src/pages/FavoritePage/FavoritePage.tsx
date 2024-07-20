import { useEffect, useState } from 'react';
import { RSS } from '~/services/api/model/RSSModel';
import { ListArticle } from '../MainPage/components/ListArticle';
import { useAuth } from '~/Auth/AuthContext';
import { getFavoriteArticles, removeFavoriteArticle } from '~/utils/firebase';

export const FavoritePage = () => {
  const [readArticles, setReadArticles] = useState<RSS[]>([]);
  const authContext = useAuth();
  const { user } = authContext?.user ? authContext : { user: undefined };

  useEffect(() => {
    const fetchFavoriteArticles = async () => {
      if (user?.googleId) {
        const articles = await getFavoriteArticles(user.googleId);
        setReadArticles(articles);
      }
    };
    fetchFavoriteArticles();
  }, [user]);

  const handleRemoveArticle = async (articleLink: string) => {
    if (!user?.googleId) {
      alert("Vui lòng đăng nhập để xóa bài báo!");
      return;
    }

    await removeFavoriteArticle(user.googleId, articleLink);
    setReadArticles((prev) => prev.filter((article) => article.link !== articleLink));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Bài báo đã lưu</h1>
      {readArticles.length > 0 ? (
        <ListArticle data={readArticles} header={false} onRemoveArticle={handleRemoveArticle} />
      ) : (
        <p className="text-gray-500">Bạn chưa đọc bài báo nào.</p>
      )}
    </div>
  )
}

