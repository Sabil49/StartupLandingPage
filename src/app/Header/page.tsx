'use client'
import {useState} from 'react';
import { FaBars,FaTimes } from "react-icons/fa";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ThemeToggle from '@/Theme/theme-toggle';

export default function Header(){

    const [show, setShow] = useState(false);    
    const { scrollYProgress } = useScroll();
    const headerPos = useTransform(scrollYProgress, [0, 0.3], ['100%', '60%']); 
    
    const myFunction = () => {
        setShow(!show)
    }   
   
        return(       
        <motion.header className={`bg-[#fafafa] dark:bg-[#0d0d0d] sticky top-0 container w-[95%] m-auto lg:flex p-4 lg:items-center lg:content-center justify-between px-4 py-2 transition duration-200 ${show ? '!absolute w-full h-full' : 'rounded-full'} ${headerPos ? 'sticky top-2 will-change: auto; backdrop-filter: blur(10px); box-shadow: rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset; width: 40%; transform: translateY(20px)' : ''}`}  style={{ width: headerPos }}>
            <div className=" w-2/12">
                <Image src='/Images/logo.png' width={40} height={20} alt="logo" />
            </div>
            <div className={`transition duration-200 lg:w-5/12 my-4 lg:my-0 ${show ? 'visible' : 'hidden lg:block'}`}>
                <ul className="lg:*:ml-8 hover:*:bg-gray-100 *:rounded-full *:px-4 *:py-2 *:font-medium *:text-zinc-600 hover:*:text-zinc-800 hover:dark:*:bg-black dark:*:text-white transition duration-200 *:text-sm first:ml-0 flex place-content-center">
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Contact</a></li>                    
                </ul>
            </div>
            <div className={`lg:w-5/12 lg:justify-end ${show ? 'visible' : 'hidden lg:block'}`}>
                <ul className=" *:font-bold *:text-sm lg:float-right flex *:flex lg:*:ml-3 *:float-left **:data-button:p-2">                    
                    <li className=""><button className=" rounded-md px-3 py-1.5"><ThemeToggle /></button></li>
                    <li>
                    <button className=" rounded-3xl px-4 pr-3 py-2">Login</button>           
                    </li>
                    <li className=' items-center'>
                        <button className=" text-black bg-white rounded-md px-4 py-2 hover:-translate-y-0.5 transition duration-200 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">Book a call</button>
                    </li>
                </ul>
            </div>
            <div className="absolute top-3.5 right-4 lg:hidden sm:max-lg:visible" onClick={myFunction}>
                {
                    show ? <FaTimes className="cursor-pointer" /> : <FaBars className="cursor-pointer" />
                }               
            </div>
        </motion.header>
    )
}