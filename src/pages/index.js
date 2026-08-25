
import Page404 from "./404";
import About02 from "./About02";
import Blog from "./Blog";

import BlogDetails from "./BlogDetails";

import Collection from "./Collection";
import CommingSoon from "./CommingSoon";

import Contact from "./Contact";

import Faq01 from "./Faq01";
import Home01 from "./Home01";
import ItemDetails from "./ItemDetails";

import Login from "./Login";
import OurTeam from "./OurTeam";

import RoadMap02 from "./RoadMap02";
import SignUp from "./SignUp";




const routes = [
  { path: '/', component: <Home01 />},

  { path: '/about-v2', component: <About02 />},

  { path: '/roadmap-v2', component: <RoadMap02 />},

  { path: '/signin', component: <Login />},
  { path: '/signup', component: <SignUp />},
  { path: '/faq-v1', component: <Faq01 />},
  { path: '/our-team', component: <OurTeam />},
  { path: '/collection', component: <Collection />},
  { path: '/item-details', component: <ItemDetails />},
  { path: '/comming-soon', component: <CommingSoon />},
  { path: '/page-404', component: <Page404 />},


  { path: '/blog', component: <Blog />},

  { path: '/blog-details', component: <BlogDetails />},

  { path: '/contact', component: <Contact />},



]

export default routes;