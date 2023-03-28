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
        I am a Seattle University student who loves all things about
        computers. When I am not on my computer (rarely) I am
        <Link href="https://steamcommunity.com/id/kaidevrim"> playing games,
        </Link>
        <Link href="https://kitsu.io/users/devrim"> or watching anime,</Link> or
        going to class, <Link href="/">or taking photos</Link>. I also am an
        active member in one of the largest programming communities,
        <Link href="https://hackclub.com"> Hack Club</Link> and even wrote
        <Link href="https://workshops.hackclub.com/minecraft_modding"> a workshop
        </Link>
        . Other than that, I love volunteering for various programming
        communities and am currently helping out with
        <Link href="https://codeday.org/seattle"> CodeDay Seattle</Link>. Personally,
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
          <Link href="https://codeday.org/">CodeDay</Link> - Volunteer - Jan 2020 to Present
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
          <Link href="https://seattleu.edu">Seattle University</Link> - ?? GPA - 2023 to 2027 <br />
        </li>
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
          </Link> I made it using Next.js and TypeScript! (originally was Preact also) <br />
          <Link href="https://github.com/devrimtech/devrim.tech">
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
          <Link href="https://github.com/kaidevrim/khip-8">
            A Chip-8 Emulator
          </Link> I made it using Kotlin and OPENRNDR. It is a simple Chip-8 emulator that I made for fun.
          <br />
          <Link href="https://github.com/kaidevrim/khip-8">
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
          <Link href="https://github.com/KaiDevrim/StarItAll">StarItAll</Link> A
          simple Golang script that will go through every repo in a Github user
          or org and star every single repo.
          <br />
          <Link href="https://github.com/KaiDevrim/StarItAll">
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
          <Link href="http://staritall.app">StarItAll Web</Link> A website that does the same thing as above but uses oAuth and ASP.Net for a simple and easy to use website. <Link href="https://github.com/KaiDevrim/StarItAllWeb">GitHub</Link>
          <br />
          <Link href="http://staritall.app">
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
          <Link href="https://github.com/KaiDevrim/XKCD.Net">XKCD.Net</Link> a simple C# library that allows you to get information about XKCD comics instead of having to deal with the pesky API. It also comes fully loaded with tests so the project never breaks!
          <br />
          <Link href="https://github.com/KaiDevrim/XKCD.Net">
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
          <Link href="https://thetahacks2022.vercel.app/">
            ThetaHacks 2022 Website
          </Link> A website made from scratch in just two weeks and where I learned how
          to make a website with React. <Link href="https://github.com/KaiDevrim/thetahacks2022">GitHub</Link>
          <br />
          <Link href="https://thetahacks2022.vercel.app/">
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
          <Link href="https://kaidevrim.github.io/UPAHackClub.github.io/">
            UPA Hack Club Website
          </Link> A website made for the UPA Hack Club in 2020. I learned how to use
          Tailwind and NPM while making this site. <Link href="https://github.com/KaiDevrim/UPAHackClub.github.io">GitHub</Link>
          <br />
          <Link href="https://kaidevrim.github.io/UPAHackClub.github.io/">
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
