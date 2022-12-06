import type { NextPage } from "next";
import Meta from "../components/meta/meta";
import Link from "next/link";
const Uses: NextPage = () => {
  return (
    <>
      <Meta
        title="/uses"
        description="The technology and equipment I use on a daily basis"
      />
      <main>
        <UsesPage />
      </main>
    </>
  );
};

function UsesPage() {
  return (
    <div className="content pages">
      <h1> Uses </h1>
      <p> The technology and equipment I use on a daily basis </p>
      <ul className="uses-list">
        <h3> My Main Desk </h3>
        <li> M1 MacBook Air 16GB 512GB SSD </li>
        <li> 500GB SSD for Backups</li>
        <li> 256GB Steam Deck with 2 microSD cards, 1TB each</li>
        <li> Elgato HD60S+ for Console Switching </li>
        <li> MX Master 2S Wireless Mouse </li>
        <li> Keychron K8 Wireless Keyboard with White LED </li>
        <li> 34 inch, 1440p, 75hz, Asus Monitor </li>
        <li>Modded 1st gen. PlayStation 4 with a 1TB HDD for extra games</li>
        <li>
          Modded 1st gen. Nintendo Switch️ with two 128GB microSD and a 256GB
          microSD
        </li>
        <li> Nintendo Switch Pro Controller (Xenoblade Edition) </li>
        <h3> Things Around my Room </h3>
        <li> iPad Pro 1st gen. with 1st gen. Apple Pencil </li>
        <li> FitBit Versa 2 </li>
        <li> Google Home Mini </li>
        <h3> Software </h3>
        <li> Microsoft Edge Beta (Main Browser) </li>
        <li> Microsoft Edge (School Browser) </li>
        <li> Nova (Text Editor/IDE)n</li>
        <li>Tower (Git Client)</li>
        <li>Postbox (Mail Client)</li>
        <li>Plex iPad Version (Catalyst)</li>
        <li> Kopia (Backup Software) </li>
        <li> Shottr (Screenshot Tool) </li>
        <li> BitWarden (Password Manager) </li>
      </ul>
      <p> Last updated 2022-03-11 </p>
      <p>
        Credits to
        <Link href="https://github.com/wesbos/awesome-uses/"> Wes Bos </Link>
      </p>
    </div>
  );
}

export default Uses;
