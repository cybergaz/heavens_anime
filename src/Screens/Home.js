import React from 'react';
import Banner from '../components/Banner';
import Panime from '../components/Panime';
import Rrelease from '../components/Rrelease';
import Topmovies from '../components/Topmovies';
import Topshows from '../components/Topshows';
import Layout from '../Layout/Layout';

function Home() {
  return (
    <Layout>
      
      <div className=' container mx-auto min-h-screen px-2 mb-6' >
        <Banner />
        <Panime />
        <Rrelease />
        <Topmovies />
        <Topshows />
      </div>
    
    </Layout>

)
}

export default Home