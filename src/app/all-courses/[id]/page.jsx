import React from 'react'

const CourseDetailsPage = async ({params}) => {
    const {id} = await params;
    // console.log(id);

    const res = await fetch('https://skill-sphere-lac-rho.vercel.app/data.json');
    const data = await res.json();
    // console.log(data);

    const course = data.find(course => course.id == id);
    console.log(course);

    const categoryColors ={
        Development: "bg-blue-500/20 text-blue-400",
        Design: "bg-purple-500/20 text-purple-400",
        "Data Science": "bg-green-500/20 text-green-400",
        Marketing: "bg-pink-500/20 text-pink-400",
        "IT & Software": "bg-cyan-500/20 text-cyan-400",
    };

    const levelColors ={
        Beginner: "border-green-500/50 text-green-500",
        Intermediate:"border-yellow-500/50 text-yellow-500",
        Advanced: "border-red-500/50 text-red-500",
    };


    return (
        <main className="min-h-screen bg-white">
            {/* Hero section */}
            <section className="bg-slate-900 text-white py-12 md:py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg ${categoryColors[course.category] || "bg-slate-800 text-slate-300"}`}>
                                {course.category}
                            </span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 border rounded-lg ${levelColors[course.level] || "border-slate-700 text-slate-400"}`}>
                                {course.level}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-slate-400 text-lg mb-8 max-w-xl">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-400 font-bold text-xl">★ {course.rating}</span>
                            </div>
                            <div className="text-slate-300 text-sm border-l border-slate-700 pl-6">
                                Instructor: <span className="font-semibold text-white">{course.instructor}</span>
                            </div>
                            <div className="text-slate-300 text-sm border-l border-slate-700 pl-6">
                                Duration: <span className="font-semibold text-white">{course.duration}</span>
                            </div>
                        </div>
                    </div>

                    {/*Image*/}
                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-video rounded-[2rem] overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-800">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/*Curriculum*/}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left*/}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Course Curriculum</h2>
                        <div className="space-y-4">
                            {[
                                { title: "Introduction to the Course", time: "01:45:00" },
                                { title: "Core Principles and Workflows", time: "03:20:00" },
                                { title: "Building Practical Projects", time: "06:10:00" },
                                { title: "Advanced Optimization Techniques", time: "04:50:00" },
                                { title: "Final Deployment and Assessment", time: "02:15:00" },

                            ].map((item, index) =>(
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-200 transition-all group"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="text-2xl font-black text-orange-200 group-hover:text-orange-200 transition-colors">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <p className="font-bold text-slate-700 text-lg group-hover:text-slate-900">{item.title}</p>
                                    </div>
                                    <div className="mt-4 sm:mt-0 px-4 py-1.5 bg-white rounded-xl border border-orange-200 text-slate-400 font-bold text-xs shadow-sm self-start sm:self-center">
                                        {item.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*Right*/}
                    <div className="lg:col-span-1">
                        <div className="sticky top-10 bg-gray-50 p-10 rounded-[2.5rem] border-2 border-gray-100 shadow-2xl shadow-slate-200/50">
                            <div className="mb-8">
                                <p className="text-slate-400 uppercase tracking-widest font-black text-[10px] mb-4">Enrollment Includes:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Access on all devices",
                                        "Certificate of Completion",
                                        "Downloadable resources",
                                        "Direct instructor Q&A"
                                    ].map((perk, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">✓</div>
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-full py-4 rounded-2xl bg-[#D93F0B] text-white font-black text-lg hover:bg-[#b33409] transition-all shadow-xl shadow-orange-200 active:scale-95 cursor-pointer">
                                Enroll Now
                            </button>

                            <p className="mt-6 text-center text-slate-400 text-xs font-medium">
                                Join 5,000+ students already learning
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default CourseDetailsPage