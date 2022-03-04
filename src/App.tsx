import Router from 'preact-router';
import Home from './components/Home';
import NavBar from './components/Navbar/Navbar';
import Redirect from "./components/scripts/Redirect";
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';
import Now from './pages/now/now';
import ResumePDF from "/Kai_McCormick_Resume.pdf";
export function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Home path="/" />
        <Blog path="/blog" />
        <Now path="/now" />
        <Contact path="/contact" />
        <Redirect path="/resume" to={ResumePDF} />
      </Router>
    </>
  )
}
