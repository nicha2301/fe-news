import Event from "./Event";
import MainPage1 from "./MainPage1";
import MainPage2 from "./MainPage2";
import Media from "./Media";
import More from "./More";

export default function MainPage() {
  return (
    <div className='flex flex-col gap-y-4 '>
      <Event />
      <MainPage2 title={'Thời sự'} />
      <MainPage1 title={'Giáo dục'} title2={'TIÊU ĐIỂM TUẦN'} />
      <MainPage2 title={'Giáo dục pháp luật'} />
      <MainPage1 title={'Toàn cảnh - Sự kiện'} title2={'MỚI CẬP NHẬT'} />
      <MainPage2 title={'Kết nối'} />
      <MainPage2 title={'Trao đổi'} />
      <MainPage2 title={'Học đường'} />
      <Media />
      <More />
    </div>
  )
}
