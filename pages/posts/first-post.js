import Image from 'next/image';
import Head from 'next/head';

import Script from 'next/script';

import Layout from '../../components/layout';

export default function FirstPost() {

const MyImage = () => (
    <Image
          src="/images/profile.jpg" // Route of the image file
          height={500} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Marcus Rodrigues"
    />
 );

return (
    <>
        <Layout>
            <Head>
                <title>MPXDS - First Post</title>
                <script src="https://connect.facebook.net/en_US/sdk.js" />
            </Head>

            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />


            <h1>MPXDS - First Post</h1>
            <MyImage />

        </Layout>
    </>
  );
}