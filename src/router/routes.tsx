import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Layout from "~/components/Layout/Layout";
import { DetailNews } from "~/pages/DetailNews/DetailNews";
import { FavoritePage } from "~/pages/FavoritePage/FavoritePage";
import { HashtagPage } from "~/pages/HashtagPage/HashtagPage";
import MainPage from "~/pages/MainPage/MainPage";
import { ReadingHistoryPage } from "~/pages/ReadingHistoryPage/ReadingHistoryPage";
import { SearchPage } from "~/pages/SearchPage/SearchPage";
import TienIch from "~/pages/TienIch/TienIch";
import Wrong from "~/router/Wrong";
import { paths } from "~/router/paths";
import { TopicPage } from '../pages/TopicPage/TopicPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: paths.home,
        element: <MainPage />
      },
      {
        path: paths.detail,
        element: <DetailNews />
      },
      {
        path: paths.search,
        element: <SearchPage />
      },
      {
        path: paths.chuDe,
        element: <HashtagPage />,
      },
      {
        path: paths.topic,
        element: <TopicPage />,
      },
      {
        path: paths.readingHistory,
        element: <ReadingHistoryPage />
      },

      {
        path: paths.notFound,
        element: <Wrong />
      },
      {
        path: paths.tienIch,
        element: <TienIch />
      },
      {
        path: paths.favorite,
        element: <FavoritePage />
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to="/404s" />,
  },
]);

export default router
