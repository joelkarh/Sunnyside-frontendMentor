import Facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'
import pinterest from '../assets/icon-pinterest.svg'
import Footerlogo from '../assets/footer-logo.svg'
const Footer = () => {
    return ( 
    <> 
    <footer className="footer p-5">
        <div className="">
            <img src={Footerlogo} alt="Footer sunny side logo" className="mx-auto block"/>
        </div>
        <ul className='flex items-center justify-center my-5'>
            <li className="mx-2">
                <button>About</button>
            </li>
            <li className="mx-2">
                <button>Services</button>
            </li>
            <li className="mx-2">
                <button>Projects</button>
            </li>
        </ul>
        <ul className='flex items-center justify-center my-5'>
            <li className="mx-2">
                <img src={Facebook} alt="socials facebook"/>
            </li>
            <li className="mx-2">
                <img src={instagram} alt="socials instagram"/>
            </li>
            <li className="mx-2">
                <img src={twitter} alt="socials twitter"/>
            </li>
            <li className="mx-2">
                <img src={pinterest} alt="socials pinterest"/>
            </li>
        </ul>
        <small class="text-center block">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Joël Karhamba</a>.
  </small>
    </footer>
     </>
    )
}

export default Footer