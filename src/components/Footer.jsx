"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Logo & About */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Skill<span className="text-[#D93F0B]">Sphere</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed">
                            Empowering learners worldwide with industry-leading courses and expert-led mentorship.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-5">Explore</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><Link href="/courses" className="hover:text-[#D93F0B] transition-colors">All Courses</Link></li>
                            <li><Link href="/mentors" className="hover:text-[#D93F0B] transition-colors">Our Mentors</Link></li>
                            <li><Link href="/pricing" className="hover:text-[#D93F0B] transition-colors">Pricing Plans</Link></li>
                            <li><Link href="/blog" className="hover:text-[#D93F0B] transition-colors">Success Stories</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-5">Contact Info</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-center gap-2">📍 Dhaka, Bangladesh</li>
                            <li className="flex items-center gap-2">📧 support@skillsphere.com</li>
                            <li className="flex items-center gap-2">📞 +880 1234-567890</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-5">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#D93F0B] hover:border-[#D93F0B] transition-all shadow-sm active:scale-90">
                                <FaFacebook size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#D93F0B] hover:border-[#D93F0B] transition-all shadow-sm active:scale-90">
                                <FaTwitter size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#D93F0B] hover:border-[#D93F0B] transition-all shadow-sm active:scale-90">
                                <FaLinkedin size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#D93F0B] hover:border-[#D93F0B] transition-all shadow-sm active:scale-90">
                                <FaInstagram size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Custom Divider - Problem Solved */}
                <div className="my-10 w-full h-[1px] bg-gray-200" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/terms" className="hover:text-[#D93F0B] transition-colors underline-offset-4 hover:underline">
                            Terms & Conditions
                        </Link>
                        <Link href="/privacy" className="hover:text-[#D93F0B] transition-colors underline-offset-4 hover:underline">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;