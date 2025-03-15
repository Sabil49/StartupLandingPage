"use client"
import * as motion from 'motion/react-client';
import { Meteors } from '@/MeteorEffect/Meteors';
import BackRotate from './BackRotate';
import Image from 'next/image';
import { useScroll } from "motion/react"
import { useRef } from "react"

export default function Banner(){

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end"],
  })

    return(
      <><motion.div
      id="scroll-indicator"
      style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 100,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
      }}
  />
  <div className='pb-32 z-10 relative overflow-hidden'>
        
        <motion.div initial={{y:100,opacity:0}} animate={{ y: 0,opacity:1 }}
       transition={{ duration: 0.8,ease: "easeOut" }} className="py-10 lg:py-20 lg:px-10 text-center place-content-center w-full p-4 items-center content-center">
       <BackRotate />
       <Meteors number={10} />      
         <div> 
         <h2 className="lg:w-8/12 py-6 text-7xl m-auto font-semibold text-gray-700 dark:text-[#d4d4d4]">
            Deploy your website in seconds, not hours.
         </h2>
         </div>
         <div className='w-4/5 lg:w-2/5 m-auto'>
         <p className=" text-base/6 pb-8 text-gray-600 dark:text-[#d4d4d4]">
            With our state of the art, cutting edge, we are so back kinda hosting services, you can deploy your website in seconds.
         </p>
         </div>
         <div className=" flex justify-center gap-x-4 *:text-sm">
           <button className=" text-white bg-black rounded-md px-3 py-1.5  hover:-translate-y-0.5 transition duration-200 min-w-32">Create account</button>
           <button className=" text-black bg-white rounded-md px-3 py-1.5  hover:-translate-y-0.5 transition duration-200 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] min-w-32" data-button>Book a call</button>
         </div>
         </motion.div>
         <div className='relative mx-auto max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4'><div className='rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black'><Image src='/Images/dashboard-new.jpg' alt='Image' width={0} height={0} sizes="100vw" className='rounded-[20px]' style={{ width: '100%', height: 'auto' }} /></div></div>
         </div></>
    )
    
}