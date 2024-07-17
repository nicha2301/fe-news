import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { RSS } from '~/services/api/model/RSSModel'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/grid'
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/modules'
export default function MainPage3(props: { data: RSS[] }) {
  if (props.data.length === 0) {
    return <BeatLoader />
  }

  return (
    <div className='mt-[30px] container'>
      <div className='flex items-end gap-x-2'>
        <h2 className='text-primaryColor font-bold text-[19px] whitespace-nowrap'>{props.data[0].category}</h2>
        <div className='w-full h-[1px] -translate-y-1 bg-primaryColor'></div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
        grid={{
          rows: 3,
          fill: 'row'
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            grid: {
              rows: 3,
              fill: 'row'
            }
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
            grid: {
              rows: 3,
              fill: 'row'
            }
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            grid: {
              rows: 3,
              fill: 'row'
            }
          }
        }}
        slidesPerView={3}
        navigation
        className='container my-5'
      >
        {props.data.map((item, index) => (
          <SwiperSlide key={index}>
            <div key={index} className='flex items-center gap-4'>
              <a className='block w-1/2' href={`/detail/${item.link?.split('/').pop()}`}>
                <img loading="lazy" src={item.image} className='w-full aspect-video object-cover' alt='' />
              </a>
              <h3 className='font-semibold w-1/2 hover:text-primaryColor cursor-pointer'>
                <a href={`/detail/${item.link?.split('/').pop()}`}>{item.title}</a>
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
