import React from "react";
import Head from "next/head";
import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Product Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ minHeight: "100vh", background: "black", padding: "20px" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
