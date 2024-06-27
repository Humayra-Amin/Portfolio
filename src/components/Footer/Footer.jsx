import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-gray-500 text-base-content rounded p-10">
                <nav className="grid grid-flow-col">
                    <Link href={"/"} className="btn btn-ghost text-2xl text-white playwrite">Humayra<span className='text-red-600 text-4xl mb-2'>.</span></Link>
                </nav>
                <div className="my-4">
                    <p className="text-lg text-white playfair">Committed to providing the best services and solutions for your needs.<br></br> Contact me for more information.</p>
                </div>

                <nav className="my-4">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/humayraamin"
                            className="link link-hover text-4xl border-2 p-1 rounded-xl border-black bg-gray-300 hover:bg-slate-400 transform transition-transform duration-300 hover:translate-y-1">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Humayra-Amin"
                            className="link link-hover text-4xl border-2 p-1 rounded-xl border-black bg-gray-300 hover:bg-slate-400 transform transition-transform duration-300 hover:translate-y-1">
                            <FaGithub />
                        </a>
                    </div>
                </nav>

                <aside className="text-white text-[16px]">
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Humayra</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
