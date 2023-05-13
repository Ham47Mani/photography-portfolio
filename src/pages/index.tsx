import { Fragment } from "react"
import Head from "next/head"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Tabs from "@/components/Tabs"
import { Photo } from '../constants/types';
import { GetStaticProps } from "next"
import { getPhotosSearch } from "@/constants/unsplashFile"

// ============= Start Fetching Data =============
type HomeProps = {
  all: Photo[]
  people: Photo[]
  accommodation: Photo[]
  adventure: Photo[]
}

export const getStaticProps :GetStaticProps<HomeProps> = async () => {
  const [all, people, accommodation, adventure] = await Promise.all([
    getPhotosSearch("all"),
    getPhotosSearch("people"),
    getPhotosSearch("accommodation"),
    getPhotosSearch("adventure")
  ]);
  
  return {
    props: {
      all,
      people,
      accommodation,
      adventure,
    },
  }
}
// ============= End Fetching Data =============

const Home = ({all, people, accommodation, adventure}: HomeProps) => {
  return (
    <Fragment>
      {/* ============= Head Page ============= */}
      <Head>
        <title>Photography</title>
        <link rel="shortcut icon" href="/imgs/logoRed.png" type="image/x-icon" />
        <meta name="description" content="Photography Portfolios made by Ham47Mani" />
      </Head>
      {/* ============= Main Page Content ============= */}
      <Header />
      <Tabs  all={all} people={people} accommodation={accommodation} adventure={adventure} />
      <Footer />
    </Fragment>
  )
}

export default Home;