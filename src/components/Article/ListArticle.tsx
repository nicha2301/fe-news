import { Link } from "react-router-dom"
import { BeatLoader } from "react-spinners"
import { RSS } from "~/services/api/model/RSSModel"

export const ListArticle = (props: { data: RSS[] }) => {
  if (props.data.length === 0) {
    return <BeatLoader />
  }

  return (
    <div>
      {props.data.length > 0 &&
        props.data.map((item, index) => (
          <article className="story h-[200px] mt-6 overflow-hidden" key={index}>
            <figure className="story__thumb w-[350px] float-left mr-[20px]">
              <Link className="cms-link" to={`/detail/${item.link?.split('/').pop()}`} target="_self">
                <img className="lazyloaded" src={item.image} data-src={item.image} alt={item.title} />
              </Link>
            </figure>
            <div className="story__heading">
              <h2 className="cms-link font-semibold text-[#404040] leading-6 hover:text-primaryColor cursor-pointer">
                <Link to={`/detail/${item.link?.split('/').pop()}`} target="_self">
                  {item.title}
                </Link>
              </h2>
              <time className="story__time mt-2 leading-5 text-[#959595] text-[12px]">{item.pubDate}</time>
              <div className="story__summary mt-2 leading-6 h-22 text-[#4E4E4E] text-[15px]">
                {item.description}
              </div>
            </div>
          </article>
        ))
      }
    </div>

  )
}