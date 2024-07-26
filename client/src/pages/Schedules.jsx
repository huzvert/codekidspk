import React, { useEffect, useState, useRef } from "react";
import Schedule from "@/components/Schedule";
import { ChevronDown, Check } from "lucide-react";
import { getTodayDateAndMonth } from "@/lib/utils"

export default function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [filteredSchedules, setFilteredSchedules] = useState([]);
  const [camps, setCamps] = useState([]);
  const [locations, setLocations] = useState([]);
  const [months, setMonths] = useState([]);

  const monthMapping = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

  const normalizeMonth = dateStr => {
    const monthAbbreviation = dateStr.substring(0, 3);
    return monthMapping[monthAbbreviation] || dateStr;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await fetch("/content/courses.json");
        const courses = await coursesResponse.json();

        const {date: currDate, month: currMonth} = getTodayDateAndMonth();
        
        // Extract schedule data from courses, excluding empty timetables
        const scheduleData = courses.courses
          .filter(course => course.timetables.length > 0)
          .map(course =>
            course.timetables
            .filter(timetable => timetable.end_month > currMonth || (timetable.end_month == currMonth && timetable.end_date >= currDate))
            .map(timetable => ({
              camp: timetable.camp,
              sessions: timetable.sessions,
              location: timetable.location,
              dates: timetable.dates,
              timings: timetable.timings,
              course: course.title,
            }))
          )
          .flat();

        setSchedules(scheduleData);

        // Use a Set to ensure unique locations
        const locationSet = new Set();

        scheduleData.forEach(schedule => {
          if (schedule.location) {
            locationSet.add(schedule.location);
          }
        });
        const uniqueLocations = Array.from(locationSet).map(location => ({
          location,
          selected: false,
        }));
        setLocations(uniqueLocations);

        // Extract unique camps from all timetables
        const uniqueCamps = new Set();
        courses.courses.forEach(course => {
          course.timetables
            .filter(timetable => timetable.end_month > currMonth || (timetable.end_month == currMonth && timetable.end_date >= currDate))
            .forEach(timetable => {
            uniqueCamps.add(timetable.camp);
          });
        });
        setCamps(Array.from(uniqueCamps));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filteredSchedules = [...schedules];

    // Filter schedules by selected months
    if (months.length > 0) {
      filteredSchedules = filteredSchedules.filter(schedule =>
        months.some(month =>
          normalizeMonth(schedule.dates)
            .toLowerCase()
            .includes(month.toLowerCase())
        )
      );
    }

    // Filter schedules by selected locations
    if (locations.some(location => location.selected)) {
      filteredSchedules = filteredSchedules.filter(schedule =>
        locations.find(
          location =>
            location.location === schedule.location && location.selected
        )
      );
    }

    if (
      months.length === 0 &&
      locations.every(location => !location.selected)
    ) {
      setFilteredSchedules([]);
    } else {
      setFilteredSchedules(filteredSchedules);
    }
  }, [locations, months]);

  return (
    <div className="container mx-auto my-8 space-y-10">
      <div className="max-w-lg">
        <FilterByMonths
          options={months}
          onSelectChange={selected => setMonths(selected)}
        />
      </div>
      <div className="max-w-xl">
        <FilterByLocations locations={locations} setLocations={setLocations} />
      </div>
      <div className="lg:container mx-auto py-8">
        {filteredSchedules.length > 0 || months.length ? (
          <Schedule title="Filtered" schedule={filteredSchedules} />
        ) : (
          <ul>
            {camps.map((camp, index) => (
              <div key={index}>
                <Schedule
                  title={camp}
                  schedule={schedules.filter(
                    schedule => schedule.camp === camp
                  )}
                />
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function FilterByLocations({ locations, setLocations }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
        Filter by Location
      </h2>
      <div className="flex gap-4 flex-wrap">
        {locations.map(location => (
          <button
            key={location.location}
            className={`${
              location.selected ? "bg-c_accent text-white" : "bg-gray-200"
            } px-4 py-2 rounded`}
            onClick={() => {
              setLocations(
                locations.map(loc =>
                  loc.location === location.location
                    ? { ...loc, selected: !loc.selected }
                    : loc
                )
              );
            }}
          >
            {location.location}
          </button>
        ))}
      </div>
    </div>
  );
}

function FilterByMonths({ onSelectChange }) {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    onSelectChange(selected);
  }, [selected]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
        Filter by Month
      </h2>
      <div
        ref={dropdownRef}
        className="relative w-full max-w-xs md:max-w-md lg:max-w-none"
      >
        <div
          className="flex h-auto border-[1.3px] border-black items-center justify-between px-4 py-[16px] rounded-lg cursor-pointer bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-sm">
            {selected.length > 0 ? (
              <span className="flex items-center gap-2  flex-wrap">
                {selected.map((item, index) => (
                  <span
                    key={index}
                    className="bg-c_accent text-white px-2 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </span>
            ) : (
              <span className="text-gray-500">Filter by Months</span>
            )}
          </span>
          <span>
            <ChevronDown
              size={15}
              className={isOpen ? "transform rotate-180" : ""}
            />
          </span>
        </div>

        {isOpen && (
          <ul className="absolute w-full mt-2 bg-white shadow-lg border rounded-lg py-4 z-10">
            {options.map((option, index) => (
              <li
                key={index}
                className="list-none flex cursor-pointer items-center py-2 px-4 hover:bg-gray-100"
                onClick={() =>
                  setSelected(
                    selected.includes(option)
                      ? selected.filter(item => item !== option)
                      : [...selected, option]
                  )
                }
              >
                <span className="flex items-center justify-center w-[16px] h-[16px] rounded-[4px] mr-[12px] border">
                  {selected.includes(option) && <Check size={12} />}
                </span>
                <span className="text-[16px] list-none items-center">
                  {option}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
