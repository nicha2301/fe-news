import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { RSS } from '~/services/api/model/RSSModel'

export default function MainPage1(props: { data: RSS[]; data2: RSS[] }) {
  if (!props.data.length || !props.data2.length) {
    return <BeatLoader />
  }

  return (
    <div>
      <div className='flex items-end xl:flex-row flex-col gap-5'>
        <div className='w-full xl:w-[73%]'>
          <div className='flex items-end gap-4'>
            <h2 className='text-primaryColor text-[19px] whitespace-nowrap font-bold'>Toàn cảnh - Sự kiện</h2>
            <div className='h-[1px] bg-primaryColor -translate-y-1 flex-1'></div>
          </div>
          <div className='flex items-start md:flex-row flex-col gap-4 mt-5'>
            <div className='w-full md:w-[60%] flex flex-col gap-y-1'>
              <Link to={`/detail/${props.data[0].link?.split('/').pop()}`}>
                <img src={props.data[0].image} className='w-full aspect-video object-cover cursor-pointer' alt='' />
              </Link>
              <h2 className='font-bold text-[17px] text-[#404040] hover:text-primaryColor cursor-pointer pt-3'>
                <Link to={`/detail/${props.data[0].link?.split('/').pop()}`}>{props.data[0].title}</Link>
              </h2>
              <p className='text-[12px] text-[#707070]'>{props.data[0].pubDate}</p>
              <p className='text-[14px] text-[#4E4E4E]'>{props.data[0].description}</p>
            </div>
            <div className='w-full md:w-[40%] flex flex-col'>
              {props.data.slice(1).map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-x-2 overflow-hidden mt-[10px] pt-[10px] border-t-[#eee] border-t border-solid overflow-hidden'
                >
                  <Link to={`/detail/${item.link?.split('/').pop()}`}>
                    <img
                      src={item.image}
                      alt=''
                      className='w-[80px] object-cover object-center flex-shrink-0'
                      style={{ maxWidth: 'none' }}
                    />
                  </Link>
                  <div className='flex flex-col'>
                    <h3 className='font-bold text-[13px] text-[#4E4E4E] leading-none hover:text-primaryColor cursor-pointer'>
                      <Link to={`/detail/${item.link?.split('/').pop()}`}>{item.title}</Link>
                    </h3>
                    <p className='text-[11px] text-[#707070]'>{item.pubDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full xl:w-[27%]'>
          <div className='flex uppercase items-center bg-primaryColor gap-x-2 text-[16px] text-white py-2 justify-center font-semibold'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                clipRule='evenodd'
              />
            </svg>
            Mới cập nhật
          </div>
          <div className='mt-5 flex flex-col gap-y-10'>
            <div className='p-3 flex flex-col gap-y-3 border-b-[1px] border-l-[1px] border-r-[1px] [box-shadow:5px_5px_5px_rgba(0,_0,_0,_.1)]'>
              {props.data2.map((item, index) => (
                <h3
                  key={index}
                  className='font-bold text-[14px] text-[#4E4E4E] leading-none py-3 border-b  hover:text-primaryColor cursor-pointer'
                >
                  <Link to={`/detail/${item.link?.split('/').pop()}`}>{item.title}</Link>
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
