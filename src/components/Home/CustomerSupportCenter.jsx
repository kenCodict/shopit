import React from 'react';

const CustomerSupport = () => {
  return (
    <section className="py-12 bg-white bg-opacity-70 backdrop-blur-lg drop-shadow-lg p-6 shadow-md px-5 w-[90%] lg:w-[70%]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Customer Support</h2>
        <p className="text-gray-600">
          Have questions or need assistance? Our dedicated customer support team is here to help.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CustomerSupport;
