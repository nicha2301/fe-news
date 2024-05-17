import React from 'react'

export default function More() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <button className='text-gray-700 py-3 px-12 rounded-full border border-gray-500'>XEM THÊM</button>
      </div>
      <div className='flex items-center bg-primaryColor rounded-t-2xl text-white font-bold text-lg'>
        <div className='flex-1 py-4 text-center border-r border-r-white'>GIÁO DỤC</div>
        <div className='flex-1 py-4 text-center border-r border-r-white'>THỜI SỰ</div>
        <div className='flex-1 py-4 text-center border-r border-r-white'>GIÁO DỤC PHÁP LUẬT</div>
        <div className='flex-1 py-4 text-center border-r border-r-white'>KẾT NỐI</div>
        <div className='flex-1 py-4 text-center'>MEDIA</div>
      </div>
    </>
  )
}
