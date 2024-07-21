import { formatDistanceToNow } from 'date-fns'
import { vi } from 'date-fns/locale'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { useAuth } from '~/Auth/AuthContext'
import { RSS } from '~/services/api/model/RSSModel'
import { favoriteArticle } from '~/utils/firebase'

export default function Event(props: { data: RSS[] }) {
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
    <div>
      <div className='flex items-start flex-col lg:flex-row gap-5'>
        <div className='lg:w-1/2 w-full relative' onMouseEnter={() => setHoveredIndex(0)} onMouseLeave={() => setHoveredIndex(null)}>
          <Link to={`/detail/${props.data[0].link?.split('/').pop()}`}>
            <img loading="lazy" src={props.data[0].image} className='w-full aspect-video object-cover' alt='' />
          </Link>
          {hoveredIndex === 0 && (
            <div className='absolute top-2 right-2 text-red-500 cursor-pointer heart-icon' onClick={() => handleFavorite(props.data[0])}>
              {favorited.includes(props.data[0].link?.split('/').pop() ?? '') ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
            </div>
          )}
        </div>
        <div className='lg:w-[30%] w-full flex flex-col gap-y-4'>
          <h3 className='font-bold text-[20px] hover:text-primaryColor cursor-pointer'>
            <Link to={`/detail/${props.data[0].link?.split('/').pop()}`}>
              {props.data[0].title}
            </Link>
          </h3>
          <i className='text-[14px] text-[#7D7D7D] italic'>{props.data[0].pubDate ? formatDistanceToNow(new Date(props.data[0].pubDate), { locale: vi }) + ' trước' : ''}</i>
          <p className='text-[15px] '>
            {props.data[0].description}
          </p>
        </div>
      </div>
      <div className='mt-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5'>
        {props.data.slice(1).map((item, index) => (
          <div key={index} className='flex flex-col gap-y-1 relative' onMouseEnter={() => setHoveredIndex(index + 1)} onMouseLeave={() => setHoveredIndex(null)}>
            <Link to={`/detail/${item.link?.split('/').pop()}`}>
              <img loading="lazy" src={item.image} className='w-full aspect-video object-cover' alt='' />
            </Link>
            <h3 className='font-semibold text-[14px] hover:text-primaryColor cursor-pointer'>
              <Link to={`/detail/${item.link?.split('/').pop()}`}>
                {item.title}
              </Link>
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
  )
}
