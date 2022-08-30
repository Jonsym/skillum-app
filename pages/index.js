import {Icons, Hero, Aliados, Header, Experts, FeaturedCourse, CTA, Footer} from "../components"

import Head from 'next/head'

export default function Home() {
  return (
      <>
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
              <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
                    rel="stylesheet"/>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"/>
          </Head>
          <Header/>
          <Hero/>
          <Icons />
          <Aliados />
          <Experts />
          <FeaturedCourse />
          <CTA />
          <Footer />
      </>
  )
}
