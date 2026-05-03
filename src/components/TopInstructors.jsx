"use client";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaStar } from "react-icons/fa";

const TopInstructors = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-15">
            {/*Header */}
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Learn from the <span className="text-[#D93F0B]">Best</span>
                </h2>
                <p className="text-gray-500 max-w-xl text-lg">
                    Our instructors are industry leaders with years of real-world experience in their respective fields.
                </p>
            </div>

            {/* Instructors grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* 1 */}
                <div className="group bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 bg-[#D93F0B] rounded-full rotate-6 group-hover:rotate-12 transition-transform"></div>
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Instructor"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Alex Johnson</h3>
                    <p className="text-[#D93F0B] font-medium mb-4">Senior Web Developer</p>
                    <div className="flex items-center justify-center gap-1 text-orange-400 mb-6">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <span className="text-gray-400 text-sm ml-1">(4.9)</span>
                    </div>
                    <div className="flex justify-center gap-4 text-gray-400">
                        <FaLinkedin className="hover:text-[#D93F0B] cursor-pointer transition-colors" size={20} />
                        <FaTwitter className="hover:text-[#D93F0B] cursor-pointer transition-colors" size={20} />
                    </div>
                </div>

                {/* 2 */}
                <div className="group bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center scale-105 border-b-4 border-b-[#D93F0B]">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gray-800 rounded-full -rotate-6 group-hover:-rotate-12 transition-transform"></div>
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Instructor"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Sarah Miller</h3>
                    <p className="text-[#D93F0B] font-medium mb-4">UI/UX Design Expert</p>
                    <div className="flex items-center justify-center gap-1 text-orange-400 mb-6">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <span className="text-gray-400 text-sm ml-1">(5.0)</span>
                    </div>
                    <div className="flex justify-center gap-4 text-gray-400">
                        <FaLinkedin className="hover:text-[#D93F0B] cursor-pointer transition-colors" size={20} />
                        <FaTwitter className="hover:text-[#D93F0B] cursor-pointer transition-colors" size={20} />
                    </div>
                </div>

                {/* 3 */}
                <div className="group bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 bg-[#D93F0B] rounded-full rotate-6 group-hover:rotate-12 transition-transform"></div>
                        <img
                            src="https://randomuser.me/api/portraits/men/85.jpg"
                            alt="Instructor"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">David Chen</h3>
                    <p className="text-[#D93F0B] font-medium mb-4">Marketing Strategist</p>
                    <div className="flex items-center justify-center gap-1 text-orange-400 mb-6">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <span className="text-gray-400 text-sm ml-1">(4.8)</span>
                    </div>
                    <div className="flex justify-center gap-4 text-gray-400">
                        <FaLinkedin className="hover:text-[#D93F0B] cursor-pointer transition-colors" size={20} />
                        <FaTwitter className="hover:text-[#D93F0B] cursor-pointer transition-colors" size={20} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TopInstructors;