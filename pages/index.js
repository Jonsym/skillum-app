import Container from "../components/Container"
import Icons from "../components/Icons"
import Aliados from "../components/Aliados"
import Hero from "../components/Hero"
import Cursos from "../components/Cursos"

import Head from 'next/head'

export default function Home() {
  return (
      <>
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
                    rel="stylesheet"/>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"/>
          </Head>
          <Hero/>
          {/*<Container />*/}
          <Icons />
          <Aliados />
          <Cursos />
      </>
  )

}
