import React from 'react'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { RSS } from '~/services/api/model/RSSModel'

export default function Media(props: { data: RSS[] }) {
  if (props.data.length === 0) {
    return <BeatLoader />
  }
  return (
    <div className='bg-primaryColor text-white p-5 mt-[30px]'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-[19px]'>Media</h2>
        <button className='flex items-center gap-x-1 text-xs'>
          Xem thêm
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
            <path
              fillRule='evenodd'
              d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='mt-3 grid grid-cols-4 gap-5'>
        {props.data.length > 0 &&
          props.data.map((item, index) => (
            <div key={index} className='flex flex-col gap-y-2'>
              <Link to={`/detail/${item.link?.split('/').pop()}`}>
                <img src={item.image} className='w-full aspect-video object-cover' alt='' />
              </Link>
              <p className='font-bold text-[13px] text-[#FFFFFF] hover:text-[#ccc] cursor-pointer'>
                <Link to={`/detail/${item.link?.split('/').pop()}`}>
                  {item.title}
                </Link>
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
