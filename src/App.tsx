import Router from 'preact-router';
import Home from './components/Home';
import NavBar from './components/Navbar/Navbar';
import Blog from './pages/blog/Blog';
import Post from './pages/blog/post';
import Contact from './pages/contact/contact';
import Now from './pages/now/now';
//@ts-ignore
{/* export function App() {
  return (
    <>
      <>
        <Navbar />
        <>
          <Route path="/" component={Home} />
          <Route component={Blog} path="/blog" />
          <Route component={Now} path="/now" />
          <Route component={Contact} path="/contact" />
          <Route component={Post} path="/post/:id/:slug?" />
        </>
      </>
      <Route path="/resume">
        <Redirect to="https://localhost:3000/Kai_McCormick_Resume.pdf" />
      </Route>
    </>
  );
} */}

export function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Home path="/" />
        <Blog path="/blog" />
        <Post path="/post/:id/:slug?" />
        <Now path="/now" />
        <Contact path="/contact" />
      </Router>
    </>
  )
}
