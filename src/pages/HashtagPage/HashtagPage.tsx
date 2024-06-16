import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { ListArticle } from "~/components/Article/ListArticle";
import { HandleScroll } from "~/components/HandleScroll/HandleScroll";
import { RSS } from "~/services/api/model/RSSModel";


import { topicsWithoutRSS } from '~/services/const/map'; 
import { fetchHTMLData } from "~/utils/rssUtils";



export const HashtagPage = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<RSS[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const distanceFromBottom = HandleScroll();
  const sourceUrl = topicsWithoutRSS[topicSlug || ''];

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
    <div className="container">
     
      <div className="w-[70%] desktop-sm:w-[80%] desktop-lg:w-1/2 desktop-lg:p-0 laptop:w-11/12">
        
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

export default HashtagPage;
