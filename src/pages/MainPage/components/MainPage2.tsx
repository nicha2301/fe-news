import { formatDistanceToNow } from 'date-fns'
import { vi } from 'date-fns/locale'
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BeatLoader } from 'react-spinners'
import { useAuth } from '~/Auth/AuthContext';
import { RSS } from '~/services/api/model/RSSModel'
import { favoriteArticle } from '~/utils/firebase';

export default function MainPage2(props: { data: RSS[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [favorited, setFavorited] = useState<string[]>([]);

  const authContext = useAuth();
  const { user } = authContext?.user ? authContext : { user: undefined };

  const handleFavorite = (article: RSS) => {
    if (!user?.googleId) {
      alert("Vui lòng đăng nhập để lưu bài báo!");
      return;
    }
    const link = article.link?.split('/').pop() ?? '';
    setFavorited((prev) => [...prev, link ?? '']);
    console.log(user.googleId, article);
    favoriteArticle(user.googleId, article);
  };
  
  if (props.data.length === 0) {
    return <BeatLoader />
  }

  return (
    <div className='mt-[30px]'>
      <div className='flex items-end gap-x-2'>
        <h2 className='text-primaryColor font-bold text-[19px] whitespace-nowrap'>{props.data[0].category}</h2>
        <div className='w-full h-[1px] -translate-y-1 bg-primaryColor'></div>
      </div>
      <div className='mt-4 flex items-start lg:flex-row flex-col gap-4'>
        <div className='w-full lg:w-1/2 relative' onMouseEnter={() => setHoveredIndex(0)} onMouseLeave={() => setHoveredIndex(null)}>
          <a href={`/detail/${props.data[0].link?.split('/').pop()}`}>
            <img loading="lazy" src={props.data[0].image} className='w-full aspect-video object-cover cursor-pointer' alt='' />
          </a>
          {hoveredIndex === 0 && (
            <div className='absolute top-2 right-2 text-red-500 cursor-pointer heart-icon' onClick={() => handleFavorite(props.data[0])}>
              {favorited.includes(props.data[0].link?.split('/').pop() ?? '') ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
            </div>
          )}
          <h2 className='font-bold text-[17px]  hover:text-primaryColor cursor-pointer pt-3'>
            <a href={`/detail/${props.data[0].link?.split('/').pop()}`}>
              {props.data[0].title}
            </a>
          </h2>
          <span className='text-[12px] text-[#707070]'>{props.data[0].pubDate ? formatDistanceToNow(props.data[0].pubDate, {locale: vi}) + " trước" : ''}</span>
          <p className='text-[14px] '>
            {props.data[0].description}
          </p>
        </div>
        <div className='w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {props.data.slice(1).map((item, index) => (
            <div key={index} className='flex flex-col gap-y-1 relative' onMouseEnter={() => setHoveredIndex(index + 1)} onMouseLeave={() => setHoveredIndex(null)}>
              <a href={`/detail/${item.link?.split('/').pop()}`}>
                <img loading="lazy" src={item.image} className='w-full aspect-video object-cover' alt='' />
              </a>
              <h3 className='font-semibold text-[14px]  hover:text-primaryColor cursor-pointer'>
                <a href={`/detail/${item.link?.split('/').pop()}`}>
                  {item.title}
                </a>
              </h3>
              {hoveredIndex === index + 1 && (
              <div className='absolute top-2 right-2 text-red-500 cursor-pointer heart-icon' onClick={() => handleFavorite(item)}>
                {favorited.includes(item.link?.split('/').pop() ?? '') ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
              </div>
            )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
