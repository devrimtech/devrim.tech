import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Webring from "../components/webring/webring";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kai&apos;s Wacky Website</title>
        <meta
          name="description"
          content="Part-Time High School Student, Part-Time Computer Wizard"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-Clacks-Overhead" content="GNU Terry Pratchett" />
        <title>Kai Devrim</title>
        <meta
          name="keywords"
          content="kai, kai devrim, kai mccormick, devrim, devrimkai, devrim kai, kai devrim mccormick, kai the penguin, penguin kai, penguinkai"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Kai Devrim" />
        <meta name="title" content="Kai Devrim" />
        <meta
          name="description"
          content="Part-Time High School Student, Part-Time Computer Wizard"
        />

        <meta itemProp="name" content="Kai Devrim" />
        <meta
          itemProp="description"
          content="Part-Time High School Student, Part-Time Computer Wizard"
        />
        <meta itemProp="image" content="https://devrim.tech/meta.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devrim.tech/" />
        <meta property="og:title" content="Kai Devrim" />
        <meta
          property="og:description"
          content="Part-Time High School Student, Part-Time Computer Wizard"
        />
        <meta property="og:image" content="meta.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devrim.tech/" />
        <meta property="twitter:title" content="Kai Devrim" />
        <meta
          property="twitter:description"
          content="Part-Time High School Student, Part-Time Computer Wizard"
        />
        <meta name="twitter:image" content="https://devrim.tech/meta.png" />
      </Head>

      <main>
        <Navbar />
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
        my dog Mocha,{" "}
        <Link href="https://steamcommunity.com/id/kaidevrim">
          or playing games,
        </Link>{" "}
        <Link href="https://kitsu.io/KaiDevrim">or watching anime,</Link> or
        going to class, <Link href="/">or taking photos</Link>. I also am an
        active member in one of the largest programming communities,{" "}
        <Link href="https://hackclub.com">Hack Club</Link> and even wrote{" "}
        <Link href="https://workshops.hackclub.com/minecraft_modding">
          a workshop
        </Link>
        . Other than that, I love volunteering for various programming
        communities and am currently helping out with{" "}
        <Link href="https://codeday.org/ba">CodeDay Bay Area</Link>. Personally,
        I love to work on my <Link href="https://dash.dvr.im">Homelab</Link> and
        learn new technologies. Currently I am studying for my CompTIA A+
        certification while also making a{" "}
        <Link href="#projects">few programming projects</Link> along the way.
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
      <h1 id="projects">Projects</h1>
      <p>Here are just some of the projects I have worked on.</p>
      <ul className="project-list">
        <li>
          <Link href="https://github.com/devrimtech/devrim.tech">
            This Website!
          </Link>{" "}
          I made it using Next.js and TypeScript! (originally was Preact also){" "}
        </li>
        <li>
          <Link href="https://github.com/KaiDevrim/StarItAll">StarItAll</Link> A
          simple Golang script that will go through every repo in a Github user
          or org and star every single repo.
        </li>
        <li>
          <Link href="https://github.com/KaiDevrim/GameSite">GameSite</Link> A
          simple website to showcase all of my games and my reviews of them.
        </li>
        <li>
          <Link href="https://github.com/KaiDevrim/PigLatinSharp">
            PigLatinSharp
          </Link>{" "}
          and{" "}
          <Link href="https://github.com/KaiDevrim/PigLatinPy">PiglatinPy</Link>{" "}
          are both English to Piglatin generators.
        </li>
        <li>
          <Link href="https://thetahacks2022.vercel.app/">
            ThetaHacks 2022 Website
          </Link>{" "}
          A website made from scratch in just two weeks and where I learned how
          to make a website with React.
        </li>
        <li>
          <Link href="https://kaidevrim.github.io/UPAHackClub.github.io/">
            UPA Hack Club Website
          </Link>{" "}
          A website made for the UPA Hack Club in 2020. I learned how to use
          Tailwind and NPM while making this site.
        </li>
        <li>
          <Link href="https://github.com/ScribeHacks/ScribeHacksBot">
            ScribeHacksBot
          </Link>{" "}
          An advanced discord bot for the ScribeHacks hackathon and easily
          adaptable to{" "}
          <Link href="https://github.com/ThetaHacks/ThetaHacksBot">
            other hackathons
          </Link>
          . I learned how to use TypeScript and hosting.
        </li>
      </ul>

      <Webring />
    </div>
  );
}

export default Home;
