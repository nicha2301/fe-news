import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { RSS } from '~/services/api/model/RSSModel'

export default function Event(props: { data: RSS[] }) {
  if (props.data.length === 0) {
    return <BeatLoader />
  }
  return (
    <div>
      <div className='flex items-start gap-5'>
        <div className='w-1/2'>
          <Link to={`/detail/${props.data[0].link?.split('/').pop()}`}>
            <img src={props.data[0].image} className='w-full aspect-video object-cover' alt='' />
          </Link>
        </div>
        <div className='w-[30%] flex flex-col gap-y-4'>
          <h3 className='font-bold text-[20px] text-[#4E4E4E] hover:text-primaryColor cursor-pointer'>
            <Link to={`/detail/${props.data[0].link?.split('/').pop()}`}>
              {props.data[0].title}
            </Link>
          </h3>
          <i className='text-[14px] text-[#7D7D7D] italic'>{props.data[0].pubDate}</i>
          <p className='text-[15px] text-[#4E4E4E]'>
            {props.data[0].description}
          </p>
        </div>
      </div>
      <div className='mt-10 grid grid-cols-4 gap-5'>
        {props.data.slice(1).map((item, index) => (
          <div key={index} className='flex flex-col gap-y-1'>
            <Link to={`/detail/${item.link?.split('/').pop()}`}>
              <img src={item.image} className='w-full aspect-video object-cover' alt='' />
            </Link>
            <h3 className='font-semibold text-[14px] text-[#4E4E4E] hover:text-primaryColor cursor-pointer'>
              <Link to={`/detail/${item.link?.split('/').pop()}`}>
                {item.title}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
