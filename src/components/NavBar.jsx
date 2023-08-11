import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { FaBars } from 'react-icons/fa';

const activeStyle = "underline underline-offset-4";

export const NavBar = () => {
    const [showNav, setShowNav] = useState(false)
const handleClick = () => {
setShowNav(!showNav)
}
    const context = useContext(Context);

    return (
       <header className='flex justify-between p-4 fixed z-10 top-0 w-full h-[81px] items-center rounded-none'>
         <h1 className='font-black text-2xl '>
                    <NavLink to='/' onClick={() => {
                        setShowNav(false)
                        context.setSearchByCategory()
                    }}>Kenny </NavLink>
                </h1>
         <nav className={`lg:bg-transparent lg:bg-opacity-0 lg:backdrop-blur-0 lg:drop-shadow-none flex justify-between items-center  px-8 text-sm font-light  flex-col lg:flex-row  lg:h-fit w-full absolute lg:static top-[80px] left-0 ${showNav ? "bg-white bg-opacity-70 backdrop-blur-lg rounded drop-shadow-lg h-[200px] lg:bg-transparent lg:bg-opacity-0 lg:backdrop-blur-0 lg:drop-shadow-none" : "h-0 lg:bg-transparent lg:bg-opacity-0 lg:backdrop-blur-3xl lg:drop-shadow-none overflow-hidden lg:h-full lg:w-fit"} duration-500`}>
            <ul className='flex items-center gap-3 flex-col lg:flex-row justify-center h-full text-xl font-black w-full'>
               
                <li>
                    <NavLink
                        to='/'
                        onClick={() => {
                            setShowNav(false)
                            context.setSearchByCategory()
                        }}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/products'
                        onClick={() => {
                            setShowNav(false)
                            context.setSearchByCategory()
                        }}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders' 
                    onClick={() => {
                        setShowNav(false)
                    }}
                    className={({isActive}) => isActive ? activeStyle : undefined}>My orders</NavLink>
                </li>
                <li>
                    <NavLink to='/account'
                    onClick={() => {
                        setShowNav(false)
                    }}
                    className={({isActive}) => isActive ? activeStyle : undefined}>Account</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                      onClick={() => {
                        setShowNav(false)
                    }}
                    className={({isActive}) => isActive ? activeStyle : undefined}>Sign in</NavLink>
                </li>
               
            </ul>
        </nav>
        <ul>
        <li className='flex'>
                    <NavLink to='/cart-shopping' className={({isActive}) => isActive ? activeStyle : undefined}>
                        <ShoppingCartIcon className='h-5 w-5 text-black'></ShoppingCartIcon>
                    </NavLink>
                    {
                        context.productsCount === 0 ?
                            <div className='flex justify-center items-center text-xs font-semibold'>{context.productsCount}</div>
                            :
                            <div className='flex justify-center items-center bg-green-100 w-5 h-5 rounded-full text-xs font-semibold'>{context.productsCount}</div>
                    }
                </li>
        </ul>
        <div className="text-xl text-gray-700 cursor-pointer lg:hidden px-4" onClick={handleClick}>
            <FaBars />
        </div>
       </header>
    )
};