export default function BackRotate(){
    return(
        <div className="w-full pointer-events-none absolute rotate-[-55deg] inset-0 grid h-full transform select-none grid-cols-2 gap-10 md:grid-cols-4">
            <div className="relative h-full -mt-[75%] w-full border-r-[1px] border-dotted dark:border-gray-100"></div>
            <div className="relative h-full -mt-[75%] w-full border-l-[1px] border-r-[1px] border-dotted bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800 dark:border-gray-100"></div>
            <div className="relative w-full -mt-[60%] h-full border-l-[1px] border-r-[1px] border-dotted dark:border-gray-100 bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800"></div>
        </div>
    )
}