"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-b px-4 bg-white sticky top-0 z-50">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src={"/logoo.png"}
                            alt="logo"
                            loading="eager"
                            width={160}
                            height={80}
                            className="object-contain h-10 w-auto"
                        />
                    </Link>
                </div>

               
                <ul className="hidden md:flex items-center gap-10 text-[17px] font-medium text-gray-600">
                    <li className="hover:text-black"><Link href={"/"}>Home</Link></li>
                    <li className="hover:text-black"><Link href={"/all-courses"}>Courses</Link></li>
                    <li className="hover:text-black"><Link href={"/pricing"}>My Profile</Link></li>
                </ul>

                <div className="flex items-center gap-4">
                    {/* Buttons */}
                    <div className="hidden md:flex items-center gap-7 text-[17px] font-medium text-gray-600">
                        <Link href={"/signin"} className="hover:text-black">Sign In</Link>
                        <Link
                            href={"/register"}
                            className="bg-[#D93F0B] text-white px-5 py-2 rounded-full font-medium hover:bg-[#B33409] transition-all shadow-sm active:scale-95"
                        >
                            Register for free
                        </Link>
                    </div>

                    {/* Dropdown*/}
                    <div className="group relative md:hidden py-2">
                        
                        <button className="text-gray-600 p-2">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>

                        
                        <div className="absolute right-0 top-full w-48 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <ul className="flex flex-col p-3 gap-3 text-[16px] font-medium text-gray-600">
                                <li><Link href="/" className="block hover:bg-gray-50 p-2 rounded">Home</Link></li>
                                <li><Link href="/all-courses" className="block hover:bg-gray-50 p-2 rounded">Courses</Link></li>
                                <li><Link href="/pricing" className="block hover:bg-gray-50 p-2 rounded">My Profile</Link></li>
                                <div className="border-t my-1"></div>

                                {/* buttons */}

                                <li><Link href="/signin" className="block text-center p-3  border border-transparent hover:border-[#D93F0B] hover:text-[#D93F0B] transition-all duration-200 rounded-full">Sign In</Link></li>

                                <li>
                                    <Link href="/register" className="block bg-[#D93F0B] text-white text-center p-2 rounded-full text-[16px]">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

