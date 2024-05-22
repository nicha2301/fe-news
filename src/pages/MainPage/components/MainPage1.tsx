import List1 from "./List1"
import List2 from "./List2"

interface Props {
  title: String
  title2: String
}
export default function MainPage1({ title, title2 }: Props) {
  return (
    <div>
      <div className='flex items-end gap-x-6'>
        <h2 className='text-primaryColor text-xl whitespace-nowrap font-bold'>{title}</h2>
        <div className='h-[1px] bg-primaryColor -translate-y-1 flex-1'></div>
        <div className='flex uppercase items-center bg-primaryColor gap-x-2 text-lg text-white py-2 w-[25%] justify-center font-semibold'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path
              fillRule='evenodd'
              d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
              clipRule='evenodd'
            />
          </svg>
          {title2}
        </div>
      </div>
      <div className='flex items-start gap-x-6 mt-5'>
        <div className='w-[45%] flex flex-col gap-y-3'>
          <img src='https://source.unsplash.com/random' alt='' className='w-full aspect-square object-cover' />
          <h2 className='font-bold text-lg'>Nga cắt đứt cao tốc nối Liptsy, chỉ còn cách Kharkov</h2>
          <p className='text-xs'>37 phút trước</p>
          <p>
            GD&TĐ - Sau khi cắt đứt tuyến đường cao tốc Kharkov-Liptsy, đồng thời bao vây thị trấn chiến lược Volchansk,
            Quân Nga chỉ còn cách thành phố Kharkov gần 40km.
          </p>
        </div>
        <div className='w-[28%] flex flex-col gap-y-3'>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <List2/>
            ))}
        </div>
        <div className='w-[27%] flex flex-col gap-y-10'>
          <div className='shadow-2xl p-3 flex flex-col gap-y-3'>
            {Array(6)
              .fill(0)
              .map((_, index) => (
              <List1/>
              ))}
          </div>
          <div className='bg-[#ECECEC] p-3 rounded-lg shadow-2xl'>
            <h3 className='text-primaryColor font-bold text-xl flex items-center gap-x-3'>
              <div className='h-7 w-1.5 bg-primaryColor'></div>
              <span>SUY NGẪM</span>
            </h3>
            <h3 className='font-bold text-xl my-2'>Thể hiện bản lĩnh và năng lực</h3>
            <p className='italic'>
              GD&TĐ - Theo Báo cáo chỉ số năng lực cạnh tranh cấp tỉnh và Chỉ số xanh cấp tỉnh năm 2023, chất lượng điều
              hành kinh
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
