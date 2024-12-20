import React from "react";
import Head from "next/head";

export const Meta = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1 viewport-fit=cover"
      />
      <meta
        name="description"
        content="Discover my paintings, drawings, and photographs. Explore a gallery of unique art and stunning photography."
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      <link rel="shortcut icon" href="../../../../public/favicon.ico" />
      <title>Maciej Spałek</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Head>
  );
};
