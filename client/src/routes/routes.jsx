import Home from '../pages/Home'
import Services from '../pages/Services'
import Testimonials from '../pages/Testimonials'
import Team from '../pages/Team'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsAndConditions from '../pages/TermsAndConditions'
import Blog from '../pages/Blog'
import Portfolio from '../pages/Portfolio'
import Pricing from '../pages/Pricing'
import BlogDetails from "../pages/BlogDetails"

const routes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/testimonials', element: <Testimonials /> },
  { path: '/team', element: <Team /> },
  { path: '/about', element: <AboutUs /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/terms-and-conditions', element: <TermsAndConditions /> },
  { path: '/blog', element: <Blog /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/Pricing', element: <Pricing /> },
  { path: '/blog/:slug', element: <BlogDetails /> },
]

export default routes
