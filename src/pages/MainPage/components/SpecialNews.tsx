import { BeatLoader } from "react-spinners"
import { Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { RSS } from "~/services/api/model/RSSModel"
import bgHeading from "~/assets/img/bg-heading.png"
import bgSpecialNews from "~/assets/img/bg-special_news.jpg"

export const SpecialNews = (props: { data: RSS[] }) => {
  if (props.data.length === 0) {
    return <BeatLoader />
  }

  return (
    <div className="special-news relative bg-cover bg-center pl-[20px] pr-[20px] mb-[30px] min-w-[820px] min-h-[420px]" style={{ backgroundImage: `url(${bgSpecialNews})` }} >
      <div className="box-heading relative h-[70px] mb-2.5" style={{ background: `url(${bgHeading}) center center / 196px 78px no-repeat` }}>
        <h3 className="wrap-heading absolute left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2">
          <span className="heading text-[#c31e40] uppercase font-semibold text-[20px] leading-[23px]">Tin nổi bật</span>
        </h3>
      </div>
      <div className="box-content ">
        {props.data.length > 0 && (
          <Swiper
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true, el: '.highlight-pagination' }}
          >
            {props.data.map((item, index) => (
              <SwiperSlide key={index}>
                <article key={index} className="story bg-white h-[260px] overflow-hidden">
                  <figure className="story__thumb">
                    <a href={`/detail/${item.link?.split('/').pop()}`}>
                      <img src={item.image} alt={item.title} />
                    </a>
                  </figure>
                  <h3 className="story__heading mt-2.5 mb-1 text-[16px] font-medium text-[#404040] px-2.5 line-clamp-4 overflow-hidden text-ellipsis hover:opacity-60 cursor-pointer">
                    <a className="cms-link" href={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                      {item.title}
                    </a>
                  </h3>
                  <a href={`/detail/${item.link?.split('/').pop()}`} className="story__cate text-[#c31e40] no-underline mr-[14px] text-[12px] float-left ml-[10px]" title="Thời sự">
                    Thời sự
                  </a>
                  <h3 className='story__time mt-[5px] text-[12px]  text-[#959595]'>3 giờ trước</h3>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="highlight-pagination absolute "></div>
        <div className="swiper-button-next absolute bg-[rgba(255,255,255,.7)] [filter:drop-shadow(-2px_0_4px_rgba(0,_0,_0,_.3))] w-[24px] h-[70px] rounded-bl-[6px] rounded-tl-[6px] right-[0] text-[12px]"></div>
        <div className="swiper-button-prev absolute bg-[rgba(255,255,255,.7)] [filter:drop-shadow(2px_0_4px_rgba(0,_0,_0,_.3))] w-[24px] h-[70px] rounded-br-[6px] rounded-tr-[6px] left-[0]"></div>
      </div>
    </div>

  )
}