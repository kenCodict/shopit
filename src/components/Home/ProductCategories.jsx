import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context';

const activeStyle = "underline underline-offset-4";
const ProductCategories = () => {
  const categories = [
    'All',
    'Laptops',
    'Tablets',
    'Cameras',
    'Headphones',
    'Cellphones',
    'Accessories',
  ];
  const context = useContext(Context);
  return (
   
      <div className="container mx-auto text-center max-w-screen-lg">
        <ul className="flex gap-5 flex-wrap justify-center mb-10">
          
                 <li>
                    <NavLink
                        to='/products'
                        onClick={() => context.setSearchByCategory()}
                        className={`${({ isActive }) => isActive ? activeStyle : undefined} flex items-center justify-center p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-blue-100 transition duration-300`}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/products/laptops'
                        onClick={() => context.setSearchByCategory('laptops')}
                        className={`${({ isActive }) => isActive ? activeStyle : undefined} flex items-center justify-center p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-blue-100 transition duration-300`}
                    >
                        Laptops
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/products/tablets'
                        onClick={() => context.setSearchByCategory('tablets')}
                        className={`${({ isActive }) => isActive ? activeStyle : undefined} flex items-center justify-center p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-blue-100 transition duration-300`}
                    >
                        Tablets
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/products/cameras'
                        onClick={() => context.setSearchByCategory('cameras')}
                        className={`${({ isActive }) => isActive ? activeStyle : undefined} flex items-center justify-center p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-blue-100 transition duration-300`}
                    >
                        Cameras
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/products/headphones'
                        onClick={() => context.setSearchByCategory('headphones')}
                        className={`${({ isActive }) => isActive ? activeStyle : undefined} flex items-center justify-center p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-blue-100 transition duration-300`}
                    >
                        Headphones
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/products/cellphones'
                        onClick={() => context.setSearchByCategory('cellphones')}
                        className={`${({ isActive }) => isActive ? activeStyle : undefined} flex items-center justify-center p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-blue-100 transition duration-300`}
                    >
                        Cellphones
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/products/accessories'
                        onClick={() => context.setSearchByCategory('accessories')}
                        className={`${({ isActive }) => isActive ? activeStyle : undefined} flex items-center justify-center p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-blue-100 transition duration-300`}
                    >
                        Accessories
                    </NavLink>
                </li>
           
        </ul>
      </div>
    
  );
};

export default ProductCategories;
