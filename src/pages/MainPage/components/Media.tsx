import React from 'react'

export default function Media() {
  return (
    <div className='bg-primaryColor text-white p-5'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-xl'>Media</h2>
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
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div key={index} className='flex flex-col gap-y-2'>
              <img src='https://source.unsplash.com/random' className='w-full aspect-video object-cover' alt='' />
              <p className='font-bold text-base'>
                Tổ hợp Polonez Belarus sẽ gây ác mộng cho binh sĩ NATO tại Hành lang Suwalki{' '}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}
