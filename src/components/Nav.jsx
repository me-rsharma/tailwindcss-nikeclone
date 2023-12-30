import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = ()=>{
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="header logo" width={130} height={29} />
                </a>
                <ul className="flex justify-center items-center gap-16 max-lg:hidden">
                    {
                        navLinks.map((item)=>(
                            //not using curly braces since we want to immediately return
                            <li key={item.label}>
                                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="max-lg:block hidden">
                    <img src={hamburger} alt="Hamburger" width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav;