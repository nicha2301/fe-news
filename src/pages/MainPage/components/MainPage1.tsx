import { formatDistanceToNow } from "date-fns"
import { vi } from "date-fns/locale"
import { BeatLoader } from "react-spinners"
import { RSS } from "~/services/api/model/RSSModel"

export default function MainPage1(props: { data: RSS[], data2: RSS[] }) {
  if (!props.data.length || !props.data2.length) {
    return <BeatLoader />
  }

  return (
    <div className="p-4">
    <div className='flex items-end gap-x-6 flex-wrap'>
      <h2 className='text-primaryColor text-[19px] whitespace-nowrap font-bold'>Toàn cảnh - Sự kiện</h2>
      <div className='h-[1px] bg-primaryColor -translate-y-1 flex-1'></div>
      <div className='flex uppercase items-center bg-primaryColor gap-x-2 text-[16px] text-white py-2 w-full md:w-auto md:w-[26%] justify-center font-semibold'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
          <path
            fillRule='evenodd'
            d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
            clipRule='evenodd'
          />
        </svg>
        Mới cập nhật
      </div>
    </div>
    <div className='flex flex-col md:flex-row items-start gap-x-6 mt-5'>
      <div className='w-full md:w-[45%] flex flex-col gap-y-1'>
        <a href={`/detail/${props.data[0].link?.split('/').pop()}`}>
          <img loading="lazy" src={props.data[0].image} className='w-full aspect-video object-cover cursor-pointer' alt='' />
        </a>
        <h2 className='font-bold text-[17px] hover:text-primaryColor cursor-pointer pt-3'>
          <a href={`/detail/${props.data[0].link?.split('/').pop()}`}>
            {props.data[0].title}
          </a>
        </h2>
        <p className='text-[12px] text-[#707070]'>{props.data[0].pubDate ? formatDistanceToNow(props.data[0].pubDate, {locale: vi}) + " trước" : ''}</p>
        <p className="text-[14px] ">
          {props.data[0].description}
        </p>
      </div>
      <div className='w-full md:w-[28%] flex flex-col gap-4'>
        {props.data.slice(1).map((item, index) => (
          <article key={index} className="mb-5 story">
            <figure className="w-[90px] h-[50px] float-left mr-3 mt-[3px] story__thumb">
              <a href={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                <img loading="lazy" className="" src={item.image} alt={item.title} />
              </a>
            </figure>
            <h2 className="font-semibold text-base text-[15px] hover:text-primaryColor cursor-pointer story__heading">
              <a className="cms-link" href={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                {item.title}
              </a>
            </h2>
            <time className="mt-1.5 text-xs leading-[14px] text-[#959595] story__time">{item.pubDate ? formatDistanceToNow(item.pubDate, {locale: vi}) + " trước" : ''}</time>
          </article>
        ))}
      </div>
      <div className='w-full md:w-[27%] flex flex-col gap-y-10'>
        <div className='p-3 flex flex-col gap-y-3 border-b-[1px] border-l-[1px] border-r-[1px] [box-shadow:5px_5px_5px_rgba(0,_0,_0,_.1)]'>
          {props.data2.map((item, index) => (
            <h3 key={index} className='font-bold text-[15px] py-1 border-b hover:text-primaryColor cursor-pointer'>
              <a href={`/detail/${item.link?.split('/').pop()}`}>
                {item.title}
              </a>
            </h3>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  )
}
