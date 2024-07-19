import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";

function Schedule({ title, schedule = [], theme = "dark" }) {
  // Determine which columns should be displayed based on the presence of data
  const hasLocation = schedule.some(item => item?.location);
  const hasDates = schedule.some(item => item?.dates);
  const hasTimings = schedule.some(item => item?.timings);
  const hasCourse = schedule.some(item => item?.course);
  const hasCamp = schedule.some(item => item?.camp);
  const hasSessions = schedule.some(item => item?.sessions);

  // Theme-based class names
  const cardClass =
    theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white";
  const headerClass = theme === "light" ? "bg-gray-200" : "bg-gray-700";
  const cellClass = theme === "light" ? "text-black" : "text-white";
  const hoverClass =
    theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700";

  return (
    <div className="sm:container mx-auto my-8">
      <Card className={cardClass}>
        <CardHeader>
          <CardTitle className="text-c_secondary-light tracking-wider">
            {title} Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="min-w-full divide-y divide-gray-700">
            <TableHeader>
              <TableRow className={headerClass}>
                {hasCamp && <TableHead className={cellClass}>Camp</TableHead>}
                {hasSessions && (
                  <TableHead className={cellClass}>Sessions</TableHead>
                )}
                {hasLocation && (
                  <TableHead className={cellClass}>Location</TableHead>
                )}
                {hasDates && <TableHead className={cellClass}>Dates</TableHead>}
                {hasTimings && (
                  <TableHead className={cellClass}>Timings</TableHead>
                )}
                {hasCourse && (
                  <TableHead className={cellClass}>Course</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((item, index) => (
                <TableRow key={index} className={`${hoverClass} ${cardClass}`}>
                  {hasCamp && (
                    <TableCell className={cellClass}>
                      {item?.camp || "-"}
                    </TableCell>
                  )}
                  {hasSessions && (
                    <TableCell className={cellClass}>
                      {item?.sessions !== undefined && item?.sessions !== -1
                        ? item.sessions
                        : "-"}
                    </TableCell>
                  )}
                  {hasLocation && (
                    <TableCell className={cellClass}>
                      {item?.location || "-"}
                    </TableCell>
                  )}
                  {hasDates && (
                    <TableCell className={cellClass}>
                      {item?.dates || "-"}
                    </TableCell>
                  )}
                  {hasTimings && (
                    <TableCell className={cellClass}>
                      {item?.timings || "-"}
                    </TableCell>
                  )}
                  {hasCourse && (
                    <TableCell className={cellClass}>
                      {item?.course || "-"}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Schedule;
