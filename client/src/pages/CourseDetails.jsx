import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "@/components/AddToCart";
import Schedule from "@/components/Schedule";

export default function CourseDetails() {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/src/content/courses.json");
        const response = await data.json();
        const course = response.courses.find(
          course => course.id === parseInt(id)
        );
        setCourse(course);
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
          style={{ backgroundImage: `url(/${course?.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white flex flex-col justify-items-center items-center">
          <h2 className="relative inline-block text-3xl sm:text-6xl">
            {course?.title}
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
          </h2>
        </div>
      </section>

      <section className="mt-8 mx-auto max-w-4xl px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-6 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Course Details
          </h3>
          <p className="text-sm text-gray-600 mb-4">{course?.description}</p>

          {
            <Schedule
              title={course?.title}
              theme="light"
              schedule={course?.timetables}
            />
          }

          <div className="mb-4">
            <h4 className="text-gray-800 font-semibold">Mode of Study</h4>
            <p className="text-gray-600">{course?.mode}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-gray-800 font-semibold">Price</h4>
            <p className="text-gray-600">
              Original Price: PKR {course?.price}/-{" "}
            </p>
            {course?.discount > 0 && (
              <p className="text-gray-600">Discount: {course?.discount}%</p>
            )}
            <p className="text-gray-600">
              Discounted Price: PKR {course?.discounted_price}/-
            </p>
          </div>

          <AddToCart course={course} />
        </div>
      </section>
    </main>
  );
}
