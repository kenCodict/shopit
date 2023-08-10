import React from 'react';
import BannerImage1 from '../../assets/banner1.png'; // Replace with your image URLs
import BannerImage2 from '../../assets/banner2.png';
import BannerImage3 from '../../assets/banner3.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Tech Solutions Inc.',
      image: BannerImage1 , // Replace with your image URL
      content:
        'Kenny Electronics never fails to amaze me with their innovative products. Their commitment to quality and customer satisfaction is truly exceptional.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Digital Marketer',
      image: BannerImage2, // Replace with your image URL
      content:
        'I recently purchased a camera from Kenny Electronics, and I am blown away by the picture quality and features. They have exceeded my expectations.',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      role: 'Gadget Enthusiast',
      image: BannerImage3, // Replace with your image URL
      content:
        'As someone who loves the latest gadgets, Kenny Electronics is my go-to place. Their range of products and top-notch customer service keep me coming back.',
    },
  ];
const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What Our Customers Say</h2>
          <div className="w-[90%] max-w-[400px] lg:max-w-[600px] relative mx-auto flex items-center justify-center overflow-hidden ">
          <Carousel infiniteLoop={true} autoPlay={true} interval={3000} showStatus={true} showIndicators={true} showThumbs={false} stopOnHover={true} swipeable={true} showArrows={false} axis="horizontal" >
          {testimonialsData.map((testimonial) => 
            {
                return (
                    <div
              key={testimonial.id}
              className="bg-white p-6  rounded-lg shadow-xl hover:shadow-lg transition duration-300 h-[400px] max-w-[400px] mx-auto flex flex-col justify-center items-center lg:max-w-[600px] px-10 bg-opacity-70 backdrop-blur-lg  drop-shadow-lg"
            >
              <div className="mb-4 w-16 h-16 max-w-16 max-h-16">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 max-w-16 max-h-16 mx-auto rounded-full"
                />
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="text-blue-500">{testimonial.name}</div>
              <div className="text-gray-500">{testimonial.role}</div>
            </div>
                )
            }
          )}
          </Carousel>
          </div>
        </div>
    </section>
  );
};

export default Testimonials;
