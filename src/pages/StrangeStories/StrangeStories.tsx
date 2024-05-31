import { Topic } from "~/services/const/enum";
import { RSSApi } from "~/utils/rssUtilsl";
import { rssFeed } from "~/services/const/map";
import MainPage3 from "../MainPage/components/MainPage3";

export default function StrangeStories() {
    const topic = RSSApi(rssFeed[Topic.STRANGE_STORIES], 0)
  return (
    <MainPage3 data={topic} />
  )
}
