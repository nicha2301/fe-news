import { Article } from "~/components/Article/Article"
import { ListArticle } from "~/components/Article/ListArticle"
import "./style.css"

export const DetailNews = () => {
  // thay link để test
  const url = 'https://giaoducthoidai.vn/thi-sinh-nghe-an-don-suc-on-tap-sau-khi-cong-bo-ty-le-choi-vao-lop-10-post684214.html'

  return (
    <div className="flex flex-col float-left max-w-[820px]">
      <div className="">
        <Article url={url}/>
      </div>
      <div className="many-pack">
        <div className="box-heading border-b border-red-600 mb-[30px]">
          <h3 className="wrap-heading text-primaryColor text-[20px]">
            <span className="heading relative top-2 bg-white font-bold pr-4 uppercase">Đừng bỏ lỡ</span>
          </h3>
        </div>
        <div className="box-content content-list" data-source="detail-latest-newss">
          <ListArticle />
        </div>
        <div className='flex items-center justify-center mt-5'>
          <button className='text-gray-700 text-[15px] py-3 px-12 rounded-full border border-gray-500'>XEM THÊM</button>
        </div>

      </div>
    </div>
  )
}