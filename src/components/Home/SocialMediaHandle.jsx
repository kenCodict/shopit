import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa';

const SocialMediaIntegration = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Follow Us on Social Media</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaFacebookSquare className="text-2xl"/>
            
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
          <FaTwitter className="text-2xl"/>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
          <FaInstagram className="text-2xl"/>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
          <FaLinkedin className="text-2xl"/>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
          <FaTelegram className="text-2xl"/>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
          <FaTiktok className="text-2xl"/>
          </a>
          {/* Add more social media icons here */}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaIntegration;
