import { MdNoteAlt } from "react-icons/md";
import Container from "./Container";
import Themetoggle from "./Themetoggle";
import Searchinputs from "./Searchinputs";
import Notifications from "./Notifications";
import Userbutton from "./Userbutton";
import Link from "next/link";
import Registerbutton from "./Registerbutton";

const Navbar = () => {
    return (
    <nav className='sticky top-0 border-b z-50 bg-white dark:bg-slate-950'>
        <Container>
        <div className='flex justify-between items-center gap-8'>
            <div className="flex items-center gap-1 curser-pointer" >
                <MdNoteAlt size={24}/>
                <div className='font-bold text-xl'>WEBDEV.blog</div>
            </div>
            <Searchinputs/>
            <div className='flex gap-5 sm:gap-8 items-center'>
               <Themetoggle/>
                <Notifications/>
               <Userbutton />
               <>
               <Link href='/login'>Login</Link>
               <Registerbutton/>
               </>
            </div>
        </div>
        </Container>

    </nav> 
     );
}
 
export default Navbar ;