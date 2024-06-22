import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 right-0 z-50 shadow-md'>
            <div className="navbar bg-yellow-700">
                <div className="navbar-start px-8">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-white bg-yellow-700">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/skills">Skills</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-2xl text-white">Humayra.</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white lg:text-[18px]">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/skills">Skills</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
