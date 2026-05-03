import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-6">
            <div className="bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-3xl shadow-2xl overflow-hidden">

                <div className="w-full h-full bg-black/40 flex items-center">
                    <div className="px-8 md:px-16 text-white">

                        <span className="inline-block px-4 py-1 rounded-full bg-[#D93F0B]/20 text-[#ff7d50] backdrop-blur-md border border-[#D93F0B]/30 text-sm font-semibold mb-4">
                            Upgrade Your Skills Today 
                        </span>

                        <h1 className="text-4xl md:text-7xl font-bold mb-6 max-w-3xl leading-tight">
                            Learn from <span className="text-[#D93F0B]">Industry Experts</span>
                        </h1>

                        <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-200">
                            Master Web Development, Design, and Marketing with high-quality video lessons and hands-on projects.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/courses">
                                <Button
                                    size="lg"
                                    className="bg-[#D93F0B] text-white font-bold px-8 shadow-lg hover:bg-[#B33409] transition-all"
                                >
                                    Explore Courses
                                </Button>
                            </Link>

                            <Link href="/register">
                                <Button
                                    size="lg"
                                    variant="bordered"
                                    className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm font-bold px-8"
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;