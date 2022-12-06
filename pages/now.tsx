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
        <h3> Finishing Senior Year of High School: </h3>
        <li> I am currently at home in sweet old San Jose. </li>
        <li>
          Currently taking PreCalculus, AP Language, Marine Biology, and Economics/AP Government.
        </li>
        <li>
          Dreaming about heading up North to University of Washington,
          Simon Fraser University, or University of British Columbia for college.
        </li>
        <h3> Learning about Computers: </h3>
        <li> Programming various projects. <Link href="https://github.com/KaiDevrim/"> What I am working on currently </Link></li>
        <li> Volunteering for Coding Organizations like CodeDay Bay Area. </li>
        <li> Reading books on various programming topics, like Data Structures and Algorithms or on C#</li>
        <li> Participating in Hack Club. </li>
        <h3> Entertaining Myself: </h3>
        <li> Watching a lot on my Plex Server. </li>
        <li>
          Playing lots of video games on my Steam Deck.
        </li>
        <li> Having fun with my dog, Mocha. </li>
      </ul>
      <p> Last updated 2022-12-05 </p>
      <p>
        Credits to <Link href="https://nownownow.com"> Derek Sivers </Link>
      </p>
    </div>
  );
}

export default Now;
