import React, { useEffect, useState } from "react";
import Schedule from "@/components/Schedule";

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const programsResponse = await fetch("/src/content/programs.json");
        const coursesResponse = await fetch("/src/content/courses.json");

        const programs = await programsResponse.json();
        const courses = await coursesResponse.json();

        // Extract schedule data from courses, excluding empty timetables
        const scheduleData = courses.courses
          .filter(course => Object.keys(course.timetable).length > 0)
          .map(course => ({
            location: course.timetable.location,
            dates: course.timetable.dates,
            timings: course.timetable.timings,
            course: course.title,
          }));

        setSchedules(scheduleData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <Schedule title="Summer Camps (July)" schedule={schedules} />
    </div>
  );
};

export default Schedules;
