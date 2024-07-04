import Link from 'next/link';

const Navbar = () => {

    return (
        <div className='fixed top-0 left-0 right-0 z-50 shadow-md'>
            <div className="navbar bg-gray-500 border-2 border-gray-500 shadow-lg">
                <div className="navbar-start px-8">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-white bg-gray-500 playfair gap-3">
                        {navItems.map((item) => (
                                <Link className="font-semibold hover:text-primary hover:border-gray-200 hover:p-1 hover:rounded-xl hover:bg-gray-200 duration-300"
                                    href={item.path}
                                    key={item.path}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost text-2xl text-white playwrite">
                        Humayra<span className='text-red-600 text-4xl mb-2'>.</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white lg:text-[18px]">
                        <div className='flex items-center space-x-6 playfair'>
                            {navItems.map((item) => (
                                <Link className="font-semibold hover:text-primary hover:border-gray-200 hover:p-1 hover:rounded-xl hover:bg-gray-200 duration-300"
                                    href={item.path}
                                    key={item.path}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const navItems = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Skills",
        path: "/skills"
    },
    {
        title: "Services",
        path: "/service"
    },
    {
        title: "Projects",
        path: "/project"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Experiences",
        path: "/experience"
    },
];

export default Navbar;
