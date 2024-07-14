import { Link } from "react-router-dom"
import { BeatLoader } from "react-spinners"
import { RSS } from "~/services/api/model/RSSModel"

export default function MainPage1(props: { data: RSS[], data2: RSS[] }) {
  if (!props.data.length || !props.data2.length) {
    return <BeatLoader />
  }

  return (
    <div>
      <div className='flex items-end gap-x-6'>
        <h2 className='text-primaryColor text-[19px] whitespace-nowrap font-bold'>Toàn cảnh - Sự kiện</h2>
        <div className='h-[1px] bg-primaryColor -translate-y-1 flex-1'></div>
        <div className='flex uppercase items-center bg-primaryColor gap-x-2 text-[16px] text-white py-2 w-[26%] justify-center font-semibold'>
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
      <div className='flex items-start gap-x-6 mt-5'>
        <div className='w-[45%] flex flex-col gap-y-1'>
          <Link to={`/detail/${props.data[0].link?.split('/').pop()}`}>
            <img src={props.data[0].image} className='w-full aspect-video object-cover cursor-pointer' alt='' />
          </Link>
          <h2 className='font-bold text-[17px] text-[#404040] hover:text-primaryColor cursor-pointer pt-3'>
            <Link to={`/detail/${props.data[0].link?.split('/').pop()}`}>
              {props.data[0].title}
            </Link>
          </h2>
          <p className='text-[12px] text-[#707070]'>{props.data[0].pubDate}</p>
          <p className="text-[14px] text-[#4E4E4E]">
            {props.data[0].description}
          </p>
        </div>
        <div className='w-[28%] flex flex-col'>
          {props.data.slice(1).map((item, index) => (
            <article key={index} className="mb-5 story">
              <figure className="w-[90px] h-[50px] float-left mr-3 mt-[3px] story__thumb">
                <Link to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                  <img className="" src={item.image} alt={item.title} />
                </Link>
              </figure>
              <h2 className="font-semibold text-base text-[15px] text-[#404040] hover:text-primaryColor cursor-pointer story__heading">
                <Link className="cms-link" to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                  {item.title}
                </Link>
              </h2>
              <time className="mt-1.5 text-xs leading-[14px] text-[#959595] story__time">{item.pubDate}</time>
            </article>
          ))}
        </div>
        <div className='w-[27%] flex flex-col gap-y-10'>
          <div className='p-3 flex flex-col gap-y-3 border-b-[1px] border-l-[1px] border-r-[1px] [box-shadow:5px_5px_5px_rgba(0,_0,_0,_.1)]'>
            {props.data2.map((item, index) => (
              <h3 key={index} className='font-bold text-[15px] text-[#4E4E4E] py-1 border-b  hover:text-primaryColor cursor-pointer'>
                <Link to={`/detail/${item.link?.split('/').pop()}`}>
                  {item.title}
                </Link>
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}
