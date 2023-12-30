import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <img src={footerLogo} alt="footer logo"
                        width={150}
                        height={46}
                    />
                    <p className="font-montserrat text-white-400 mt-6 text-base leading-7 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                    <div className="flex mt-8 items-center gap-5">
                        {socialMedia.map((icon) => (
                            <div key={icon} className="bg-white rounded-full w-12 h-12 flex justify-center items-center">
                                <img src={icon.src} alt={icon.alt}
                                    width={24}
                                    height={24} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* links section start */}
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {
                        footerLinks.map((option) => {
                            return (
                                <div key={option}>
                                    <h3 className="text-white font-montserrat text-2xl leading-normal mb-6 font-medium">{option.title}</h3>
                                    <ul>
                                        {option.links.map((link) => (
                                            <li key={link} className="text-white-400 font-montserrat
                                            hover:text-slate-gray cursor-pointer 
                                            text-base leading-normal mt-3">{link.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex justify-between max-sm:items-center mt-24 max-sm:flex-col text-whote-400">
                <div className="text-white-400 flex flex-1 gap-2 font-montserrat justify-start items-center">
                    <img src={copyrightSign} alt="copyright sign" 
                    width={20}
                    height={20}
                    className="rounded-full -m-0.5"
                    />
                    <p>Copyright. All rights reserved</p>
                </div>
                <p className="font-montserrat text-white-400">Terms & Conditions</p>
            </div>

        </footer>
    )
};

export default Footer;