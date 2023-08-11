import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="py-12 bg-white bg-opacity-70 backdrop-blur-lg drop-shadow-lg p-6 shadow-md px-5 w-[90%] lg:w-[70%] overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Newsletter Signup</h2>
        <p className="text-gray-600">
          Stay updated with our latest products, deals, and news by subscribing to our newsletter.
        </p>
        <div className="mt-6">
          <form className="flex justify-center w-full p-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-3 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-2 py-3 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
