import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "~/Auth/AuthContext";
import { db } from "~/config/firebaseConfig";
import { Comment } from "~/services/api/model/Comment";
import { CommentList } from "./CommentList";

export const CommentBox = (props: { slug: string }) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [comment, setComment] = useState("");
  const authContext = useAuth();
  const { user } = authContext?.user ? authContext : { user: undefined };


  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("articleId", "==", props.slug),
      
    )
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedComments: Comment[] = [];
      querySnapshot.forEach((doc) => {
        fetchedComments.push({ id: doc.id, ...doc.data() } as unknown as Comment);
      });
      setComments(fetchedComments);
    });

    return () => unsubscribe();
  }, [props.slug, comments])

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  }

  const handleSubmitComment = async () => {
    if (comment.trim() === "") {
      alert("Vui lòng nhập nội dung bình luận!");
      return;
    }

    const status = await addDoc(collection(db, "comments"), {
      articleId: props.slug,
      imageUrl: user.imageUrl,
      author: user.googleId,
      user: user.name,
      content: comment,
      createdAt: Date.now()
    })

    if (status) {
      setComment("");
    }

  }

  return (
    <div className="article-comment" data-id="" data-type="20">
      <div id="commentbox" data-id="" className="box-comment mb-[50px]">
        <h3 className="wrap-heading"><span className="heading text-[#4E4E4E]">Bình luận</span></h3>
        <div className="box-content">
          <div className="wrap-comment">
            <textarea id="txtComment" value={comment} onChange={handleCommentChange} placeholder="* Ý kiến của bạn sẽ được biên tập trước khi đăng. Xin vui lòng gõ Tiếng Việt có dấu."></textarea>
            <div className="w-100 mt-3 d-flex justify-content-end">
              <button className="btnSubmit" onClick={handleSubmitComment}>
                Gửi bình luận
              </button>
            </div>
          </div>
        </div>
      </div>
      <CommentList comments={comments} />
    </div>
  )
}