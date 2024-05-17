import Event from "./components/Event";
import MainPage1 from "./components/MainPage1";
import MainPage2 from "./components/MainPage2";
import Media from "./components/Media";
import More from "./components/More";

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
