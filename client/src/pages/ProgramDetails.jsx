import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SkeletonCard from "@/components/SkeletonCard";
import AddToCart from "@/components/AddToCart";
import { Link } from "react-router-dom";

export default function ProgramDetails() {
  const [program, setProgram] = useState([]);
  const [courses, setCourses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/src/content/programs.json");
        const response = await data.json();
        const program = response.programs.find(program => program.id == id);
        setProgram(program);

        const courseIds = program?.courses || [];
        const coursesData = await fetch("/src/content/courses.json");
        const coursesResponse = await coursesData.json();
        const courses = coursesResponse.courses.filter(course =>
          courseIds.includes(course.id)
        );

        setCourses(courses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main>
      <section className="relative">
        {/* Background Image and overlay*/}
        <div
          className="absolute inset-0 -mx-4 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(/${program.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white flex flex-col justify-items-center items-center">
          <h2 className="relative inline-block text-3xl sm:text-6xl">
            {program.title}
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
          </h2>
          <p className="text-white mt-6 mb-12 max-w-3xl mx-auto">
            {program.description}
          </p>
        </div>
      </section>

      <section className="space-y-5 2xl:max-w-[1440px] 2xl:mx-auto">
        {courses.length === 0 ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          courses.map(course => <CourseCard key={course.id} course={course} />)
        )}
      </section>
    </main>
  );
}

function CourseCard({ course }) {
  return (
    <div className="border flex flex-col sm:flex-row">
      <img
        src={`/${course.coverImage}`}
        alt={course.title}
        className="object-cover sm:w-[300px] sm:h-[200px]"
      />
      <div className="flex flex-col flex-grow p-3">
        <div className="flex-grow">
          <p className="text-xl md:text-3xl text-black mb-3">{course.title}</p>
          {course.description.length > 100 ? (
            <p>{course.description.substring(0, 350)}...</p>
          ) : (
            <p>{course.description}</p>
          )}
        </div>

        <div className="font-bold mt-3 underline">
          Price: <span className="text-c_accent"> PKR {course.price}/- </span>
        </div>

        <div className="mt-auto space-x-5">
          <Link to={`/programs/course/${course.id}`}>
            <Button variant="outline" className="mt-10 outline-button">
              View Details
            </Button>
          </Link>

          <AddToCart course={course} />
        </div>
      </div>
    </div>
  );
}
