import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
    return ( 
        <footer className="max-container">
            <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="">
                        <img src={footerLogo} alt="" width={150} height={46}/>
                    </a>
                    <p className="mt-6 text-base text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect Size In Store. Get Rewards</p>
                </div>

                <div className="flex items-center gap-5 mt-8">
                    {socialMedia.map((item)=>(
                        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white cursor-pointer hover:bg-slate-gray">
                            <img 
                                src={item.src} 
                                alt={item.alt}
                                width={24}
                                height={24} 
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-1 justify-between items-center flex-wrap gap-20 lg:gap-10">
                    {footerLinks.map((item)=>(
                        <div key={item}>
                            <h4 className="text-white font-montserrat text-2xl leading-normal font-normal">{item.title}</h4>
                            <ul>
                                {item.links.map((link)=>(
                                    <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                                        <a>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
                    <div className="flex flex-1 justify-start gap-2 items-center font-montserrat cursor-pointer">
                        <img src={copyrightSign} alt="copy-right" width={20} height={20} className="rounded-full m-0"/>
                        <p>Copyright. All rights reserved.</p>
                    </div>
                    <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
    );
}
 
export default Footer;