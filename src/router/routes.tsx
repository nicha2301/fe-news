// import DetailNews from "~/pages/DetailNews/DetailNews";
// import IntersectionObserverTest from "~/pages/IntersectionObserverTest/IntersectionObserver";
// import MainPage from "~/pages/MainPage/MainPage";
// import TopicPage from "~/pages/TopicPage/TopicPage";
import Wrong from "~/router/Wrong";
import { paths } from "~/router/paths";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Layout from "~/components/Layout/Layout";
import MainPage from "~/pages/MainPage/MainPage";

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
        path: paths.notFound,
        element: <Wrong />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/404s" />,
  },
]);

export default router;
