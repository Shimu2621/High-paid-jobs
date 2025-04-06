"use client";

import { Button } from "@/components/ui/button";
import Container from "@/utils/container/Container";
import { Check, ChevronRight, X } from "lucide-react";
import Image from "next/image";

import React from "react";

const ChooseUs = () => {
  return (
    <div className="px-4 py-8 lg:py-12 bg-secondary">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-title font-bold">
            Why Choose Us Over Others?
          </h2>
          <p className="text-xs lg:text-sm text-subtitle mb-4">
            See how our program delivers results where others fall short
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto">
          {/* Card 1 - Guaranteed Job Placement */}
          <div className="bg-white rounded-lg shadow-sm  overflow-hidden ">
            <div className="p-4 flex flex-col flex-grow">
              <div className="w-12 h-12">
                <Image
                  src="/icons/check-mark.png"
                  alt="check-mark"
                  width={53}
                  height={60}
                  className="w-6 lg:w-10 h-6 lg:h-10"
                />
              </div>
              <div className="text-start ">
                <h3 className="text-sm text-title font-semibold mb-1">
                  Guaranteed Job Placement
                </h3>
                <p className="text-xs mb-4 text-subtitle">
                  We guarantee you&rsquo;ll get hired or we keep working with
                  you for free
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-off-white py-2 px-3 text-center border shadow text-xs font-semibold">
                  HighPaidJobs
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-blue-600  rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-off-white border shadow py-2 px-3 text-center text-xs font-semibold">
                  Others
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-60 mx-auto" />
            <div className=" p-4">
              <div className="bg-blue-100 dark:bg-[#5C5958] text-start font-semibold text-text-blue shadow text-[8px] md:text-[10px] p-2 w-full rounded">
                99.99% success rate within 8-16 weeks
              </div>
            </div>
          </div>

          {/* Card 2 - Hyper Personalized Coaching */}
          <div className="bg-white rounded-lg shadow-sm  overflow-hidden">
            <div className="p-4 flex flex-col justify-between">
              <div className="w-12 h-12">
                <Image
                  src="/icons/computer.png"
                  alt="check-mark"
                  width={53}
                  height={60}
                  className="w-6 lg:w-10 h-6 lg:h-10"
                />
              </div>
              <h3 className="text-sm text-title font-semibold mb-2">
                Hyper Personalized Coaching
              </h3>
              <p className="text-xs text-subtitle mb-4">
                One-on-one instruction tailored to your learning style
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-off-white py-2 px-3 text-center border shadow text-xs font-semibold">
                  HighPaidJobs
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-blue-600 border shadow  rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-off-white border shadow py-2 px-3 text-center text-xs font-semibold">
                  Others
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-60 mx-auto" />
            <div className=" p-4">
              <div className="bg-blue-100 dark:bg-[#5C5958] text-start font-semibold text-text-blue shadow text-[8px] md:text-[10px] p-2 w-full rounded">
                Dedicated mentor throughout your journey
              </div>
            </div>
          </div>

          {/* Card 3 - Interview Support */}
          <div className="bg-white rounded-lg shadow-sm  overflow-hidden">
            <div className="p-4 flex flex-col justify-between">
              <div className="w-12 h-12">
                <Image
                  src="/icons/mentor.png"
                  alt="check-mark"
                  width={53}
                  height={60}
                  className="w-6 lg:w-10 h-6 lg:h-10"
                />
              </div>
              <h3 className="text-sm text-title font-semibold mb-2">
                Interview Support
              </h3>
              <p className="text-xs text-subtitle mb-4">
                Expert guidance during the entire interview process
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-off-white py-2 px-3 text-center border shadow text-xs font-semibold">
                  HighPaidJobs
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-off-white border shadow py-2 px-3 text-center text-xs font-semibold">
                  Others
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-60 mx-auto" />
            <div className=" p-4">
              <div className="bg-blue-100 dark:bg-[#5C5958] text-start font-semibold text-text-blue shadow text-[8px] md:text-[10px] p-2 w-full rounded">
                We join your interviews to help you succeed
              </div>
            </div>
          </div>

          {/* Card 4 - Post-Hire Support */}
          <div className="bg-white rounded-lg shadow-sm  overflow-hidden">
            <div className="p-4 flex flex-col justify-between">
              <div className="w-12 h-12 ">
                <Image
                  src="/icons/user-badge.png"
                  alt="check-mark"
                  width={53}
                  height={60}
                  className="w-6 lg:w-10 h-6 lg:h-10"
                />
              </div>
              <h3 className="text-sm text-title font-semibold mb-2">
                Post-Hire Support
              </h3>
              <p className="text-xs text-subtitle mb-4">
                Continued assistance after you land your job from market
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-off-white py-2 px-3 text-center border shadow text-xs font-semibold">
                  HighPaidJobs
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-off-white border shadow py-2 px-3 text-center text-xs font-semibold">
                  Others
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-60 mx-auto" />
            <div className=" p-4">
              <div className="bg-blue-100 dark:bg-[#5C5958] text-start font-semibold text-text-blue shadow text-[8px] md:text-[10px] p-2 w-full rounded">
                Full support during probation period to help you
              </div>
            </div>
          </div>

          {/* Card 5 - Decided Salary Renegotiation */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 flex flex-col justify-between">
              <div className="w-12 h-12">
                <Image
                  src="/icons/money-bag.png"
                  alt="check-mark"
                  width={53}
                  height={60}
                  className="w-6 lg:w-10 h-6 lg:h-10"
                />
              </div>
              <h3 className="text-sm text-title font-semibold mb-2">
                Decided Salary Renegotiation
              </h3>
              <p className="text-xs text-subtitle mb-4">
                Expert techniques to maximize your compensation
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-off-white py-2 px-3 text-center border shadow text-xs font-semibold">
                  HighPaidJobs
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-off-white border shadow py-2 px-3 text-center text-xs font-semibold">
                  Others
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-60 mx-auto" />
            <div className=" p-4">
              <div className="bg-blue-100 dark:bg-[#5C5958] text-start font-semibold text-text-blue shadow text-[8px] md:text-[10px] p-2 w-full rounded">
                Average $5-10k increase in offers
              </div>
            </div>
          </div>

          {/* Card 6 - 100% Money-Back Guarantee */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 flex flex-col justify-between">
              <div className="w-12 h-12 ">
                <Image
                  src="/icons/lock.png"
                  alt="check-mark"
                  width={53}
                  height={60}
                  className="w-6 lg:w-10 h-6 lg:h-10"
                />
              </div>
              <h3 className="text-sm text-title font-semibold mb-2">
                100% Money-Back Guarantee
              </h3>
              <p className="text-xs text-subtitle mb-4">
                15 day money-back guarantee: a risk-free investment!
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-off-white py-2 px-3 text-center border shadow text-xs font-semibold ">
                  HighPaidJobs
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-off-white border shadow py-2 px-3 text-center text-xs font-semibold">
                  Others
                  <div className="flex justify-center mt-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="w-60 mx-auto" />
            <div className=" p-4">
              <div className="bg-blue-100 dark:bg-[#5C5958] text-start font-semibold text-text-blue  shadow text-[8px] md:text-[10px] p-2 w-full rounded">
                15-day unconditional guarantee
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-sm font-medium">
            Ready to experience the HighPaidJobs difference?
          </h3>
          <div className="flex justify-center mt-2">
            <Button
              onClick={() => {
                const formSection = document.getElementById("career-form");
                formSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-4xl !px-3 py-3 bg-background text-xs font-semibold !text-text-white hover:bg-[#1D4ED8]"
            >
              Book Free Consultation
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
