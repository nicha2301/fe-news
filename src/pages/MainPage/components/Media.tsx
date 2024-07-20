import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { useAuth } from '~/Auth/AuthContext';
import { RSS } from '~/services/api/model/RSSModel'
import { favoriteArticle } from '~/utils/firebase';

export default function Media(props: { data: RSS[] }) {
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
    <div className='bg-primaryColor text-white p-5 mt-[30px]'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-[19px]'>Media</h2>
        <button className='flex items-center gap-x-1 text-xs'>
          Xem thêm
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
            <path
              fillRule='evenodd'
              d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='mt-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5'>
        {props.data.length > 0 &&
          props.data.map((item, index) => (
            <div key={index} className='flex flex-col gap-y-2 relative' onMouseEnter={() => setHoveredIndex(index + 1)} onMouseLeave={() => setHoveredIndex(null)}>
              <a href={`/detail/${item.link?.split('/').pop()}`}>
                <img loading="lazy" src={item.image} className='w-full aspect-video object-cover' alt='' />
              </a>
              {hoveredIndex === index + 1 && (
                <div className='absolute top-2 right-2 text-red-500 cursor-pointer heart-icon' onClick={() => handleFavorite(item)}>
                  {favorited.includes(item.link?.split('/').pop() ?? '') ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
                </div>
              )}
              <p className='font-bold text-[13px] text-[#FFFFFF] hover:text-[#ccc] cursor-pointer'>
                <Link to={`/detail/${item.link?.split('/').pop()}`}>
                  {item.title}
                </Link>
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
