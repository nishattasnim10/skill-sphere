import Image from "next/image";
import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import { PopularCourses } from "@/components/PopularCourses";


export default function Home() {
  return (
    <div className="">

      <Banner />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      
    </div>
  );
}
