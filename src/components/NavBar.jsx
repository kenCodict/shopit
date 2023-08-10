import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const activeStyle = "underline underline-offset-4";

export const NavBar = () => {

    const context = useContext(Context);

    return (
       <header className='flex justify-between p-4 fixed z-10 top-0 w-full'>
         <h1 className='font-semibold text-lg'>
                    <NavLink to='/' onClick={() => context.setSearchByCategory()}>Kenny </NavLink>
                </h1>
         <nav className='flex justify-between items-center  px-8 text-sm font-light fondo'>
            <ul className='flex items-center gap-3'>
               
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/products'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders' className={({isActive}) => isActive ? activeStyle : undefined}>My orders</NavLink>
                </li>
                <li>
                    <NavLink to='/account' className={({isActive}) => isActive ? activeStyle : undefined}>Account</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({isActive}) => isActive ? activeStyle : undefined}>Sign in</NavLink>
                </li>
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
        </nav>
       </header>
    )
};