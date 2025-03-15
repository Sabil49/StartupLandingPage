
import * as motion from 'motion/react-client';
import Oneclickdeploy from './Oneclickdeploy';
import Workflow from './Workflow';
import Hosting from './Hosting';

export default function Deployments(){
    return(
        <>
        <div className='py-8 lg:py-16'>
        <div className=' relative min-w-[36%] max-w-fit m-auto [&:not(:last-child)]:py-4  [&:not(:last-child)]:px-2'>
        <h3 className=' font-bold text-center pl-1 pr-1 text-4xl color-[#262626] dark:text-[#d4d4d4]'>Deployments made easy</h3>
        
    <motion.div className='border border-neutral-200 dark:border-neutral-800 absolute top-0 left-0' initial={{opacity:0,width:10,height:10}} whileInView={{opacity:1,width:'100%',height:'100%'}} transition={{
        ease:'easeInOut', duration:'2'
    }}>        
        <div className=' w-2 h-2 -top-1 absolute -left-1 dark:bg-neutral-800 bg-neutral-200'></div>
        <div className=' w-2 h-2 -top-1 absolute -right-1 dark:bg-neutral-800 bg-neutral-200'></div>
        <div className=' w-2 h-2 -bottom-1 absolute -left-1 dark:bg-neutral-800 bg-neutral-200'></div>
        <div className=' w-2 h-2 -bottom-1 absolute -right-1 dark:bg-neutral-800 bg-neutral-200'></div>
    </motion.div></div>
    <div className=" w-2/5 m-auto">
    <p className=' text-center text-neutral-600 text-base dark:text-[#d4d4d4] pt-2 pb-2 pl-1 pr-1'>Deploy with ease, leave complexities to us</p>
    </div>
    </div>
    <div className='mt-10 grid cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto'>
        <div className='group isolate rounded-2xl bg-white md:auto-rows-[25rem] dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-3'><Oneclickdeploy /></div>
        <div className='group isolate rounded-2xl bg-white md:auto-rows-[25rem] dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-2'><Workflow /></div>
        <div className='group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between md:col-span-5'><Hosting /></div>
       
    </div>
    
    </>
    )    
}