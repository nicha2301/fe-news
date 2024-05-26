import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Article } from "~/components/Article/Article"
import { ListArticle } from "~/components/Article/ListArticle"
import { HandleScroll } from "~/components/HandleScroll/HandleScroll"
import { Topic } from "~/services/const/enum"
import { rssFeed } from "~/services/const/map"
import { RSSApi } from "~/utils/rssUtilsl"
import "./style.css"

export const DetailNews = () => {
  const { slug } = useParams()
  const [amountArticle, setAmountArticle] = useState(5)
  const data = RSSApi(rssFeed[Topic.HOME], amountArticle)
  const distanceFromBottom = HandleScroll()

  useEffect(() => {
    if (distanceFromBottom < 300) {
      setAmountArticle(amountArticle + 5)
    }
  }, [distanceFromBottom]);

  return (
    <div className="flex flex-col float-left max-w-[820px]">
      <div className="">
        <Article url={`https://giaoducthoidai.vn/${slug}`} />
      </div>
      <div className="many-pack">
        <div className="box-heading border-b border-red-600 mb-[30px]">
          <h3 className="wrap-heading text-primaryColor text-[20px]">
            <span className="heading relative top-2 bg-white font-bold pr-4 uppercase">Đừng bỏ lỡ</span>
          </h3>
        </div>
        <div className="box-content content-list" data-source="detail-latest-newss">
          <ListArticle data={data} />
        </div>
        <div className='flex items-center justify-center mt-5'>
          <button className='text-gray-700 text-[15px] py-3 px-12 rounded-full border border-gray-500'>XEM THÊM</button>
        </div>
      </div>
    </div>
  )
}