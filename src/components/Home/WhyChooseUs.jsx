import React from 'react';
// import reasonsData from '../whyChooseUsData';
const reasonsData = [
    {
      id: 1,
      title: 'Unmatched Quality',
      description:
        'Our commitment to excellence ensures that every product we offer is of the highest quality, meticulously selected to deliver exceptional performance and durability.',
      icon: 'fas fa-shield-alt',
    },
    {
      id: 2,
      title: 'Innovative Technology',
      description:
        'Stay at the forefront of technology with our cutting-edge gadgets and devices. We constantly strive to introduce the latest innovations to enhance your tech experience.',
      icon: 'fas fa-microchip',
    },
    {
      id: 3,
      title: 'Expert Curation',
      description:
        'With over 7 years in the industry, our team of experts curates a diverse range of products, ensuring that only the finest and most reliable options make it to your hands.',
      icon: 'fas fa-user-tie',
    },
    {
      id: 4,
      title: 'Customer-Centric Approach',
      description:
        'Your satisfaction is our top priority. We go the extra mile to provide personalized support, responsive communication, and hassle-free shopping experience.',
      icon: 'fas fa-hands-helping',
    },
    {
      id: 5,
      title: 'Wide Selection',
      description:
        'Discover a vast selection of products, from essentials to exclusive items. We have everything you need to meet your tech cravings and explore new horizons.',
      icon: 'fas fa-shopping-basket',
    },
    {
      id: 6,
      title: 'Fast and Secure Shipping',
      description:
        'Experience peace of mind with our reliable and swift shipping services. Your order is handled with care and delivered safely to your doorstep.',
      icon: 'fas fa-truck',
    },
    {
      id: 7,
      title: 'Eco-Friendly Initiatives',
      description:
        'We are dedicated to minimizing our environmental impact. Our eco-friendly initiatives reflect our commitment to a sustainable and greener future.',
      icon: 'fas fa-leaf',
    },
    {
      id: 8,
      title: 'Community Engagement',
      description:
        'Join our thriving community of tech enthusiasts. Engage in discussions, share insights, and stay updated on the latest trends in the world of electronics.',
      icon: 'fas fa-users',
    },
    {
      id: 9,
      title: 'Transparent Pricing',
      description:
        'No hidden fees or surprises. Our pricing is straightforward, providing you with transparent and competitive rates for top-notch products.',
      icon: 'fas fa-dollar-sign',
    },
    {
      id: 10,
      title: 'Lifetime Support',
      description:
        'Our commitment doesn’t end after your purchase. Enjoy lifetime support for your products, ensuring that you get the most out of your tech investment.',
      icon: 'fas fa-heart',
    },
  ];
  

  

  
const WhyChooseUs = () => {
  return (
    <section className="py-12 w-[90%] lg:w-[70%]">
      <div className="container mx-auto text-center p-5">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasonsData.map((reason) => (
            <div
              key={reason.id}
              className="bg-white bg-opacity-70 backdrop-blur-lg drop-shadow-lg p-6 shadow-md rounded-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <i className={`text-3xl ${reason.icon} text-blue-500`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
