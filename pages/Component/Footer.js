/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="contact_icon">
                <Link
                    href="https://wa.me/6284076970">
                    <img
                        src="./whatsapp.png"
                        alt="" />
                </Link>
                <Link
                    href="tel:+1(209)226-445">
                    <img
                        className="call"
                        src="./phone_call.png"
                        alt="" />
                </Link>
            </div>
            <footer className="footer-distributed">
                <div className='container'>
                    <div className="footer-left">
                        <Link className="footer_logo" href="/"><img src="../logo.png" alt="" /></Link>
                        <p className="footer-links">
                            <Link href="/" className="link-1">
                                Home
                            </Link>
                            <Link href="/buycar">Buy Car</Link>
                            <Link href="/Sellcar">Sell Car</Link>
                            <Link href="/blog">Blog</Link>
                        </p>
                        <p className="footer-company-name">Copyright © 2023 Used Cars In India </p>
                    </div>
                    <div className="footer-center">
                        <div className="space_adjuster">
                            <p>
                                <FaMapMarkerAlt /><span>E-252, Prosperity Tower,</span>
                                Sec. 74, Phase 8b, Mohali(Pb.)
                            </p>
                        </div>
                        <div className="space_adjuster">
                            <p><FaPhoneAlt /> +91 6284076970</p>
                        </div>
                        <div className="space_adjuster">
                            <p>
                                <FaEnvelope /><Link href="/">logo@company.com</Link>
                            </p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>About Us</span>
                            We are here to help the people to buy and sale used cars anywhere India without giving any fee to brokers
                        </p>
                        <div className="footer-icons">
                            <Link href="/">
                                <FaFacebook />
                            </Link>
                            <Link href="/">
                                <FaTwitter />
                            </Link>
                            <Link href="/">
                                <FaLinkedin />
                            </Link>
                            <Link href="/">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;