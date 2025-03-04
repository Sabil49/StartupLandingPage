'use client'
import { FaRegSun ,FaRegMoon } from "react-icons/fa";
import { useTheme } from 'next-themes'

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme()

  return (
    <span className="flex flex-col justify-center ml-3"  onClick={() => {if (theme === 'dark') { return setTheme('light') } return setTheme('dark') }}>
   {
    theme === 'dark' ? <FaRegMoon /> : <FaRegSun />
   }    
</span>

  )
}