export const CommentBox = () => {

  return (
    <div className="article-comment" data-id="" data-type="20">
      <div id="commentbox" data-id="" className="box-comment">
        <h3 className="wrap-heading"><span className="heading text-[#4E4E4E]">Bình luận</span></h3>
        <div className="box-content">
          <div className="wrap-comment">
            <textarea id="txtComment" placeholder="* Ý kiến của bạn sẽ được biên tập trước khi đăng. Xin vui lòng gõ Tiếng Việt có dấu."></textarea>
            <div className="w-100 mt-3 d-flex justify-content-end">
              <button className="btnSubmit">Gửi bình luận</button>
            </div>
          </div>
          <div className="user"></div>
          <button data-page="1" className="btn btn-link btn-lg mt-3 btnMore">XEM THÊM BÌNH LUẬN</button>
        </div>
      </div>
    </div>
  )
}