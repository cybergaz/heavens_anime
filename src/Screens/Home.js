import React from 'react';
import Banner from '../components/Banner';
import Panime from '../components/Panime';
import Rrelease from '../components/Rrelease';
import Topmovies from '../components/Topmovies';
import Topshows from '../components/Topshows';
import Layout from '../Layout/Layout';
import Footer from '../Layout/Footer/Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// Handles logo click
//  const handleLogoClick = () => {
//   navigate("/home");
//   //  Smooth scroll to top of page
//   window.scrollTo({ top: 0, behavior: "smooth" });
//   dispatch(setSearchQuery(""));
// };



function Home(prop) {

  const joker = (value) => {
    console.log(value);
    prop.pass(value);
  }
  return (
    <>
      <Layout >

        <div id="home" className=' container top-0 left-0 right-0 min-h-screen px-2 mb-6 mt-10' >
          <Banner />
          <Panime />
          <Rrelease />
          <Topmovies ghost={joker} />
          <Topshows />

        </div>


      </Layout>
      <Footer />
    </>
  )
}

export default Home


{/* <a
          href="https://www.instagram.com/cyber_gaz/"
          target="_blank"
          rel="noreferrer"
        >
          hello {HiArrowNarrowDown}
        </a> */}
