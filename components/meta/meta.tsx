import Head from "next/head";
import React from "react";

// Props for description, title, and icon
export const Meta = (props: any) => {
  let description: string = "Full-Time University Student, Part-Time Computer Wizard"
  return (
    <Head>
      <meta
        name="description"
        content={
          props.description ||
          description
        }
      />
      <link rel="icon" type="image/png" href="/Kai.png" />
      <meta httpEquiv="X-Clacks-Overhead" content="GNU Terry Pratchett" />
      <title>{props.title || "Kai Devrim"}</title>
      <meta
        name="keywords"
        content="kai, kai devrim, kai mccormick, devrim, devrimkai, devrim kai, kai devrim mccormick, kai the penguin, penguin kai, penguinkai"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Kai Devrim" />
      <meta name="title" content={props.title || "Kai Devrim"} />

      <meta itemProp="name" content="Kai Devrim" />
      <meta
        itemProp="description"
        content={
          props.description ||
          description
        }
      />
      <meta
        itemProp="image"
        content={props.icon || "https://devrim.tech/meta.png"}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://devrim.tech/" />
      <meta property="og:title" content={props.title || "Kai Devrim"} />
      <meta
        property="og:description"
        content={
          props.description ||
          description
        }
      />
      <meta
        property="og:image"
        content={props.icon || "https://devrim.tech/meta.png"}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://devrim.tech/" />
      <meta property="twitter:title" content={props.title || "Kai Devrim"} />
      <meta
        property="twitter:description"
        content={
          props.description ||
          description
        }
      />
      <meta
        name="twitter:image"
        content={props.icon || "https://devrim.tech/meta.png"}
      />
    </Head>
  );
};

export default Meta;
