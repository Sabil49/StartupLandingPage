import Image from "next/image";

export default function Footer(){
    return(
        <div className=" w-full pt-16 border-t-[1px] border-[#f1f1f1]">
            <div className="px-4 lg:px-0 max-w-[1280px] m-auto w-full overflow-auto text-sm text-gray-600  dark:text-[#d4d4d4]">
            <div className="w-full lg:w-7/12 float-none lg:float-left">
                <ul className="*:mb-2">
                    <li className=" flex content-center items-center"><Image src='/Images/logo.png' width={25} height={15} alt="logo" /><span className="ml-1.5 font-medium text-black dark:text-white">Startup</span></li>
                    <li>© copyright Startup 2024. All rights reserved.</li>

                </ul>
            </div>
            <div className="w-full mt-4 lg:mt-0 lg:w-5/12 float-none lg:float-right flex">
                <div className=" w-1/4">
                <ul className="*:mb-4">
                    <li><b>Pages</b></li>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                </div>
                <div className=" w-1/4">
                <ul className="*:mb-4">
                <li><b>Socials</b></li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
                </div>
                <div className=" w-1/4">
                <ul className="*:mb-4">
                <li><b>Legal</b></li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookie Policy</li>
                </ul>
                </div>
                <div className=" w-1/4">
                <ul className="*:mb-4">
                <li><b>Register</b></li>
                    <li>Sign Up</li>
                    <li>Login</li>
                    <li>Book a demo</li>
                </ul>
                </div>
            </div>
           
        </div>
 <div className="max-w-[1280px] m-auto w-full text-center text-5xl lg:text-[275px] font-bold  !text-[#d4d4d4]">
 STARTUP
            </div>
        </div>
        
    )
}
