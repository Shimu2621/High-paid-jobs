"use client";

import { useState } from "react";
import { Briefcase, Calculator, Check, GraduationCap } from "lucide-react";
import Container from "@/utils/container/Container";

const CareerPath = () => {
  const [selected, setSelected] = useState("Job Assessment");

  const careerOptions: { [key: string]: string[] } = {
    "Job Assessment": [
      "30 to 120 min interview",
      "40 to 70 local recruiter access",
      "Salary negotiation blueprint",
      "Probation period hacks",
      "Provided recording with details report",
      "Help revamp the resume and tailoring for each job needs.",
    ],
    "Job Placement": [
      "Everything in Job Assessment + Placement",
      "One-on-one instruction",
      "Hands-on real-world projects",
      "Optional 400-hour internship",
      "Industry mentor matching",
      "Portfolio development",
      "Lifetime access to materials",
    ],
    "Job Prep": [
      "Everything in Job Assessment",
      "Access to 500+ active recruiters",
      "Complete support during interviews",
      "Sure job offer within 10 interviews",
      "Help renegotiate salary by $10k",
      "Complete support during probation period",
      "Lifetime access to materials",
    ],
  };

  return (
    <div className="py-10 px-6 bg-secondary text-center">
      <Container>
        {/* Title and Subtitle */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-title font-bold mb-2">
            Choose Your Path to Land Your Dream Job
          </h2>
          <p className="text-xs text-subtitle mb-6">
            Select the career path that aligns with your goals and unlock your
            professional
            <br /> potential
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-8">
          {/* Left Section - Career Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-md">
            {Object.keys(careerOptions).map((path) => (
              <div
                key={path}
                onMouseEnter={() => setSelected(path)}
                className={`w-[200px] gap-3 overflow-hidden px-2 py-4 border rounded-lg shadow-sm text-sm font-medium transition-all duration-300 ${
                  selected === path
                    ? "border-background text-title"
                    : "border-gray-600 text-title"
                }`}
              >
                <div className="flex items-center gap-3 w-full">
                  {path === "Job Assessment" && (
                    <Briefcase
                      className={`w-4 h-4 ${
                        selected === path ? "text-blue-600" : "text-gray-600"
                      }`}
                    />
                  )}
                  {path === "Job Placement" && (
                    <Calculator
                      className={`w-5 h-5 ${
                        selected === path ? "text-blue-600" : "text-gray-600"
                      }`}
                    />
                  )}
                  {path === "Job Prep" && (
                    <GraduationCap
                      className={`w-5 h-5 ${
                        selected === path ? "text-blue-600" : "text-gray-600"
                      }`}
                    />
                  )}
                  <span>{path}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Options */}
          <div className="w-full max-w-3xl border rounded-lg p-6 shadow-lg">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {careerOptions[selected].map((option, index) => (
                <li
                  key={index}
                  className="flex items-start gap-1 p-2 text-subtitle  rounded-md"
                >
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="flex-1 text-sm ">{option}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                const formSection = document.getElementById("career-form");
                formSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-6 rounded-md !px-4 py-2 bg-background text-xs font-semibold !text-text-white hover:bg-[#1D4ED8]"
            >
              Get Started →
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareerPath;
