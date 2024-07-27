import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { newsTopics } from '~/services/const'
import { Topic } from '~/services/const/enum'
import { mapSlugToTopic, rssFeed } from '~/services/const/map'
import { HandleScroll } from '~/utils/HandleScroll'
import { RSSApi } from '~/utils/rssUtils'
import More from '../MainPage/components/More'
import { useAuth } from '~/Auth/AuthContext'
import { RSS } from '~/services/api/model/RSSModel'
import { favoriteArticle } from '~/utils/firebase'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { formatDistanceToNow } from 'date-fns'
import { vi } from 'date-fns/locale'


export const TopicPage = () => {
  const { topicSlug } = useParams()
  const [amountArticle, setAmountArticle] = useState(5)
  const [stickyState, setStickyState] = useState({ sticky: false, stickyy: false });
  const data = RSSApi(rssFeed[mapSlugToTopic[topicSlug || '']], amountArticle)
  const data3 = RSSApi(rssFeed[Topic.HIGHLIGHTS], 5)
  const data4 = RSSApi(rssFeed[Topic.HOT_NEWS], 5)
  const { distanceFromBottom } = HandleScroll()
  const { distanceFromTop } = HandleScroll()

  const title = mapSlugToTopic[topicSlug || '']
  const subTitle = newsTopics.filter(item => item.name === title)

  useEffect(() => {
    if (distanceFromBottom < 300) {
      setAmountArticle(prev => prev + 5);
    }

    const isSticky = distanceFromTop > 1150;
    const isStickyy = distanceFromBottom < 500;

    setStickyState({ sticky: isSticky && !isStickyy, stickyy: isStickyy });
  }, [topicSlug, distanceFromBottom, distanceFromTop]);

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


  if (!data.length) {
    return <BeatLoader />
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="cate-breadcrumb flex items-center mb-8 mt-3">
        <h1>
          <a
            className="cate-parent border-l-[7px] border-[#c31e40]  inline-block text-[20px] font-semibold pl-2.5 no-underline uppercase"
            href="#"
            title={title}>
            {title}
          </a>
        </h1>
        <ul className='flex items-center list-none pl-[20px]'>
          {subTitle.length > 0 && subTitle[0].subTopics?.map((item, index) => (
            <li key={index}>
              <Link
                className="cate-child  inline-block text-[14px] font-semibold mx-[10px] my-[0] no-underline hover:text-[#c31e40]"
                title={item.name}
                to={`/${item.link}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-col flex">
        <div className="item-primary content-col w-[650px] mr-[30px]">
          <div className="wrapper" data-source="zone-highlight-8">
            <div>
              <article className="story">
                <figure className="story__thumb relative" onMouseEnter={() => setHoveredIndex(0)} onMouseLeave={() => setHoveredIndex(null)}>
                  <Link className="cms-link" to={`/detail/${data[0].link?.split('/').pop()}`} target="_self">
                    <img loading="lazy" className="lazyloaded w-[650px]" src={data[0].image} data-src={data[0].image} alt={data[0].title} />
                  </Link>
                  {hoveredIndex === 0 && (
                    <div className='absolute top-2 right-2 text-red-500 cursor-pointer heart-icon' onClick={() => handleFavorite(data[0])}>
                      {favorited.includes(data[0].link?.split('/').pop() ?? '') ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
                    </div>
                  )}
                </figure>
                <h2 className="story__heading pt-3  text-[22px]">
                  <Link className="cms-link font-semibold hover:text-primaryColor cursor-pointer" to={`/detail/${data[0].link?.split('/').pop()}`} target="_self">
                    {data[0].title}
                  </Link>
                </h2>
              </article>
            </div>
          </div>
          <div className="many-pack content-list" data-source="zone-timeline-8">
            {data.slice(1).map((item, index) => (
              <article key={index} className="story mt-[25px] h-[145px]">
                <figure className="story__thumb float-left mr-[20px] relative" onMouseEnter={() => setHoveredIndex(index + 1)} onMouseLeave={() => setHoveredIndex(null)}>
                  <Link to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                    <img loading="lazy" className="lazyloaded w-[220px] h-[145px]" src={item.image} alt={item.title} />
                  </Link>
                  {hoveredIndex === index + 1 && (
                    <div className='absolute top-2 right-2 text-red-500 cursor-pointer heart-icon' onClick={() => handleFavorite(item)}>
                      {favorited.includes(item.link?.split('/').pop() ?? '') ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
                    </div>
                  )}
                </figure>
                <h3 className="story__heading">
                  <Link className="cms-link font-semibold text-[16px] leading-[24px]  hover:text-primaryColor cursor-pointer" to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                    {item.title}
                  </Link>
                </h3>
                <time className="story__time mt-[5px] text-[12px] leading-[14px] text-[#959595]">{item.pubDate ? formatDistanceToNow(new Date(item.pubDate), { locale: vi }) + ' trước' : ''}</time>
                <div className="story__summary story__shorten mt-[8px] text-[15px]  leading-[22px] max-h-[88px] overflow-hidden">
                  {item.description}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={`item-secondary sidebar-middle w-[160px] flex flex-col ${stickyState.stickyy ? 'justify-between' : ''}`}>
          <div id="sidebar-top-1">
            <div className="header-bg mb-7">
              <div className="box-heading mb-5 pb-[3px]">
                <h3 className="wrap-heading">
                  <span className="heading bg-[#f5f5f5] border-l-[7px] border-[#c31e40]  text-[22px] font-semibold block py-[5px] px-[5px]">Tin tiêu điểm</span>
                </h3>
              </div>
              <div className="box-content" data-source="zone-box-focus-8">
                {data3.map((item, index) => (
                  <article key={index} className="story mt-3 first:mt-0">
                    <figure className="story__thumb w-[160px] h-[105px]">
                      <Link to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                        <img loading="lazy" className="lazyloaded h-[105px]" src={item.image} alt={item.title} />
                      </Link>
                    </figure>
                    <h2 className="story__heading text-[12px]  font-semibold pt-2">
                      <Link className="cms-link hover:text-primaryColor cursor-pointer" to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                        {item.title}
                      </Link>
                    </h2>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div id="sidebar-sticky-1" className={`sidebar ${stickyState.sticky ? 'sticky-top-1 top-[40px] max-w-[160px]' : ''}`}>
            <div className="header-bg mb-7">
              <div className="box-heading mb-5 pb-[3px]">
                <h3 className="wrap-heading">
                  <span className="heading bg-[#f5f5f5] border-l-[7px] border-[#c31e40]  text-[22px] font-semibold block py-[5px] px-[5px]">Tin nổi bật</span>
                </h3>
              </div>
              <div className="box-content" data-source="zone-box-focus-8">
                {data4.map((item, index) => (
                  <article key={index} className="story mt-3 first:mt-0">
                    <figure className="story__thumb w-[160px] h-[105px]">
                      <Link to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                        <img loading="lazy" className="lazyloaded h-[105px]" src={item.image} alt={item.title} />
                      </Link>
                    </figure>
                    <h2 className="story__heading text-[12px]  font-semibold pt-2">
                      <Link className="cms-link hover:text-primaryColor cursor-pointer" to={`/detail/${item.link?.split('/').pop()}`} title={item.title}>
                        {item.title}
                      </Link>
                    </h2>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
      <More />
    </>
  )
}
