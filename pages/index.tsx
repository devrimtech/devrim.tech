import type { NextPage } from "next";
import Meta from "../components/meta/meta";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header/header";
import Webring from "../components/webring/webring";

const Home: NextPage = () => {
  return (
    <div>
      <Meta />
      <main>
        <About />
      </main>
    </div>
  );
};

function About({ source }: any) {
  return (
    <div className="content pages">
      <Header />
      <h1 id="who">Who</h1>
      <p>
        I am a high school student in the Bay Area who loves all things about
        computers. When I am not on my computer (rarely) I am hanging out with
        my dog Mocha,
        <Link href="https://steamcommunity.com/id/kaidevrim"> or playing games,
        </Link>
        <Link href="https://kitsu.io/KaiDevrim"> or watching anime,</Link> or
        going to class, <Link href="/">or taking photos</Link>. I also am an
        active member in one of the largest programming communities,
        <Link href="https://hackclub.com"> Hack Club</Link> and even wrote
        <Link href="https://workshops.hackclub.com/minecraft_modding"> a workshop
        </Link>
        . Other than that, I love volunteering for various programming
        communities and am currently helping out with
        <Link href="https://codeday.org/ba"> CodeDay Bay Area</Link>. Personally,
        I love to work on my <Link href="https://dash.dvr.im">Homelab</Link> and
        learn new technologies. Currently I am programming whatever piques my interest
        while also making a
        <Link href="#projects"> few other programming projects</Link> along the way.
        Overall, I just love making the world a better place and having fun
        while doing so.
      </p>
      <Image
        src="/rpi.jpeg"
        alt="My Raspberry Pi Emulation Project"
        width="400"
        height="300"
      />
      <p>A Raspberry Pi Emulator Wristwatch I made when I was 13.</p>
      <h1 id="experience"> Experience </h1>
      <p>Here are some places I have worked or volunteered at.</p>
      <ul className="experience-list">
        <li>
          <Link href="https://mcdonalds.com">McDonalds</Link> - Part-Time Employee - October 2022 to Present
        </li>
        <li>
          <Link href="https://codeday.org/ba">CodeDay</Link> - Volunteer - Jan 2020 to Present
        </li>
        <li>
          <Link href="https://thetahacks.tech">ThetaHacks</Link> - Technical Team Member - Dec 2020 to Feb 2022
        </li>
        <li>
          <Link href="https://kaidevrim.github.io/UPAHackClub.github.io/">
            UPA Hack Club
          </Link>
          - Assistant Club Manager - Aug 2020 to Aug 2021
        </li>
        <li>
          <Link href="https://vmware.com">VMWare</Link> - Student Intern - Jul 2019
        </li>
        <li>
          <Link href="https://ebay.com">eBay</Link> - Volunteer - Jul 2019
        </li>
      </ul>
      <h1 id="education"> Education </h1>
      <p>The schools and classes I have taken</p>
      <ul className="education-list">
        <li>
          <Link href="https://upasv.org">University Preparatory Academy</Link> - 3.7 GPA - 2017 to 2023
        </li>
        <li>
          <Link href="https://www.gavilan.edu/">Gavilan College</Link> - 4.0 GPA - Aug 2020 to Dec 2022 <br />
          - Intro to C# & .Net <br />
          - World History
        </li>
        <li>
          <Link href="https://foothill.edu">Foothill College</Link> - 4.0 GPA - Aug 2022 to Dec 2022 <br />
          - CyberSecurity <br />
          - Linux Security Administration
        </li>
      </ul>
      <h1 id="projects">Projects</h1>
      <p>Here are just some of the projects I have worked on.</p>
      <ul className="project-list">
        <li>
          <Link href="https://github.com/devrimtech/devrim.tech">
            This Website!
          </Link> I made it using Next.js and TypeScript! (originally was Preact also)
        </li>
        <li>
          <Link href="https://github.com/KaiDevrim/StarItAll">StarItAll</Link> A
          simple Golang script that will go through every repo in a Github user
          or org and star every single repo.
        </li>
        <li>
          <Link href="http://star.dvr.im">StarItAll Web</Link> A website that does the same thing as above but uses oAuth and ASP.Net for a simple and easy to use website.
        </li>
        <li>
          <Link href="https://github.com/KaiDevrim/XKCD.Net">XKCD.Net</Link> a simple C# library that allows you to get information about XKCD comics instead of having to deal with the pesky API. It also comes fully loaded with tests so the project never breaks!
        </li>
        <li>
          <Link href="https://github.com/KaiDevrim/GameSite">GameSite</Link> A
          simple website to showcase all of my games and my reviews of them.
        </li>
        <li>
          <Link href="https://github.com/KaiDevrim/PigLatinSharp">
            PigLatinSharp
          </Link> and
          <Link href="https://github.com/KaiDevrim/PigLatinPy"> PiglatinPy </Link> are both English to Piglatin generators.
        </li>
        <li>
          <Link href="https://thetahacks2022.vercel.app/">
            ThetaHacks 2022 Website
          </Link> A website made from scratch in just two weeks and where I learned how
          to make a website with React.
        </li>
        <li>
          <Link href="https://kaidevrim.github.io/UPAHackClub.github.io/">
            UPA Hack Club Website
          </Link> A website made for the UPA Hack Club in 2020. I learned how to use
          Tailwind and NPM while making this site.
        </li>
        <li>
          <Link href="https://github.com/ScribeHacks/ScribeHacksBot">
            ScribeHacksBot
          </Link> An advanced discord bot for the ScribeHacks hackathon and easily
          adaptable to
          <Link href="https://github.com/ThetaHacks/ThetaHacksBot"> other hackathons
          </Link>
          . I learned how to use TypeScript and hosting.
        </li>
      </ul>

      <Webring />
    </div>
  );
}

export default Home;
