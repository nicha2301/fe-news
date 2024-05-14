// import DetailNews from "~/pages/DetailNews/DetailNews";
// import IntersectionObserverTest from "~/pages/IntersectionObserverTest/IntersectionObserver";
// import MainPage from "~/pages/MainPage/MainPage";
// import TopicPage from "~/pages/TopicPage/TopicPage";
import Wrong from "~/router/Wrong";
import { paths } from "~/router/paths";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Layout from "~/components/Layout/Layout";
import MainPage from "~/pages/MainPage/MainPage";

const router = createBrowserRouter([
  {
    errorElement: (
      <Layout>
        <Wrong />
      </Layout>
    ),
    children: [
      {
        path: "",
        element: (
          <Layout>
            <Outlet />
          </Layout>
        ),
        children: [
          {
            path: paths.home,
            element: <MainPage />,
          }
        ],
      },
    ],
  },
]);

export default router;
