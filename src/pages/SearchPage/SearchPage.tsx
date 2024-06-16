import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { ListArticle } from "~/components/Article/ListArticle";
import { HandleScroll } from "~/components/HandleScroll/HandleScroll";
import { RSS } from "~/services/api/model/RSSModel";
import { SearchResults } from '../../utils/rssUtils';
import { Input } from "~/components/ui/input";

export const SearchPage = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<RSS[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation()
  const nav = useNavigate()
  const distanceFromBottom = HandleScroll()
  const query = new URLSearchParams(location.search).get('q')

  useEffect(() => {
    const loaddata = async () => {
      if (!query || isFetching) return;

      setIsFetching(true);
      const searchResult = await SearchResults(`https://giaoducthoidai.vn/tim-kiem/?q=${query}&page=${page}`);
      setData(prevData => [...prevData, ...searchResult]);
      setLoading(false);
      setIsFetching(false)
    }

    loaddata()
  }, [page, query]);

  useEffect(() => {
    if (distanceFromBottom < 300) {
      setPage(page + 1)
    }
  }, [distanceFromBottom])

  const handleSearch = (event: any) => {
    if (event.key === 'Enter' && search.trim() !== '') {
      const newQuery = new URLSearchParams(location.search);
      newQuery.set('q', encodeURIComponent(search.trim()));
      nav({ search: newQuery.toString() });
      setPage(1);
      setData([]);
    }
  };

  if (data && loading && page === 1) {
    return <BeatLoader />
  }

  return (
    <div className="w-[70%] desktop-sm:w-[80%] desktop-lg:w-1/2 desktop-lg:p-0 laptop:w-11/12">
      <div className="search-wrapper mb-[35px]">
        <div className="input-search relative mb-[20px]">
          <Input 
            type="text"
            className="txtsearch2 rounded-[35px] h-[54px] text-[20px] text-[#000] pl-[20px] pr-[60px] border-[1px] border-[solid] border-[#c2c1c1] w-full"
            placeholder="Nhập từ khóa tìm kiếm"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
        
          <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-[15px] top-2/4 -translate-y-1/2 w-[32px] h-[28px] opacity-50" />
        </div>
        <p className="result text-[#737373] text-[22px] leading-[29px] mb-[35px]">
          <span className="text-[#000]">{data[0]?.category}</span>
        </p>
      </div>
      <ListArticle data={data} />
      {!loading &&
        <div className='flex items-center justify-center mt-5'>
          <button className='text-gray-700 text-[15px] py-3 px-12 rounded-full border border-gray-500'>XEM THÊM</button>
        </div>
      }
    </div>
  )
}
