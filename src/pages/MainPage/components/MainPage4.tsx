import { formatDistanceToNow } from 'date-fns'
import { vi } from 'date-fns/locale'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { useAuth } from '~/Auth/AuthContext'
import { RSS } from '~/services/api/model/RSSModel'
import { favoriteArticle } from '~/utils/firebase'

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
    <div className="mb-8 hot-news">
      <div className="mb-8 box-heading">
        <h3 className="relative top-2 bg-white border-b-2 border-[#c31e40]  wrap-heading">
          <span className="text-2xl leading-6 text-[#c31e40] uppercase pr-2 font-semibold heading">Tin tiêu điểm</span>
        </h3>
      </div>
      <div className="grid grid-cols-[380px_1fr] gap-6 box-content" data-source="content-box-focus">
        <article className="story primary">
          <figure className="mb-2.5 story__thumb relative" onMouseEnter={() => setHoveredIndex(0)} onMouseLeave={() => setHoveredIndex(null)}>
            <a href={`/detail/${props.data[0].link?.split('/').pop()}`} title={props.data[0].title}>
              <img loading="lazy" className="" src={props.data[0].image} alt={props.data[0].title} />
            </a>
            {hoveredIndex === 0 && (
              <div className='absolute top-2 right-2 text-red-500 cursor-pointer heart-icon' onClick={() => handleFavorite(props.data[0])}>
                {favorited.includes(props.data[0].link?.split('/').pop() ?? '') ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
              </div>
            )}
          </figure>
          <h2 className="font-semibold text-lg leading-6  hover:text-primaryColor cursor-pointer story__heading">
            <a href={`/detail/${props.data[0].link?.split('/').pop()}`}>
              {props.data[0].title}
            </a>
          </h2>
          <Link to={`${props.data[0].category}`} className="text-[#c31e40] no-underline mr-3.5 text-xs leading-[14px] float-left mt-1.5 story__cate" >
            {props.data[0].category}
          </Link>
          <time className="mt-1.5 text-xs leading-[14px] text-[#959595] story__time">{props.data[0].pubDate ? formatDistanceToNow(props.data[0].pubDate, { locale: vi }) + " trước" : ''}</time>
          <div className="mt-1 text-base leading-[22px] story__summary story__shorten">
            {props.data[0].description}
          </div>
        </article>
        <div className="h-[480px] overflow-y-scroll custom-scrollbar feature">
          {props.data.slice(1).map((item, index) => (
            <article key={index} className="mb-5 story">
              <figure className="w-[135px] h-[90px] float-left mr-3 mt-[3px] story__thumb relative" onMouseEnter={() => setHoveredIndex(index + 1)} onMouseLeave={() => setHoveredIndex(null)}>
                <a href={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                  <img loading="lazy" className="" src={item.image} alt={item.title} />
                </a>
                {hoveredIndex === index + 1 && (
                  <div className='absolute top-2 right-2 text-red-500 cursor-pointer heart-icon' onClick={() => handleFavorite(item)}>
                    {favorited.includes(item.link?.split('/').pop() ?? '') ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
                  </div>
                )}
              </figure>
              <h2 className="font-semibold text-base leading-6  hover:text-primaryColor cursor-pointer story__heading">
                <Link className="cms-link" to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                  {item.title}
                </Link>
              </h2>
              <Link to={`/detail/${item.link?.split('/').pop()}`} className="text-[#c31e40] no-underline mr-3.5 text-xs leading-[14px] float-left mt-1.5 story__cate" title={item.category}>
                {item.category}
              </Link>
              <time className="mt-1.5 text-xs leading-[14px] text-[#959595] story__time">{item.pubDate ? formatDistanceToNow(item.pubDate, { locale: vi }) + " trước" : ''}</time>
              <div className="mt-1.5 text-sm leading-[22px] max-h-[66px] ml-[147px] overflow-hidden story__summary story__shorten">
                {item.description}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>


  )
}
