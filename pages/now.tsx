import type { NextPage } from "next";
import Link from "next/link";
import Meta from "../components/meta/meta";
const Now: NextPage = () => {
  return (
    <>
      <Meta title="/now" description="Here is what I am up to nowadays" />
      <main>
        <NowPage />
      </main>
    </>
  );
};

function NowPage() {
  return (
    <div className="content pages">
      <h1> Now </h1>
      <h3> Here is what I am up to nowadays </h3>
      <ul className="now-list">
        <h3> Continuing my education at Bellevue College: </h3>
        <li> I am currently at my favorite place, Seattle Washington! </li>
        <h3> Learning about Computers: </h3>
        <li> Programming various projects. <Link href="https://github.com/KaiDevrim/"> What I am working on currently </Link></li>
        <li> Constantly going to Raves and Concerts. </li>
        <li> Just hanging out with friends whenever I can. </li>
        <li> Reading books. </li>
        <li> Participating in local events. </li>
        <h3> Entertaining Myself: </h3>
        <li> Watching a lot on my Plex Server. </li>
        <li>
          Playing lots of video games on my Steam Deck.
        </li>
        <li> Having fun with my dog, Mocha. </li>
      </ul>
      <p> Last updated 2025-06-12 </p>
      <p>
        Credits to <Link href="https://nownownow.com"> Derek Sivers </Link>
      </p>
    </div>
  );
}

export default Now;
