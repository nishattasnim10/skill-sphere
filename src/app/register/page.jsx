"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";


//     const handleGoogleLogin = () => {
//         // Logic for Google login
//         // On success: router.push("/")
//     };

export default function RegisterPage() {
const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
       

        const {data,error}= await authClient.signUp.email({ 
            name, 
            email, 
            image: photoURL, 
            password })

        console.log(data,error);

        if(!error){
            router.push('/')
        }
    }



    return (
        <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
            <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 p-10 border border-slate-100">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
                        Create <span className="text-[#D93F0B]">Account</span>
                    </h1>
                    <p className="text-slate-400 text-sm font-medium">Join SkillSphere today!</p>
                </div>

                {/* Error Message */}
                {/* {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-xl">
                        <p className="text-red-600 text-xs font-bold">{error}</p>
                    </div>
                )} */}

                {/* Form */}
                <form onSubmit={onSubmit}  className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D93F0B] focus:ring-0 transition-all outline-none text-slate-700 text-sm font-medium"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D93F0B] focus:ring-0 transition-all outline-none text-slate-700 text-sm font-medium"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Photo URL</label>
                        <input
                            name="photoURL"

                            type="url"
                            placeholder="https://image.link"
                            className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D93F0B] focus:ring-0 transition-all outline-none text-slate-700 text-sm font-medium"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#D93F0B] focus:ring-0 transition-all outline-none text-slate-700 text-sm font-medium"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-[#D93F0B] text-white font-bold text-sm shadow-xl shadow-orange-100 hover:bg-[#b33409] transition-all active:scale-95 mt-4"
                    >
                        Register Now
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-8">
                    <div className="flex-1 h-px bg-slate-100"></div>
                    <span className="px-4 text-slate-300 text-[10px] font-bold uppercase tracking-widest">Or continue with</span>
                    <div className="flex-1 h-px bg-slate-100"></div>
                </div>

                {/* Social Login */}
                <button
                    
                    className="w-full py-3.5 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center gap-3 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all mb-8"
                >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                    Sign up with Google
                </button>

                {/* Footer Link */}
                <p className="text-center text-slate-500 text-sm font-medium">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#D93F0B] font-bold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </main>
    );
};

// export default RegisterPage;