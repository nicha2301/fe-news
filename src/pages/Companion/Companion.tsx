import { Topic } from "~/services/const/enum";
import { RSSApi } from "~/utils/rssUtilsl";
import { rssFeed } from "~/services/const/map";
import MainPage3 from "../MainPage/components/MainPage3";

export default function Companion() {
    const topic = RSSApi(rssFeed[Topic.COMPANION], 0)
  return (
    <MainPage3 data={topic} />
  )
}
