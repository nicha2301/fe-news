import React from 'react'

export default function Event() {
  return (
    <div>
      <h2 className='flex items-center gap-x-1 text-xl font-bold text-primaryColor mb-4'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
          <path
            fillRule='evenodd'
            d='M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z'
            clipRule='evenodd'
          />
        </svg>
        Sự kiện
      </h2>
      <div className='flex items-start gap-5'>
        <div className='w-1/2'>
          <img src='https://source.unsplash.com/random' className='w-full aspect-video object-cover' alt='' />
        </div>
        <div className='w-[30%] flex flex-col gap-y-4'>
          <h3 className='text-2xl font-bold'>Yêu cầu mới trong dạy học Ngữ văn</h3>
          <i>5 giờ trước</i>
          <p>
            GD&TĐ - Đổi mới trong đề thi tốt nghiệp THPT từ năm 2025 tác động mạnh mẽ trở lại tới công tác dạy học Ngữ
            văn trong nhà trường.
          </p>
        </div>
        <div className='w-[20%] flex flex-col gap-y-5'>
          <img src='https://images.giaoducthoidai.vn/Uploaded/2024/lwpaljo/2022_06_13/300x80-1369.png' alt='' />
          <img src='https://images.giaoducthoidai.vn/Uploaded/2024/lwpaljo/2022_06_13/210x250-286.png' alt='' />
        </div>
      </div>
      <div className='mt-10 grid grid-cols-4 gap-5'>
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
