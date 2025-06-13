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
        I am a Computer Science student at Bellevue College who loves all things about
        computers. When I am not on studying (rarely) I am
        <Link href="https://steamcommunity.com/id/kaidevrim" passHref> playing games,
        </Link>
        <Link href="https://docs.google.com/document/d/1X4e-iTCzQk_DK5lG5VTcTznnSSbMrqPWDtEaIMu1iSI/edit?usp=sharing" passHref> or watching anime,</Link> or
        going to class. I used to be an
        active member in one of the largest programming communities,
        <Link href="https://hackclub.com" passHref> Hack Club</Link> and even wrote
        <Link href="https://workshops.hackclub.com/minecraft_modding" passHref> a workshop
        </Link>
        . Other than that, I love volunteering for various programming
        communities and am currently helping out with my local technology scene. Personally,
        I love to work on my <Link href="https://dash.dvr.im" passHref>Homelab</Link> and
        learn new technologies. Currently I am programming whatever piques my interest
        while also making a
        <Link href="#projects" passHref> few other programming projects</Link> along the way.
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
          <Link href="https://codeday.org/" passHref>CodeDay</Link> - Event Organizer - January 2020 to Present
        </li>
        <li>
          <Link href="https://nwidolfest.com//" passHref>Northwest Idolfest</Link> - Programmer - June 2023 to November 2023
        </li>
        <li>
          <Link href="https://mcdonalds.com" passHref>McDonalds</Link> - Food Service Worker - October 2022 to March 2023
        </li>
        <li>
          <Link href="https://thetahacks.tech" passHref>ThetaHacks</Link> - Lead Tech - December 2020 to February 2022
        </li>
        <li>
          <Link href="https://kaidevrim.github.io/UPAHackClub.github.io/" passHref>
            UPA Hack Club
          </Link>
          - Club Manager - August 2020 to August 2021
        </li>
        <li>
          <Link href="https://vmware.com" passHref>VMWare</Link> - Intern - July 2019
        </li>
        <li>
          <Link href="https://ebay.com" passHref>eBay</Link> - Teacher - July 2019
        </li>
      </ul>
      <h1 id="education"> Education </h1>
      <p>The schools and classes I have taken</p>
      <ul className="education-list">
        <li>
          <Link href="https://www.bellevuecollege.edu/" passHref>Bellevue College</Link> - Computer Science - 2025 to 2027 <br />
        </li>
        <li>
          <Link href="https://seattleu.edu" passHref>Seattle University</Link> - Computer Engineering - 2023 to 2025 <br />
        </li>
        <li>
          <Link href="https://upasv.org" passHref>University Preparatory Academy</Link> - 3.7 GPA - 2017 to 2023
        </li>
        <li>
          <Link href="https://www.gavilan.edu/" passHref>Gavilan College</Link> - 4.0 GPA - Aug 2020 to Dec 2022 <br />
          - Intro to C# & .Net <br />
          - World History
        </li>
        <li>
          <Link href="https://foothill.edu" passHref>Foothill College</Link> - 4.0 GPA - Aug 2022 to Dec 2022 <br />
          - CyberSecurity <br />
          - Linux Security Administration
        </li>
      </ul>
      <h1 id="projects">Projects</h1>
      <p>Here are just some of the projects I have worked on.</p>
      <ul className="project-list">
        <li>
          <Link href="https://github.com/devrimtech/devrim.tech" passHref>
            This Website!
          </Link> I made it using Next.js and TypeScript! (originally was Preact also) <br />
          <Link href="https://github.com/devrimtech/devrim.tech" passHref>
            <Image
              src="https://camo.githubusercontent.com/67f9dc0190012065952c3836e207373e06678e7827a3bb06fa4b43258b3f3390/68747470733a2f2f64657672696d2e746563682f6d6574612e706e67"
              unoptimized={true}
              alt="Website banner"
              width="300"
              height="150"
              className="project-image"
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/kaidevrim/khip-8" passHref>
            A Chip-8 Emulator
          </Link> I made it using Kotlin and OPENRNDR. It is a simple Chip-8 emulator that I made for fun.
          <br />
          <Link href="https://github.com/kaidevrim/khip-8" passHref>
            <Image
              src="https://raw.githubusercontent.com/KaiDevrim/Khip-8/main/images/img2.jpeg"
              unoptimized={true}
              alt="Chip-8 Test ROM"
              width="400"
              height="300"
              className="project-image"
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/KaiDevrim/StarItAll" passHref>StarItAll</Link> A
          simple Golang script that will go through every repo in a Github user
          or org and star every single repo.
          <br />
          <Link href="https://github.com/KaiDevrim/StarItAll" passHref>
            <Image
              src="https://github.com/KaiDevrim/StarItAll/raw/main/images/banner.png"
              unoptimized={true}
              alt="Star It All banner"
              width="325"
              height="150"
              className="project-image"
            />
          </Link>
        </li>
        <li>
          <Link href="http://staritall.app" passHref>StarItAll Web</Link> A website that does the same thing as above but uses oAuth and ASP.Net for a simple and easy to use website. <br /> <Link href="https://github.com/KaiDevrim/StarItAllWeb" passHref>GitHub</Link>
          <br />
          <Link href="http://staritall.app" passHref>
            <Image
              src="/sia.png"
              alt="Star It All banner"
              width="525"
              height="225"
              className="project-image"
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/KaiDevrim/XKCD.Net" passHref>XKCD.Net</Link> a simple C# library that allows you to get information about XKCD comics instead of having to deal with the pesky API. It also comes fully loaded with tests so the project never breaks!
          <br />
          <Link href="https://github.com/KaiDevrim/XKCD.Net" passHref>
            <Image
              src="https://github.com/KaiDevrim/XKCD.Net/raw/main/banner.png"
              unoptimized={true}
              alt="XKCD.Net Logo"
              width="300"
              height="100"
              className="project-image"
            />
          </Link>
        </li>
        <li>
          <Link href="https://thetahacks2022.vercel.app/" passHref>
            ThetaHacks 2022 Website
          </Link> A website made from scratch in just two weeks and where I learned how
          to make a website with React. <br /> <Link href="https://github.com/KaiDevrim/thetahacks2022" passHref>GitHub</Link>
          <br />
          <Link href="https://thetahacks2022.vercel.app/" passHref>
            <Image
              src="/theta.png"
              alt="ThetaHacks banner"
              width="525"
              height="225"
              className="project-image"
            />
          </Link>
        </li>
        <li>
          <Link href="https://kaidevrim.github.io/UPAHackClub.github.io/" passHref>
            UPA Hack Club Website
          </Link> A website made for the UPA Hack Club in 2020. I learned how to use
          Tailwind and NPM while making this site. <br /> <Link href="https://github.com/KaiDevrim/UPAHackClub.github.io" passHref>GitHub</Link>
          <br />
          <Link href="https://kaidevrim.github.io/UPAHackClub.github.io/" passHref>
            <Image
              src="/hackclubsite.png"
              alt="Hack Club Site"
              width="805"
              height="201"
              className="project-image"
            />
          </Link>
        </li>
      </ul>

      <Webring />
    </div >
  );
}

export default Home;
