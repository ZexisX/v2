// pages/_app.tsx
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

interface MyAppProps {
  Component: React.ComponentType;
  pageProps: Record<string, any>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Head>
        {/* Add your head elements here */}
        <title>Your Page Title</title>
        {/* Add any other meta tags, links, etc. */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
