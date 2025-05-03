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
      <title>Maciej Spałek</title>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Head>
  );
};
