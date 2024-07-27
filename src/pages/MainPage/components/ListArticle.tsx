import { formatDistanceToNow } from "date-fns"
import { vi } from "date-fns/locale"
import { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { BeatLoader } from "react-spinners"
import { useAuth } from "~/Auth/AuthContext"
import { RSS } from "~/services/api/model/RSSModel"
import { favoriteArticle } from "~/utils/firebase"

export const ListArticle = (props: { data: RSS[], header: boolean, onRemoveArticle?: (link: string) => void }) => {
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
      {props.header &&
        <div className='flex items-end gap-x-2'>
          <h2 className='text-primaryColor font-bold text-[19px] whitespace-nowrap'>{props.data[0].category}</h2>
          <div className='w-full h-[1px] -translate-y-1 bg-primaryColor'></div>
        </div>
      }
      {props.data.length > 0 &&
        props.data.map((item, index) =>{
          let pubDateText = '';
          if (item.pubDate) {
            const pubDate = new Date(item.pubDate);
            if (!isNaN(pubDate.getTime())) {
              pubDateText = formatDistanceToNow(pubDate, { locale: vi }) + " trước";
            }
          }

          return (
            <article className="story mt-7 overflow-hidden" key={index}>
              <figure className="story__thumb w-[300px] float-left mr-[20px] relative" onMouseEnter={() => setHoveredIndex(index + 1)} onMouseLeave={() => setHoveredIndex(null)}>
                <Link className="cms-link" to={`/detail/${item.link?.split('/').pop()}`} target="_self">
                  <img loading="lazy" className="lazyloaded" src={item.image} data-src={item.image} alt={item.title} />
                </Link>
                {hoveredIndex === index + 1 && (
                  <div className='absolute top-2 right-2 text-red-500 cursor-pointer heart-icon' onClick={() => handleFavorite(item)}>
                    {favorited.includes(item.link?.split('/').pop() ?? '') ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
                  </div>
                )}
              </figure>
              <div className="story__heading">
                <h2 className="cms-link font-semibold text-[15px] leading-6 hover:text-primaryColor cursor-pointer">
                  <Link to={`/detail/${item.link?.split('/').pop()}`} target="_self">
                    {item.title}
                  </Link>
                </h2>
                <time className="story__time mt-2 leading-5 text-[#959595] text-[12px]">{pubDateText}</time>
                <div className="story__summary mt-2 leading-6 h-22 text-[14px]">
                  {item.description}
                </div>
                {props.onRemoveArticle && (
                  <button
                    onClick={() => props.onRemoveArticle?.(item.link!)}
                    className="mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Xóa
                  </button>
                )}
              </div>
            </article>
          );
        } )
      }
    </div>

  )
}
