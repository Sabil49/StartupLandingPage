import Image from "next/image";

export default function Oneclickdeploy(){
    return(
        <div>
            <div className="p-4 lg:p-6 lg:h-40"><h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-[#d4d4d4]">One click deploy</h3><p className="font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-[#d4d4d4]">Deploy your app in seconds, with our one click deploy feature.</p></div>

       <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg m-auto lg:my-12 w-full relative z-30 [perspective:1000px] [transform-style:preserve-3d] p-4 lg:p-8 sm:p-0">
         <div className="w-full h-14 md:h-40 p-2 rounded-lg relative shadow-lg flex bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700 overflow-hidden px-2 flex-col justify-center font-mono items-start text-neutral-800 dark:text-[#d4d4d4]">
            <p className="text-[8px] bg-transparent ">git add .</p>
            <p className="text-[8px] bg-transparent">git commit -m &quotupdate&quot</p>
            <p className="text-[8px] bg-transparent">git push</p>
         </div>
         <div className="w-full h-14 md:h-40 p-2 rounded-lg relative shadow-lg flex items-center bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700 justify-center">
            <Image alt='github' src='/Images/github.png' width='0' height='0' sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
         </div>
         <div className="w-full h-14 md:h-40 p-2 rounded-lg relative shadow-lg bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700 flex flex-col justify-center items-center">
         <Image alt='github' src='/Images/aws.png' width='0' height='0' sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
         <p className="text-[8px] bg-transparent ">your site is live ✨</p>
         </div>         
       </div>
              </div>
    )
}