'use client'
import { useRouter } from "next/navigation";

const Registerbutton = () => {
    const router =useRouter();
    return ( 
        <button onClick={()=>router.push('/register')}>Register</button>
     );
}
 
export default Registerbutton;