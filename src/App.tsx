//@ts-ignore
import { Redirect, Route } from "wouter-preact";
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';
import Now from './pages/now/now';
export function App() {
  return (
    <>
      <>
        <Navbar />
        <>
          <Route path="/" component={Home} />
          <Route component={Blog} path="/blog" />
          <Route component={Now} path="/now" />
          <Route component={Contact} path="/contact" />
        </>
      </>
      <Route path="/resume">
        <Redirect to="https://localhost:3000/Kai_McCormick_Resume.pdf" />
      </Route>
    </>
  );
}
