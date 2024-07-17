import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { RSS } from '~/services/api/model/RSSModel'

export default function MainPage2(props: { data: RSS[] }) {
  if (props.data.length === 0) {
    return <BeatLoader />
  }

  return (
    <div className='mt-[30px]'>
      <div className='flex items-end gap-x-2'>
        <h2 className='text-primaryColor font-bold text-[19px] whitespace-nowrap'>{props.data[0].category}</h2>
        <div className='w-full h-[1px] -translate-y-1 bg-primaryColor'></div>
      </div>
      <div className='mt-4 flex items-start lg:flex-row flex-col gap-4'>
        <div className='w-full lg:w-1/2'>
          <a href={`/detail/${props.data[0].link?.split('/').pop()}`}>
            <img loading="lazy" src={props.data[0].image} className='w-full aspect-video object-cover cursor-pointer' alt='' />
          </a>
          <h2 className='font-bold text-[17px]  hover:text-primaryColor cursor-pointer pt-3'>
            <a href={`/detail/${props.data[0].link?.split('/').pop()}`}>
              {props.data[0].title}
            </Link>
          </h2>
          <span className='text-[12px] text-[#707070]'>{props.data[0].pubDate}</span>
          <p className='text-[14px] '>
            {props.data[0].description}
          </p>
        </div>
        <div className='w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {props.data.slice(1).map((item, index) => (
            <div key={index} className='flex flex-col gap-y-1'>
              <a href={`/detail/${item.link?.split('/').pop()}`}>
                <img loading="lazy" src={item.image} className='w-full aspect-video object-cover' alt='' />
              </a>
              <h3 className='font-semibold text-[14px]  hover:text-primaryColor cursor-pointer'>
                <a href={`/detail/${item.link?.split('/').pop()}`}>
                  {item.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
