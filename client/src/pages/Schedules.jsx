import React, { useEffect, useState } from "react";
import Schedule from "@/components/Schedule";

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await fetch("/src/content/courses.json");
        const courses = await coursesResponse.json();

        // Extract schedule data from courses, excluding empty timetables
        const scheduleData = courses.courses
          .filter(course => course.timetables.length > 0)
          .map(course =>
            course.timetables.map(timetable => ({
              location: timetable.location,
              dates: timetable.dates,
              timings: timetable.timings,
              course: course.title,
            }))
          )
          .flat();

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
