import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CourseDetails() {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/src/content/courses.json');
        const response = await data.json();
        const course = response.courses.find(
          course => course.id === parseInt(id)
        );
        setCourse(course);
      } catch (error) {
        console.error('Error fetching data:', error);
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
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Course Details
            </h3>
            <p className="text-sm text-gray-600 mb-4">{course?.description}</p>
            <div className="flex flex-wrap mb-4">
              <div className="w-full sm:w-1/2">
                <h4 className="text-gray-800 font-semibold">Timetable</h4>
                <p className="text-gray-600">{course?.timetable}</p>
              </div>
              <div className="w-full sm:w-1/2">
                <h4 className="text-gray-800 font-semibold">Age Requirement</h4>
                <p className="text-gray-600">{course?.age_requirement}</p>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-gray-800 font-semibold">What You Need</h4>
              <ul className="list-disc list-inside text-gray-600">
                {course?.what_you_need?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-gray-800 font-semibold">Prior Knowledge</h4>
              <p className="text-gray-600">{course?.prior_knowledge}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-gray-800 font-semibold">Location</h4>
              <a
                href={course?.location}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {course?.address}
              </a>
            </div>
            <div className="mb-4">
              <h4 className="text-gray-800 font-semibold">Price</h4>
              <p className="text-gray-600">Original Price: ${course?.price}</p>
              {course?.discount > 0 && (
                <p className="text-gray-600">Discount: {course?.discount}%</p>
              )}
              <p className="text-gray-600">
                Discounted Price: ${course?.discounted_price}
              </p>
            </div>
            <div>
              <h4 className="text-gray-800 font-semibold">Availability</h4>
              <p className="text-gray-600">{course?.availability} seats</p>
            </div>
          </div>

          <Link to={`/book/${course.id}`}>
            <Button variant="outline" className="mt-10 outline-button">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
