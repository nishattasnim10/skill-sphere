import React from 'react'
import Link from "next/link";

export const PopularCourses = async () => {
    const res = await fetch('https://skill-sphere-lac-rho.vercel.app/data.json');
    const data = await res.json();
    // console.log(data);

    const topRated = data.sort((a,b) => b.rating - a.rating).slice(0,3);
    console.log(topRated);

    return (
        <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">
                    Popular <span className="text-[#D93F0B]">Courses</span>
                </h2>
                <p className="text-slate-500">Top-rated programs picked just for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {topRated.map((course) =>{
                    const categoryColors ={
                        Development: "bg-blue-500/20 text-blue-400",
                        Design: "bg-purple-500/20 text-purple-400",
                        "Data Science": "bg-green-500/20 text-green-400",
                        Marketing: "bg-pink-500/20 text-pink-400",
                        "IT & Software": "bg-cyan-500/20 text-cyan-400",
                    };

                    const levelColors ={
                        Beginner: "border-green-500/50 text-green-500",
                        Intermediate: "border-yellow-500/50 text-yellow-500",
                        Advanced: "border-red-500/50 text-red-500",
                    };

                    return (
                        <div
                            key={course.id}
                            className="group bg-white rounded-[2rem] border border-slate-200 shadow-xl hover:border-[#D93F0B]/50 transition-all duration-500 overflow-hidden flex flex-col h-full"
                        >
                            {/*Image*/}
                            <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                />

                                {/* Rating badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md border border-slate-100">
                                    <span className="text-orange-400 text-sm font-bold">★</span>
                                    <span className="text-slate-900 text-sm font-bold">{course.rating}</span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    {/* Category*/}
                                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm ${categoryColors[course.category] || "bg-slate-700 text-slate-300"}`}>
                                        {course.category}
                                    </span>

                                    {/* Level*/}
                                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 border-2 rounded-lg ${levelColors[course.level] || "border-slate-300 text-slate-500"}`}>
                                        {course.level}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-[#D93F0B] transition-colors line-clamp-2 min-h-[3.5rem]">
                                    {course.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-6 flex items-center gap-2">
                                    by <span className="font-semibold text-slate-600">{course.instructor}</span>
                                </p>

                                {/*Button*/}
                                <div className="mt-auto">
                                    <Link href={`/all-courses/${course.id}`}>
                                        <button className="w-full py-4 rounded-2xl bg-[#D93F0B] text-white font-bold text-sm hover:bg-[#b33409] transition-all shadow-[0_10px_20px_rgba(217,63,11,0.2)] hover:shadow-none active:scale-95 uppercase tracking-wider">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );

}

export default PopularCourses;
