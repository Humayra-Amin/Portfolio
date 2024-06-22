import Link from 'next/link';

const Navbar = () => {

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Skills",
            path: "/skills"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Projects",
            path: "/projects"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]
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
                            {
                                navItems.map((item) => (
                                    <Link href={item.path} key={item.path}>{item.title}</Link>
                                ))
                            }
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-2xl text-white playfair">Humayra<span className='text-black text-4xl mb-2'>.</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white lg:text-[18px]">
                        <div className='flex items-center space-x-6'>
                            {
                                navItems.map((item) => (
                                    <Link href={item.path} key={item.path}>{item.title}</Link>
                                ))
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
