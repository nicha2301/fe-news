import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { RSS } from '~/services/api/model/RSSModel'

export default function MainPage2(props: { data: RSS[] }) {
  if (props.data.length === 0) {
    return <BeatLoader />
  }

  return (
    <div className="mb-8 hot-news">
      <div className="mb-8 box-heading">
        <h3 className="relative top-2 bg-white border-b-2 border-[#c31e40]  wrap-heading">
          <span className="text-2xl leading-6 text-[#c31e40] uppercase pr-2 font-semibold heading">Tin tiêu điểm</span>
        </h3>
      </div>
      <div className="grid grid-cols-[380px_1fr] gap-6 box-content" data-source="content-box-focus">
        <article className="story primary">
          <figure className="mb-2.5 story__thumb">
            <Link to={`/detail/${props.data[0].link?.split('/').pop()}`} title={props.data[0].title}>
              <img className="" src={props.data[0].image} alt={props.data[0].title} />
            </Link>
          </figure>
          <h2 className="font-semibold text-lg leading-6 text-[#404040] hover:text-primaryColor cursor-pointer story__heading">
            <Link to={`/detail/${props.data[0].link?.split('/').pop()}`}>
              {props.data[0].title}
            </Link>
          </h2>
          <Link to={`${props.data[0].category}`} className="text-[#c31e40] no-underline mr-3.5 text-xs leading-[14px] float-left mt-1.5 story__cate" >
            {props.data[0].category}
          </Link>
          <time className="mt-1.5 text-xs leading-[14px] text-[#959595] story__time">{props.data[0].pubDate}</time>
          <div className="mt-1 text-base leading-[22px] story__summary story__shorten">
            {props.data[0].description}
          </div>
        </article>
        <div className="h-[480px] overflow-y-scroll custom-scrollbar feature">
          {props.data.slice(1).map((item, index) => (
            <article key={index} className="mb-5 story">
              <figure className="w-[135px] h-[90px] float-left mr-3 mt-[3px] story__thumb">
                <Link to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                  <img className="" src={item.image} alt={item.title} />
                </Link>
              </figure>
              <h2 className="font-semibold text-base leading-6 text-[#404040] hover:text-primaryColor cursor-pointer story__heading">
                <Link className="cms-link" to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                  {item.title}
                </Link>
              </h2>
              <Link to={`/detail/${item.link?.split('/').pop()}`} className="text-[#c31e40] no-underline mr-3.5 text-xs leading-[14px] float-left mt-1.5 story__cate" title={item.category}>
                {item.category}
              </Link>
              <time className="mt-1.5 text-xs leading-[14px] text-[#959595] story__time">{item.pubDate}</time>
              <div className="mt-1.5 text-sm leading-[22px] max-h-[66px] ml-[147px] overflow-hidden story__summary story__shorten">
                {item.description}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>


  )
}
