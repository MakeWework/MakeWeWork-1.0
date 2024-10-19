import Logo from "../assets/blacklogo.png";
// import Link from "next/link"
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
    const footerLinks = [
        { heading: "About Us" },
        { heading: "For entry-level techies" },
        { heading: "For Employers/Companies" },
        { heading: "Resources" },
        { heading: "Contact" },
        { heading: "Privacy Policy" },
    ];

    return (
        <>
            <footer className=" w-{1440px} flex md:flex-row flex-col bg-green-700 h-{160px}">
                <div className="">
                    
                <nav className="flex gap-7 p-{8px} mt-{66.5px} w-{714px} h-{31px} px-10">
                    {footerLinks.map((link, index) => (
                        <p key={index}>{link.heading}</p>
                    ))}
                    {/* <Link href="/">
                            <img src={Logo} alt="logo" />
                        </Link> */}
                        <div className="flex gap-5 p-2">
                            <FaFacebook />
                            <BsTwitterX />
                            <FaInstagram />
                        </div>
                </nav>
                <section className="flex items-center justify-center h-14 w-{187px} mt-{121px} text-white">
                    <p>©2024 MakeWeWork. All rights reserved</p>
                    
                </section>
                </div>
               

                
            </footer>
        </>
    );
}

export default Footer;
