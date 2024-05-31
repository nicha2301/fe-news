import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mapSlugToTopic, rssFeed } from '~/services/const/map'
import { RSSApi } from '~/utils/rssUtils'
import MainPage3 from '../MainPage/components/MainPage3'
import { RSS } from '~/services/api/model/RSSModel'

export const TopicPage = () => {
  const [topic, setTopic] = useState<RSS[]>([])
  const { topicSlug } = useParams()
  // useEffect(() => {
  //     const result = RSSApi(rssFeed[mapSlugToTopic[topicSlug||'']], 5);
  //     setTopic(result);
  // }, [topicSlug]);
  
  
  return <MainPage3 data={RSSApi(rssFeed[mapSlugToTopic[topicSlug||'']], 5)} />
}
