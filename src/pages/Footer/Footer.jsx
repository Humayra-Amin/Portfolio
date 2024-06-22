import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-yellow-500 text-base-content">
                <nav className="font-semibold merriweather">
                    <h6 className="footer-title text-xl">Quick Links</h6>
                    <a className="link link-hover text-[16px]">About</a>
                    <a className="link link-hover text-[16px]">Services</a>
                    <a className="link link-hover text-[16px]">Skills</a>
                    <a className="link link-hover text-[16px]">Projects</a>
                </nav>
                <nav className="font-semibold merriweather">
                    <h6 className="footer-title text-xl">Contact</h6>
                    <a className="link link-hover grid grid-flow-col gap-2 text-[16px]"><span className="mt-[3px]"><MdEmail /></span>humaema4576@gmail.com</a>
                    <a className="link link-hover grid grid-flow-col gap-2 text-[16px]"><span className="mt-[3px]"><MdCall /></span>+8801554633119</a>
                    <a className="link link-hover grid grid-flow-col gap-2 text-[16px]"><span className="mt-[3px]"><FaLocationDot /></span>Kazir Dewari, 1646 SS Khaled Road, Chattogram, Bangladesh</a>
                </nav>
                <nav className="font-semibold merriweather">
                    <h6 className="footer-title text-xl">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/humayraamin" className="link link-hover text-2xl"><FaLinkedin /></a>
                    <a href="https://github.com/Humayra-Amin" className="link link-hover text-2xl"><FaGithub /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;