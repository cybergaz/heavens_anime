import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimeApi } from "../backend/Animeapi.ts";
import {useState , useEffect} from 'react';

function Banner() {

  // const getTrending = async () => {
  //   try {
  //     const data = await AnimeApi.getTrending();
  //     console.log((data.results)[0].image);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // getTrending();
  
  const [trending, setTrending] = useState([]);
  
  const getTrending = async () => {
    try {
      const data = await AnimeApi.getTrending();
      setTrending(data.results);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (trending.length === 0) {
      getTrending();
    }
  }, []);


  console.log(trending);
           

  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full xl:h-96 bg-main lg:h-64 h-48"
      >
        {trending.map((movie) => (
          <SwiperSlide className="relative rounded overflow-hidden">
            {console.log(movie)}
            <img
              src={movie.cover}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
