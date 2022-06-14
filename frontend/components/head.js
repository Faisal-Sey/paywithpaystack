/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'

function HeadSection() {
  return ( 
    <Head>
      <meta charset="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <title>Payment Platform</title>
      <script src="https://js.paystack.co/v1/inline.js"></script> 
    </Head>
  );
}

export default HeadSection;