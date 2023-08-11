import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp, FaFacebookSquare } from 'react-icons/fa';
import {  FaInstagram, FaLinkedin, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa';

export const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return (
        <div className='fondo fixed bottom-0 w-full'>
            <div className='flex justify-center items-center mt-2 cursor-pointer text-sm'>
                {isVisible && (
                    <div
                        onClick={() => scrollToTop()}
                        className="rounded-full w-10 h-10 text-4xl text-pink-500 animate-bounce fixed bottom-10 right-10 z-10"
                    >
                            <FaArrowAltCircleUp />
                      
                    </div>
                )}
            </div>
            <footer className='flex justify-between items-center botton-0 py-3 px-8 text-sm font-light flex-col lg:flex-row gap-4'>
                <p>Kencodict Tech</p>
                <div className="flex justify-center space-x-4 ">
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
                <p>By <a href='https://ken-codict-portfolio-ss64.vercel.app/' target='_blank' rel='noreferrer' className='font-semibold'>Kencodict Tech</a> 💚</p>
            </footer>
        </div>
    )
};