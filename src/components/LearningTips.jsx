"use client";
import { FaBrain, FaClock, FaCheckCircle, FaLaptopCode } from "react-icons/fa";

const LearningTips = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
            {/*Header */}
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Boost Your <span className="text-[#D93F0B]">Learning Efficiency</span>
                </h2>
                {/* <div className="h-1.5 w-24 bg-[#D93F0B] rounded-full mb-6"></div> */}
                <p className="text-gray-500 max-w-2xl text-lg">
                    Mastering a new skill is easier when you have the right strategy.
                    Follow these expert-backed tips to stay ahead.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Study techniques */}
                <div className="p-8 rounded-3xl border border-gray-100 shadow-lg bg-orange-50/30 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-[#D93F0B] text-white rounded-2xl shadow-orange-200 shadow-lg">
                            <FaBrain size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Study Techniques</h3>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <FaCheckCircle className="text-[#D93F0B] mt-1 shrink-0" />
                            <p className="text-gray-700 font-medium">Active Recall: <span className="text-gray-500 font-normal">Don't just read. Test yourself frequently to strengthen your memory.</span></p>
                        </li>
                        <li className="flex gap-3">
                            <FaCheckCircle className="text-[#D93F0B] mt-1 shrink-0" />
                            <p className="text-gray-700 font-medium">Feynman Technique: <span className="text-gray-500 font-normal">Explain a concept to a child. If you can't explain it simply, you don't understand it yet.</span></p>
                        </li>
                        <li className="flex gap-3">
                            <FaCheckCircle className="text-[#D93F0B] mt-1 shrink-0" />
                            <p className="text-gray-700 font-medium">Spaced Repetition: <span className="text-gray-500 font-normal">Review your lessons at increasing intervals to prevent forgetting.</span></p>
                        </li>
                    </ul>
                </div>

                {/* Time management */}
                <div className="p-8 rounded-3xl border border-gray-100 shadow-lg bg-blue-50/40 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-gray-800 text-white rounded-2xl shadow-blue-200 shadow-lg">
                            <FaClock size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Time Management</h3>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <FaCheckCircle className="text-gray-800 mt-1 shrink-0" />
                            <p className="text-gray-700 font-medium">Pomodoro Timer: <span className="text-gray-500 font-normal">Work for 25 minutes, then take a 5-minute break. It keeps your brain sharp.</span></p>
                        </li>
                        <li className="flex gap-3">
                            <FaCheckCircle className="text-gray-800 mt-1 shrink-0" />
                            <p className="text-gray-700 font-medium">Eat the Frog: <span className="text-gray-500 font-normal">Complete your hardest and most important task first thing in the morning.</span></p>
                        </li>
                        <li className="flex gap-3">
                            <FaCheckCircle className="text-gray-800 mt-1 shrink-0" />
                            <p className="text-gray-700 font-medium">Batch Processing: <span className="text-gray-500 font-normal">Group similar tasks together to avoid constant mental context switching.</span></p>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="mt-12 p-8 bg-gray-900 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="flex items-center gap-4 text-white z-10">
                    <div className="p-3 bg-white/10 rounded-full backdrop-blur-md">
                        <FaLaptopCode className="text-[#D93F0B] text-3xl" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl">Ready to practice?</h4>
                        <p className="text-gray-400">Apply these techniques in your next lesson.</p>
                    </div>
                </div>
                <button className="bg-[#D93F0B] text-white px-10 py-3 rounded-full font-bold hover:bg-[#B33409] transition-all z-10 active:scale-95 shadow-lg shadow-orange-900/20">
                    Start Learning
                </button>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D93F0B]/10 blur-[60px] rounded-full"></div>
            </div>
        </section>
    );
};

export default LearningTips;