import React, { useState, useEffect } from 'react';
import BannerImage1 from '../../assets/banner1.png'; // Replace with your image URLs
import BannerImage2 from '../../assets/banner2.png';
import BannerImage3 from '../../assets/banner3.png';
import { Carousel } from 'react-responsive-carousel';
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide,Zoom } from "react-awesome-reveal";
const Banner = () => {
  const [currentImage, setCurrentImage] = useState(BannerImage1);
  const slides = [{
    title: "Welcome to Kenny Electronics",
    subtitle: "Home of Electronics",
    text: "Discover the Future of Electronics and Gadgets with Kenny Electronics",
    link: '#about',
    image: BannerImage1,
},
{
  title: "Welcome to Kenny Electronics",
  subtitle: "Home of Electronics",
  text: "Discover the Future of Electronics and Gadgets with Kenny Electronics",
  link: '#about',
  image: BannerImage2,
},
{
  title: "Welcome to Kenny Electronics",
  subtitle: "Home of Electronics",
  text: "Discover the Future of Electronics and Gadgets with Kenny Electronics",
  link: '#about',
  image: BannerImage3,
},];
  // useEffect(() => {
  //   // const slides = [BannerImage1, BannerImage2, BannerImage3];
   
  //   let currentIndex = 0;

  //   const interval = setInterval(() => {
  //     currentIndex = (currentIndex + 1) % images.length;
  //     setCurrentImage(images[currentIndex]);
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
// bg-white bg-opacity-70 backdrop-blur-lg
  return (
    <section
      className={`h-[500px] lg:h-screen lg:w-full w-full overflow-y-hidden`}
      id='home'
    >
       <Carousel axis='vartical' emulateTouch={true} infiniteLoop={true} showArrows={false} showStatus={false} interval={10000} transitionTime={2000} showIndicators={false} showThumbs={false} swipeable autoPlay>
{
    slides.map(({title, subtitle, text, link, image},index) => {
return (
<article className={`h-[400px] w-full lg:h-screen lg:w-full  relative`} key={index}>
<div className="w-full h-full absolute left-0 right-0 bg-[rgba(0,0,0,0.5)] z-5 flex flex-col items-center justify-center ">
  
   <h1 className="text-[1.5rem] md:[2rem] lg:text-[3rem] font-black p-10 border-4 rounded-br-2xl rounded-tl-2xl border-gold-100 text-[white] uppercase text-center">{title}</h1>
    <h2 className="text-[1.2rem] lg:text-[2rem] font-black rounded-tl-2xl text-[white] uppercase">{subtitle}</h2>
    <h4 className="lg:text-[1.2rem] text-[1rem] font-black rounded-tl-2xl text-[white] uppercase mb-7 max-w-[600px] text-center">{text}</h4>


<a href={link} className="inline-flex items-center px-6 py-4  rounded-md font-semibold text-lg text-[white] dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 bg-gold-700 bg-white bg-opacity-70 backdrop-blur-lg ">Learn More</a>

</div>

<img src={image} alt="" className="h-full w-full " />


</article>
)
    })
}
</Carousel>
   
    </section>
  );
};

export default Banner;
