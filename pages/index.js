import Head from 'next/head'
import Image from 'next/image'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Heros from '../components/Heros'
import NavBar from '../components/NavBar'
import PopularClass from '../components/PopularClass'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'



export default function Home() {
  return (
    <div >
      <Head>
        <title>PutAtToe</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Hero/>
      <Services/>
      <PopularClass/>
      {/* <Heros/> */}
      {/* <Testimonials/> */}
      {/* <Blogs/> */}
      <Footer/>

    </div>
  )
}
