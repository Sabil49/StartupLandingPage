import Image from "next/image"

export default function Workflow(){
    return(
        <div>
            <div className="p-4 lg:p-6 lg:h-40"><h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-[#d4d4d4]">Intuitive workflow</h3><p className="font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-[#d4d4d4]">With our intuitive workflow, you can easily manage your app without complex steps.</p></div>
            <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
            <Image src='/Images/workflow.jpg' width='0' height='0' sizes="100vw" alt='Image' style={{ width: 'auto', height: 'auto' }} />
            </div>            
        </div>
    )
}