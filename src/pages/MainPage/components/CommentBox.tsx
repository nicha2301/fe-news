import { useEffect, useState } from "react";
import { useAuth } from "~/Auth/AuthContext";
import { Comment } from "~/services/api/model/Comment";
import { addComment, getComments } from "~/utils/firebase";
import { CommentList } from "./CommentList";

export const CommentBox = (props: { slug: string }) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [comment, setComment] = useState("");
  const authContext = useAuth();
  const { user } = authContext?.user ? authContext : { user: undefined };


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await getComments(props.slug);
        setComments(fetchedComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [props.slug, comments])

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  }

  const handleSubmitComment = async () => {
    if (comment.trim() === "") {
      alert("Vui lòng nhập nội dung bình luận!");
      return;
    }

    try {
      await addComment(
        props.slug,
        user?.googleId ?? "",
        comment,
        user?.imageUrl ?? "",
        user?.name ?? ""
      );
      setComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
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