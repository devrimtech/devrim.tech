import { Route, Router } from 'preact-router';
import "./app.css";
import Header from './components/header/header';
import Navbar from './components/navbar/Navbar';
import Redirect from './components/Redirect';
import Blog from './pages/blog/blog';
import Penguin from './pages/blog/posts/penguin';
import Contact from './pages/contact/contact';
import Now from './pages/now/now';
export function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/" exact component={Header} />
        <Route exact component={Penguin} path="/penguin" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={Now} path="/now" />
        <Route exact component={Contact} path="/contact" />
        <Redirect to="/public/Kai_McCormick_Resume.pdf" path="/resume" />
      </Router>
    </div>
  );
}
