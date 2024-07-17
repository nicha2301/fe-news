import { RSSApi } from '~/utils/rssUtils'
import Event from './components/Event'
import MainPage1 from './components/MainPage1'
import MainPage2 from './components/MainPage2'
import Media from './components/Media'
import More from './components/More'
import { Topic } from '~/services/const/enum'
import { rssFeed } from '../../services/const/map'
import { BeatLoader } from 'react-spinners'
import { Helmet } from 'react-helmet'

export default function MainPage() {
  const newestArticle = RSSApi(rssFeed[Topic.HOME], 6)
  const topic_news = RSSApi(rssFeed[Topic.NEWS], 5)
  const topic_legalEducation = RSSApi(rssFeed[Topic.LEGAL_EDUCATION], 5)
  const topic_education = RSSApi(rssFeed[Topic.EDUCATION], 5)
  const topic_connection = RSSApi(rssFeed[Topic.CONNECTION], 5)
  const topic_exchange = RSSApi(rssFeed[Topic.EXCHANGE], 5)
  const topic_school = RSSApi(rssFeed[Topic.SCHOOL], 5)
  const topic_humanity = RSSApi(rssFeed[Topic.HUMANITY], 5)
  const topic_world = RSSApi(rssFeed[Topic.WORLD], 5)
  const topic_health = RSSApi(rssFeed[Topic.HEALTH], 5)
  const topic_family = RSSApi(rssFeed[Topic.FAMILY], 5)
  const topic_culture = RSSApi(rssFeed[Topic.CULTURE], 5)
  const topic_sport = RSSApi(rssFeed[Topic.SPORTS], 5)
  const defense_education = RSSApi(rssFeed[Topic.WORLD_ISSUES], 6)
  const four_direction = RSSApi(rssFeed[Topic.FOUR_DIRECTIONS], 5)
  const media = RSSApi(rssFeed[Topic.MEDIA], 4)

  if (!media.length && !four_direction.length) {
    return <BeatLoader />
  }
  return (
    <div className='flex flex-col gap-y-4 '>
          <Helmet>
                <title>Báo Giáo dục và Thời đại Online</title>
            </Helmet>
      <Event data={four_direction} />
      <MainPage1 data={defense_education} data2={newestArticle} />
      <MainPage2 data={topic_news} />
      <MainPage2 data={topic_education} />
      <MainPage2 data={topic_legalEducation} />
      <MainPage2 data={topic_connection} />
      <MainPage2 data={topic_exchange} />
      <MainPage2 data={topic_school} />
      <MainPage2 data={topic_humanity} />
      <MainPage2 data={topic_world} />
      <MainPage2 data={topic_health} />
      <MainPage2 data={topic_family} />
      <Media data={media} />
      <MainPage2 data={topic_culture} />
      <MainPage2 data={topic_sport} />
      
    </div>
  )
}
