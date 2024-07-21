import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { db } from '~/config/firebaseConfig'
import { Comment } from '~/services/api/model/Comment'
import { RSS } from '~/services/api/model/RSSModel'

// Thêm bài báo vào danh sách yêu thích
const favoriteArticle = async (userId: string, article: RSS) => {
  const link = article.link?.split('/').pop() ?? ''
  const articleData = {
    category: article.category,
    title: article.title,
    link: link,
    description: article.description,
    image: article.image,
    thumb: article.thumb,
    pubDate: article.pubDate
  }

  if (article.link) {
    await setDoc(doc(db, 'favorites', `${userId}_${link}`), {
      userId,
      article: articleData
    })
  }
}

// Lấy danh sách bài báo yêu thích
const getFavoriteArticles = async (userId: string): Promise<RSS[]> => {
  const articles: RSS[] = []
  const q = query(collection(db, 'favorites'), where('userId', '==', userId))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    articles.push(
      new RSS(
        data.article.category,
        data.article.title,
        data.article.link,
        data.article.description,
        data.article.image,
        data.article.thumb,
        data.article.pubDate
      )
    )
  })
  return articles
}

// Xóa bài báo khỏi danh sách yêu thích
const removeFavoriteArticle = async (userId: string, articleLink: string) => {
  if (!articleLink) return
  try {
    const articleId = articleLink.split('/').pop() ?? ''

    const docRef = doc(db, 'favorites', `${userId}_${articleId}`)

    await deleteDoc(docRef)
  } catch (error) {}
}

// Thêm bình luận vào bài báo
const addComment = async (articleId: string, author: string, content: string, imageUrl: string, userName: string) => {
  if (!articleId || !content) return;

  try {
    await addDoc(collection(db, "comments"), {
      articleId,
      author,
      content,
      imageUrl,
      user: userName,
      createdAt: Date.now(),
    });
    console.log('Comment added successfully!');
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

// Lấy danh sách bình luận của bài báo
const getComments = async (articleId: string): Promise<Comment[]> => {
  const comments: Comment[] = [];
  const q = query(collection(db, "comments"), where("articleId", "==", articleId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const createdAt = data.createdAt;

    const createdAtDate = createdAt instanceof Date ? createdAt : new Date(createdAt);

    comments.push({ id: doc.id, ...data, createdAt: createdAtDate } as unknown as Comment);
  });
  return comments;
};

export { favoriteArticle, getFavoriteArticles, removeFavoriteArticle, getComments, addComment }
