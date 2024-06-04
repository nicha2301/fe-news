import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BeatLoader } from "react-spinners"
import { Article } from "~/components/Article/Article"
import { ListArticle } from "~/components/Article/ListArticle"
import { HandleScroll } from "~/components/HandleScroll/HandleScroll"
import { Topic } from "~/services/const/enum"
import { rssFeed } from "~/services/const/map"
import { RSSApi } from "~/utils/rssUtils"
import MainPage4 from "../MainPage/components/MainPage4"
import { NewsSwiper } from "../MainPage/components/NewsSwiper"
import "./style.css"
import { SpecialNews } from "../MainPage/components/SpecialNews"

export const DetailNews = () => {
  const { slug } = useParams()
  const [amountArticle, setAmountArticle] = useState(5)
  const data = RSSApi(rssFeed[Topic.HOME], amountArticle)
  const data2 = RSSApi(rssFeed[Topic.HOME], 7)
  const data3 = RSSApi(rssFeed[Topic.HIGHLIGHTS], 10)
  const data4 = RSSApi(rssFeed[Topic.HOT_NEWS], 10)
  const distanceFromBottom = HandleScroll()

  useEffect(() => {
    if (distanceFromBottom < 300) {
      setAmountArticle(amountArticle + 5)
    }
  }, [distanceFromBottom]);

  if (!data) {
    return <BeatLoader />
  }

  return (
    <div className="flex flex-col float-left max-w-[820px]">
      <div className="many-pack">
        <div className="box-content content-list">
          <Article url={`https://giaoducthoidai.vn/${slug}`} />
          <NewsSwiper data={data2} />
          <MainPage4 data={data4} />
          <SpecialNews data={data3} />
          <ListArticle data={data} header={true} />
          <div className='flex items-center justify-center mt-5'>
            <button className='text-gray-700 text-[15px] py-3 px-12 rounded-full border border-gray-500'>XEM THÊM</button>
          </div>
        </div>
      </div>
    </div>
  )
}