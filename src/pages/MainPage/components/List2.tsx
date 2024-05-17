import React from 'react'

export default function List2() {
  return  <div className='flex items-start gap-x-2 py-3 border-b border-b-gray-300'>
  <img src='https://source.unsplash.com/random' alt='' className='w-24 h-14 object-cover flex-shrink-0' />
  <div className='flex flex-col gap-y-1'>
    <h3 className='font-bold leading-none'>
      Chùm ảnh: Son Heung-min ‘đá văng’ hy vọng vô địch của Arsenal{' '}
    </h3>
    <p className='text-xs'>1 giờ trước</p>
  </div>
</div>
}
