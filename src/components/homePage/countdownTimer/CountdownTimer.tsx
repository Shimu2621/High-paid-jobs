"use client";

import Container from "@/utils/container/Container";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 15,
    minutes: 37,
    seconds: 24,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        // Calculate new time
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Timer complete
                clearInterval(timer);
                return prevTime;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white px-4 py-12 text-center">
      <Container>
        <h1 className="text-xl md:text-2xl font-bold text-title mb-6">
          Door Closes for FREE Career Auditing
        </h1>

        <div className="flex justify-center text-title gap-2 md:gap-4">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* <div className="mt-6 border-t border-gray-200 w-full"></div> */}
      </Container>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  // Ensure the value is always displayed with two digits
  const displayValue = value < 10 ? `0${value}` : value.toString();

  return (
    <div className="bg-red-600 text-white rounded  md:p-1 min-w-[60px] md:min-w-[80px] min-h-[60px] md:min-h-[70px]">
      <div className="text-2xl md:text-5xl font-bold">{displayValue}</div>
      <div className="text-xs md:text-xs mt-1">{label}</div>
    </div>
  );
}
