import { Topic } from "~/services/const/enum";
import { RSSApi } from "~/utils/rssUtilsl";
import { rssFeed } from "~/services/const/map";
import MainPage3 from "../MainPage/components/MainPage3";

export default function Covid19Prevention() {
    const topic = RSSApi(rssFeed[Topic.COVID_19_PREVENTION], 0)
  return (
    <MainPage3 data={topic} />
  )
}
