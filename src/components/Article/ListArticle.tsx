import { useEffect, useState } from "react"
import { HandleScroll } from "../HandleScroll/HandleScroll"
import { RSSApi } from "~/utils/rssUtilsl"

export const ListArticle = () => {
  const [amountArticle, setAmountArticle] = useState(5)
  const rssData = RSSApi("https://giaoducthoidai.vn/rss/dia-phuong-78.rss", amountArticle)
  const distanceFromBottom = HandleScroll()

  useEffect(() => {
    if (distanceFromBottom < 300) {
      setAmountArticle(amountArticle + 5)
    }
  }, [distanceFromBottom]);


  return (
    <div>
      {rssData.length > 0 &&
        rssData.map((value, index) => (
          <article className="story h-[200px] mt-6" key={index}>
            <figure className="story__thumb w-[350px] float-left mr-[20px]">
              <a className="cms-link" href={value.link} title={value.title}>
                <img className="lazyloaded" src={value.image} data-src={value.image} alt={value.title} />
              </a>
            </figure>
            <div>
              <h3 className="story__heading">
                <a className="cms-link font-semibold text-[#404040] leading-6" href={value.link} title={value.title}>
                  {value.title}
                  <i className="icon icon-img"></i>
                </a>
              </h3>
              <time className="story__time mt-2 leading-5 text-[#959595] text-[12px]" dateTime="2024-05-19T21:34:29+0700" data-time="1716129269">{value.pubDate}</time>
              <div className="story__summary mt-2 leading-6 h-22 text-[#4E4E4E] text-[15px]">
                {value.description}
              </div>
            </div>
          </article>
        ))
      }
    </div>

  )
}