import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { ListArticle } from "~/components/Article/ListArticle";
import { HandleScroll } from "~/components/HandleScroll/HandleScroll";
import { fetchHTMLData } from '~/utils/htmlUtils';

import Slider from "../MainPage/components/Slider";

interface RSS {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image: string;
}

const htmlSourceMap: { [key: string]: string } = {
  'day-hoc-lich-su-trong-truong-pho-thong': 'https://giaoducthoidai.vn/chu-de/day-hoc-lich-su-trong-truong-pho-thong-125.html',
  'meo-vat-cuoc-song': 'https://giaoducthoidai.vn/chu-de/meo-vat-cuoc-song-70.html',
  'phong-chong-dich-covid-19-trong-truong-hoc': 'https://giaoducthoidai.vn/chu-de/phong-chong-dich-covid-19-trong-truong-hoc-128.html',
  'day-hoc-truc-tuyen': 'https://giaoducthoidai.vn/chu-de/day-hoc-truc-tuyen-101.html',
  'dong-su-kien' : 'https://giaoducthoidai.vn/dong-su-kien.html',
  "xay-dung-luat-nha-giao" : "https://giaoducthoidai.vn/chu-de/xay-dung-luat-nha-giao-183.html",
  "thoat-ly-van-mau" : "https://giaoducthoidai.vn/chu-de/thoat-ly-van-mau-122.html",
  "pv-gas" : " https://giaoducthoidai.vn/chu-de/pv-gas-10.html",
  "hoi-dap-chinh-sach-doi-voi-nha-giao": "https://giaoducthoidai.vn/chu-de/hoi-dap-chinh-sach-doi-voi-nha-giao-186.html",
  "phong-chong-bao-luc-hoc-duong" : "https://giaoducthoidai.vn/chu-de/phong-chong-bao-luc-hoc-duong-180.html",
  "tuyen-dung-va-boi-duong-giao-vien" : "https://giaoducthoidai.vn/chu-de/tuyen-dung-va-boi-duong-giao-vien-189.html",
  "70-nam-chien-thang-dien-bien-phu" : " https://giaoducthoidai.vn/chu-de/70-nam-chien-thang-dien-bien-phu-203.html",
};

export const SubjectPage = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<RSS[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const distanceFromBottom = HandleScroll();
  const sourceUrl = htmlSourceMap[topicSlug || ''];

  useEffect(() => {
    const loadData = async () => {
      if (!sourceUrl || isFetching) return;

      setIsFetching(true);
      const searchResult = await fetchHTMLData(sourceUrl, page);
      console.log('Fetched Data:', searchResult); // Kiểm tra dữ liệu trả về
      setData(prevData => page === 0 ? searchResult : [...prevData, ...searchResult]);
      setLoading(false);
      setIsFetching(false);
    };

    loadData();
  }, [page, sourceUrl]);

  useEffect(() => {
    if (distanceFromBottom < 300) {
      setPage(prevPage => prevPage + 1);
    }
  }, [distanceFromBottom]);

  useEffect(() => {
    // Reset page and data when topicSlug changes
    setPage(0);
    setData([]);
  }, [topicSlug]);

  if (loading && page === 0) {
    return <BeatLoader />;
  }

  return (
    <div className="contrainer">
      {/* <div>
        <Slider />
      </div> */}
       <div className="w-[70%] desktop-sm:w-[80%] desktop-lg:w-1/2 desktop-lg:p-0 laptop:w-11/12">
       {/* <div className=' mt-[10px] flex items-end gap-x-2'>
          <h2 className='text-primaryColor font-bold text-[19px] whitespace-nowrap'></h2>
          <div className='w-full h-[1px] -translate-y-1 bg-primaryColor'></div>
        </div> */}
      <ListArticle data={data} />
      {!loading &&
        <div className='flex items-center justify-center mt-5'>
          <button className='text-gray-700 text-[15px] py-3 px-12 rounded-full border border-gray-500' onClick={() => setPage(prevPage => prevPage + 1)}>XEM THÊM</button>
        </div>
      }
    </div>
    </div>

   
  );
};

export default SubjectPage;
