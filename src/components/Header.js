import Logo from "./Logo"
import Menubutton from "./Menubutton";
import { useState, useEffect} from "react";
import NavbarDesktop from "./Navbar";


const Header = () => {
    const [isOpen, setIsOpen]=useState(false)
    useEffect(() =>{
        if (window.innerWidth > 768) {
            setIsOpen(true)
          } else {
            setIsOpen(false)
          }
    },[])

    return (
        <header className ="absolute w-full flex items-center justify-between p-5">
            <div>
                <Logo/>
            </div>
            {isOpen && (
                <nav>
                    <NavbarDesktop/>
                </nav>
            )}
            <div className='md:hidden'>
            <Menubutton isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </header>
        
    )
}

export default Header
