export default function BackRotate(){
    return(
        <div className="w-full pointer-events-none absolute -rotate-[55deg] -top-[300px] inset-0 grid h-full transform select-none grid-cols-2 gap-10 md:grid-cols-4 -z-[1]">
            <div className="relative h-full w-full border-dotted dark:border-gray-100"></div>
            <div className="relative h-full w-full border-l-[0.5px] border-r-[0.5px] border-dotted bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800 dark:border-gray-100"></div>
            <div className="relative w-full h-full border-l-[0.5px] border-r-[0.5px] border-dotted dark:border-gray-100 bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800"></div>
            <div className="relative h-full w-full border-r-[0.5px] border-l-[0.5px] border-dotted dark:border-gray-100 bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800"></div>
        </div>
    )
}