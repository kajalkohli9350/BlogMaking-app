'use client'
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Themetoggle = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme =() =>{
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
   
    return ( 
        <button onClick={toggleTheme}>
            <Sun className='hidden dark:block'/>
            <Moon className='block dark:hidden'/>

        </button>
     );
}
 
export default Themetoggle;