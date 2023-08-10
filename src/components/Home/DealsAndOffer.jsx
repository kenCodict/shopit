import React from 'react';
import BannerImage1 from '../../assets/banner1.png'; // Replace with your image URLs
import BannerImage2 from '../../assets/banner2.png';
import BannerImage3 from '../../assets/banner3.png';
// import dealsData from '../dealsData';
const dealsData = [
    {
      id: 1,
      title: 'Limited Time Offer',
      description: 'Save up to 40% on selected laptops and tablets!',
      image: BannerImage1, // Replace with your image URL
      link: '/products',
    },
    {
      id: 2,
      title: 'Flash Sale',
      description: 'Get the latest headphones at unbeatable prices!',
      image: BannerImage2, // Replace with your image URL
      link: '/products',
    },
    {
      id: 3,
      title: 'Bundle Discount',
      description: 'Buy a camera and get 50% off on camera accessories.',
      image: BannerImage3, // Replace with your image URL
      link: '/products',
    },
  ];
const DealsAndOffers = () => {
  return (
    <section className="py-12 w-full">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Deals and Offers</h2>
        <div className="mx-auto gap-6 deals-container lg:w-[70%] w-[90%] ">
          {dealsData.map((deal) => (
            <div
              key={deal.id}
              className="bg-white bg-opacity-70 backdrop-blur-lg drop-shadow-lg p-6 shadow-md rounded-md hover:shadow-lg transition duration-300"
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="mx-auto h-24 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{deal.title}</h3>
              <p className="text-gray-600">{deal.description}</p>
              <a
                href={deal.link}
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Deal
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsAndOffers;