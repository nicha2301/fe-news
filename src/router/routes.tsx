import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import Layout from '~/components/Layout/Layout'
import Celebrities from '~/pages/Celebrities/Celebrities'
import Companion from '~/pages/Companion/Companion'
import Connection from '~/pages/Connection/Connection'
import Covid19Prevention from '~/pages/Covid19Prevention/Covid19Prevention'
import Creation from '~/pages/Creation/Creation'
import CulturalLife from '~/pages/CulturalLife/CulturalLife'
import Culture from '~/pages/Culture/Culture'
import { DetailNews } from '~/pages/DetailNews/DetailNews'
import Economy from '~/pages/Economy/Economy'
import Education from '~/pages/Education/Education'
import Exchange from '~/pages/Exchange/Exchange'
import ExpertCorner from '~/pages/ExpertCorner/ExpertCorner'
import Faces from '~/pages/Faces/Faces'
import Family from '~/pages/Family/Family'
import FourDirections from '~/pages/FourDirections/FourDirections'
import Health from '~/pages/Health/Health'
import HealthBeauty from '~/pages/HealthBeauty/HealthBeauty'
import Highlights from '~/pages/Highlights/Highlights'
import HotNews from '~/pages/HotNews/HotNews'
import Humanity from '~/pages/Humanity/Humanity'
import Infographic from '~/pages/Infographic/Infographic'
import LaborUnion from '~/pages/LaborUnion/LaborUnion'
import LegalEducation from '~/pages/LegalEducation/LegalEducation'
import LegalSystem from '~/pages/LegalSystem/LegalSystem'
import Local from '~/pages/Local/Local'
import MainPage from '~/pages/MainPage/MainPage'
import Media from '~/pages/Media/Media'
import Methodology from '~/pages/Methodology/Methodology'
import Movement from '~/pages/Movement/Movement'
import NationalDefenseEducation from '~/pages/NationalDefenseEducation/NationalDefenseEducation'
import News from '~/pages/News/News'
import Physical from '~/pages/Physical/Physical'
import Policy from '~/pages/Policy/Policy'
import Politics from '~/pages/Politics/Politics'
import ReadersInvestigation from '~/pages/ReadersInvestigation/ReadersInvestigation'
import School from '~/pages/School/School'
import SchoolSports from '~/pages/SchoolSports/SchoolSports'
import ScienceTechnology from '~/pages/ScienceTechnology/ScienceTechnology'
import { SearchPage } from '~/pages/SearchPage/SearchPage'
import Security from '~/pages/Security/Security'
import Skills from '~/pages/Skills/Skills'
import Society from '~/pages/Society/Society'
import Sports from '~/pages/Sports/Sports'
import StrangeStories from '~/pages/StrangeStories/StrangeStories'
import StudyAbroad from '~/pages/StudyAbroad/StudyAbroad'
import TrainingAdmission from '~/pages/TrainingAdmission/TrainingAdmission'
import UrbanEducation from '~/pages/UrbanEducation/UrbanEducation'
import Video from '~/pages/Video/Video'
import World from '~/pages/World/World'
import WorldIssues from '~/pages/WorldIssues/WorldIssues'
import Wrong from '~/router/Wrong'
import { paths } from '~/router/paths'

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
        path: paths.notFound,
        element: <Wrong />
      },
      {
        path: paths.education,
        element: <Education />
      },
      {
        path: paths.policy,
        element: <Policy />
      },
      {
        path: paths.local,
        element: <Local />
      },
      { path: '/trainingAdmission', element: <TrainingAdmission /> },
      { path: '/fourDirections', element: <FourDirections /> },
      { path: '/movement', element: <Movement /> },
      { path: '/news', element: <News /> },
      { path: '/urbanEducation', element: <UrbanEducation /> },
      { path: '/society', element: <Society /> },
      { path: '/politics', element: <Politics /> },
      { path: '/economy', element: <Economy /> },
      { path: '/legal-education', element: <LegalEducation /> },
      { path: '/security', element: <Security /> },
      { path: '/legal-system', element: <LegalSystem /> },
      { path: '/readers-investigation', element: <ReadersInvestigation /> },
      { path: '/connection', element: <Connection /> },
      { path: '/labor-union', element: <LaborUnion /> },
      { path: '/companion', element: <Companion /> },
      { path: '/science-technology', element: <ScienceTechnology /> },
      { path: '/exchange', element: <Exchange /> },
      { path: '/methodology', element: <Methodology /> },
      { path: '/expert-corner', element: <ExpertCorner /> },
      { path: '/school', element: <School /> },
      { path: '/skills', element: <Skills /> },
      { path: '/study-abroad', element: <StudyAbroad /> },
      { path: '/faces', element: <Faces /> },
      { path: '/physical', element: <Physical /> },
      { path: '/humanity', element: <Humanity /> },
      { path: '/world', element: <World /> },
      { path: '/national-defense-education', element: <NationalDefenseEducation /> },
      { path: '/world-issues', element: <WorldIssues /> },
      { path: '/strange-stories', element: <StrangeStories /> },
      { path: '/health', element: <Health /> },
      { path: '/health-beauty', element: <HealthBeauty /> },
      { path: '/family', element: <Family /> },
      { path: '/covid19-prevention', element: <Covid19Prevention /> },
      { path: '/media', element: <Media /> },
      { path: '/infographic', element: <Infographic /> },
      { path: '/video', element: <Video /> },
      { path: '/hot-news', element: <HotNews /> },
      { path: '/highlights', element: <Highlights /> },
      { path: '/culture', element: <Culture /> },
      { path: '/creation', element: <Creation /> },
      { path: '/cultural-life', element: <CulturalLife /> },
      { path: '/celebrities', element: <Celebrities /> },
      { path: '/sports', element: <Sports /> },
      { path: '/school-sports', element: <SchoolSports /> }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404s' />
  }
])

export default router
