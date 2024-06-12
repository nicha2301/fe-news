import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Layout from "~/components/Layout/Layout";
import { DetailNews } from "~/pages/DetailNews/DetailNews";
import MainPage from "~/pages/MainPage/MainPage";
import { SearchPage } from "~/pages/SearchPage/SearchPage";
import Wrong from "~/router/Wrong";
import { paths } from "~/router/paths";
import { TopicPage } from '../pages/TopicPage/TopicPage';
import { HashtagPage} from "~/pages/HashtagPage/HashtagPage";


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
        element: <MainPage />,
      },
      {
        path: paths.detail,
        element: <DetailNews />,
      },
      {
        path: paths.search,
        element: <SearchPage />,
      },
      {
        path: paths.chuDe,
        element: <HashtagPage/>,
      },
      {
        path: paths.topic,
        element: <TopicPage />,
      },
      {
        path: paths.notFound,
        element: <Wrong />,
      }
    ],
  },
  // {
  //   path: '*',
  //   element: <Navigate to="/404s" />,
  // },
]);

export default router;
