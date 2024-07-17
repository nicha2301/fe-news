import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { RSS } from '~/services/api/model/RSSModel';
export const NewsSwiper = (props: { data: RSS[] }) => {
  if (props.data.length === 0) {
    return <BeatLoader />
  }

  return (
    <div className='bg-[linear-gradient(180deg,_#c31e40_0,_rgba(120,_14,_36,_.85)_39.58%,_rgba(58,_0,_12,_.85)_100%)] text-white p-6 my-[30px]'>
      <div className='flex items-center justify-between mb-[20px] border-b'>
        <h2 className='font-bold text-[19px]'>CÙNG CHUYÊN MỤC</h2>
        <div className="custom-pagination relative"></div>
      </div>
      {props.data.length > 0 && (
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true, el: '.custom-pagination' }}
        >
          {props.data.map((item, index) => (
            <SwiperSlide key={index}>
              <div key={index} className='flex flex-col gap-y-2'>
                <a href={`/detail/${item.link?.split('/').pop()}`}>
                  <img loading="lazy" src={item.image} className='w-[245px] h-[165px]' alt={item.title} />
                </a>
                <p className='font-semibold text-[15px] text-[#FFFFFF] hover:text-[#ccc] cursor-pointer'>
                  <Link to={`/detail/${item.link?.split('/').pop()}`}>
                    {item.title}
                  </Link>
                </p>
                <span className='text-[12px] text-[#CED4DA]'>{props.data[0].pubDate}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}