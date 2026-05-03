import React from 'react'
import Link from "next/link";

export const PopularCourses = async () => {
    const res = await fetch('https://skill-sphere-lac-rho.vercel.app/data.json');
    const data = await res.json();
    // console.log(data);

    const topRated = data.sort((a,b) => b.rating - a.rating).slice(0,3);
    console.log(topRated);



    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Popular <span className="text-[#D93F0B]">Courses</span>
                </h2>
                <p className="text-gray-500">Top-rated programs picked just for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {topRated.map((course) => (
                    <div
                        key={course.id}
                        className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        {/* Course Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                <span className="text-orange-500 text-sm font-bold">★</span>
                                <span className="text-gray-800 text-sm font-bold">{course.rating}</span>
                            </div>
                        </div>

                        {/* Course Details */}
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-orange-50 text-[#D93F0B] rounded-md">
                                    {course.category}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-50 text-gray-500 rounded-md">
                                    {course.level}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-[#D93F0B] transition-colors">
                                {course.title}
                            </h3>

                            <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                                by <span className="font-medium text-gray-700">{course.instructor}</span>
                            </p>

                            {/* View Details Button */}
                            <Link href={`/courses/${course.id}`}>
                                <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-800 font-bold hover:bg-[#D93F0B] hover:text-white transition-all active:scale-95 border border-gray-100 hover:border-[#D93F0B]">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

}

export default PopularCourses;
