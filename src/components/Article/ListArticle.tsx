import { Link } from "react-router-dom"
import { BeatLoader } from "react-spinners"
import { RSS } from "~/services/api/model/RSSModel"

export const ListArticle = (props: { data: RSS[], header: boolean }) => {
  if (props.data.length === 0) {
    return <BeatLoader />
  }

  return (
    <div>
      {props.header && (
        <div className="box-heading border-b border-red-600 mb-[30px]">
          <h3 className="wrap-heading text-primaryColor text-[20px]">
            <span className="heading relative top-2 bg-white font-bold pr-4 uppercase">Đừng bỏ lỡ</span>
          </h3>
        </div>
      )}
      {props.data.length > 0 &&
        props.data.map((item, index) => (
          <article className="story mt-7 overflow-hidden" key={index}>
            <figure className="story__thumb w-[300px] float-left mr-[20px]">
              <Link className="cms-link" to={`/detail/${item.link?.split('/').pop()}`} target="_self">
                <img className="lazyloaded" src={item.image} data-src={item.image} alt={item.title} />
              </Link>
            </figure>
            <div className="story__heading">
              <h2 className="cms-link font-semibold text-[#404040] text-[15px] leading-6 hover:text-primaryColor cursor-pointer">
                <Link to={`/detail/${item.link?.split('/').pop()}`} target="_self">
                  {item.title}
                </Link>
              </h2>
              <time className="story__time mt-2 leading-5 text-[#959595] text-[12px]">{item.pubDate}</time>
              <div className="story__summary mt-2 leading-6 h-22 text-[#4E4E4E] text-[14px]">
                {item.description}
              </div>
            </div>
          </article>
        ))
      }
    </div>

  )
}