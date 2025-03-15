export default function Pricing(){
    return(
        <div className="relative isolate dark:bg-neutral-950 w-full px-0 lg:px-4 py-0 sm:py-20 lg:px-4 ">
            <h2 className="pt-4 font-bold text-lg md:text-4xl text-center text-neutral-800 dark:text-[#d4d4d4]">Simple pricing for advanced people</h2>
            <p className="max-w-md mx-auto text-base text-center text-neutral-600 dark:text-[#d4d4d4] mt-4">Our pricing is designed for advanced people who need more features and more flexibility.</p>
        <div className="grid grid-cols-1 gap-4 mt-6 lg:mt-20 max-w-7xl mx-auto md:grid-cols-2 xl:grid-cols-3">
    <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
        <div className="flex flex-col gap-4 h-full justify-start">
            <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                <div className="flex justify-between items-start ">
                    <div className="flex gap-2 flex-col"><p className="font-medium text-lg text-black dark:text-[#d4d4d4]">Hobby</p></div>
                </div>
                <div className="mt-8 ">
                    <div className="flex items-end">
                        <span className="text-lg font-bold text-neutral-500 dark:text-[#d4d4d4]">$</span>
                        <div className="flex items-start gap-2"><span className="text-3xl md:text-7xl font-bold dark:text-[#d4d4d4] text-neutral-800">99</span></div>
                        <span className="text-base font-normal text-neutral-500 dark:text-[#d4d4d4] mb-1 md:mb-2">/month</span>
                    </div>
                </div>
                <a
                    className="px-4 py-2 rounded-md button bg-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10"
                >
                    Get Hobby
                </a>
            </div>
            <div className="mt-1 p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Access to basic analytics reports</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Up to 10,000 data points per month</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Email support</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Community forum access</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Cancel anytime</div>
                </div>
            </div>
            <div className="p-4"></div>
        </div>
    </div>
    <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
        <div className="flex flex-col gap-4 h-full justify-start">
            <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                <div className="flex justify-between items-start ">
                    <div className="flex gap-2 flex-col"><p className="font-medium text-lg text-black dark:text-[#d4d4d4]">Starter</p></div>
                    <div className="font-medium text-xs px-3 py-1 rounded-full relative bg-neutral-900 dark:bg-white dark:text-[#d4d4d4] text-white">
                        <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                        Featured
                    </div>
                </div>
                <div className="mt-8 ">
                    <div className="flex items-end">
                        <span className="text-lg font-bold text-neutral-500 dark:text-[#d4d4d4]">$</span>
                        <div className="flex items-start gap-2"><span className="text-3xl md:text-7xl font-bold dark:text-[#d4d4d4] text-neutral-800">299</span></div>
                        <span className="text-base font-normal text-neutral-500 dark:text-[#d4d4d4] mb-1 md:mb-2">/month</span>
                    </div>
                </div>
                <a
                    className="px-4 py-2 rounded-md button bg-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10"
                >
                    Get Starter
                </a>
            </div>
            <div className="mt-1 p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Advanced analytics dashboard</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Customizable reports and charts</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Real-time data tracking</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Integration with third-party tools</div>
                </div>
            </div>
            <div className="relative">
                <div className="w-full h-px dark:bg-neutral-950 bg-white"></div>
                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800"></div>
                <div className="absolute inset-0 h-5 w-5 m-auto rounded-xl dark:bg-neutral-800 bg-white shadow-[0px_-1px_0px_0px_var(--neutral-200)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)] flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-plus h-3 w-3 [stroke-width:4px] dark:text-[#d4d4d4] text-black"
                    >
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                    </svg>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Everything in Hobby Plan</div>
                </div>
            </div>
        </div>
    </div>
    <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
        <div className="flex flex-col gap-4 h-full justify-start">
            <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                <div className="flex justify-between items-start ">
                    <div className="flex gap-2 flex-col"><p className="font-medium text-lg text-black dark:text-[#d4d4d4]">Pro</p></div>
                </div>
                <div className="mt-8 ">
                    <div className="flex items-end">
                        <span className="text-lg font-bold text-neutral-500 dark:text-[#d4d4d4]">$</span>
                        <div className="flex items-start gap-2"><span className="text-3xl md:text-7xl font-bold dark:text-[#d4d4d4] text-neutral-800">1490</span></div>
                        <span className="text-base font-normal text-neutral-500 dark:text-[#d4d4d4] mb-1 md:mb-2">/month</span>
                    </div>
                </div>
                <a
                    className="px-4 py-2 rounded-md button bg-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10"
                >
                    Get Pro
                </a>
            </div>
            <div className="mt-1 p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Unlimited data storage</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Customizable dashboards</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Advanced data segmentation</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Real-time data processing</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">AI-powered insights and recommendations</div>
                </div>
            </div>
            <div className="relative">
                <div className="w-full h-px dark:bg-neutral-950 bg-white"></div>
                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800"></div>
                <div className="absolute inset-0 h-5 w-5 m-auto rounded-xl dark:bg-neutral-800 bg-white shadow-[0px_-1px_0px_0px_var(--neutral-200)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)] flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-plus h-3 w-3 [stroke-width:4px] dark:text-[#d4d4d4] text-black"
                    >
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                    </svg>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Everything in Hobby Plan</div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                        >
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <div className="font-medium text-black text-sm dark:text-[#d4d4d4]">Everything in Pro Plan</div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}