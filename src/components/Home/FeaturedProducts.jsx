import React from 'react';
import { Card } from '../Card';
import { products } from "../../assets/products";

const FeaturedProducts = () => {
  // Replace this with your actual product data and card components
  const filteredProducts = products.filter(item => item.featured === true)

  return (
    <section className="py-10 w-[90%] lg:w-[70%]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <div className="product-container gap-4  w-full max-w-screen-lg">
          {filteredProducts.map((product) => (
            // <div
            //   key={product.id}
            //   className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            // >
            //   {/* Product Card Component */}
            //   <div className="bg-white rounded-lg overflow-hidden shadow-md">
            //     <img
            //       src={product.image}
            //       alt={product.name}
            //       className="w-full h-48 object-cover"
            //     />
            //     <div className="p-4">
            //       <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            //       <p className="text-gray-600">${product.price}</p>
            //       <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 mt-4 rounded-md">
            //         Add to Cart
            //       </button>
            //     </div>
            //   </div>
            // </div>
            <Card key={product.id} item={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
