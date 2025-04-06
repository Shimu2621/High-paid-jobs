"use client";

import { Button } from "@/components/ui/button";
import Container from "@/utils/container/Container";
import { Check, ChevronRight } from "lucide-react";

export default function HighPayCareer() {
  return (
    <section className="px-4 bg-white py-8 lg:py-12">
      <Container>
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl lg:text-2xl text-title font-bold mb-1">
            Your path to a High-Paying career
          </h2>
          <p className="text-xs text-subtitle mb-6">
            Follow our proven step-by-step process to land your dream job
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_400px] gap-8">
          {/* Left side - Career Path Steps */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[12px] top-[20px] bottom-26 border-l-2 border-dashed border-gray-200"></div>

            {/* Step 1 */}
            <div className="flex gap-6 mb-8 relative">
              <div className="bg-color-circle rounded-full h-6 w-6 flex items-center justify-center text-text-blue font-semibold text-xs z-10">
                01
              </div>
              <div>
                <h3 className="text-sm font-semibold text-title">
                  Pick Your Plan
                </h3>
                <p className="text-subtitle text-xs mt-1">
                  Find out options among them: Placement, assessment, guidance,
                  <br />
                  technical coaching, quick refine and placement.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 mb-8 relative">
              <div className="bg-color-circle rounded-full h-6 w-6 flex items-center justify-center text-text-blue font-semibold text-xs z-10">
                02
              </div>
              <div>
                <h3 className="text-sm font-semibold text-title">
                  Your Career Assessment
                </h3>
                <p className="text-subtitle text-xs mt-1">
                  Get one-on-one coaching and assessment until your placement
                  <br /> in confirmed in 8 to 12 weeks.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 mb-8 relative">
              <div className="bg-color-circle rounded-full h-6 w-6 flex items-center justify-center text-text-blue font-semibold text-xs z-10">
                03
              </div>
              <div>
                <h3 className="text-sm font-semibold text-title">
                  Access 500+ Active Recruiters
                </h3>
                <p className="text-subtitle text-xs mt-1">
                  We&rsquo;ll review your resume, connect you with recruiters,
                  and
                  <br /> prepare you for interviews.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 mb-8 relative">
              <div className="bg-color-circle rounded-full h-6 w-6 flex items-center justify-center text-text-blue font-semibold text-xs z-10">
                04
              </div>
              <div>
                <h3 className="text-sm font-semibold text-title">
                  Ready Job Offer within 10 Interviews
                </h3>
                <p className="text-subtitle text-xs mt-1">
                  Our 500+ active recruiters will help you land multiple job
                  <br />
                  offers within the first 10 interviews.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 mb-8 relative">
              <div className="bg-color-circle rounded-full h-6 w-6 flex items-center justify-center text-text-blue font-semibold text-xs z-10">
                05
              </div>
              <div>
                <h3 className="text-sm font-semibold text-title">
                  Renegotiation for Extra $10k
                </h3>
                <p className="text-subtitle text-xs mt-1">
                  When your final salary is decided, we will step in to
                  <br />
                  renegotiate get you extra $10k.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6 mb-12 relative">
              <div className="bg-color-circle rounded-full h-6 w-6 flex items-center justify-center text-text-blue font-semibold text-xs z-10">
                06
              </div>
              <div>
                <h3 className="text-md font-semibold text-title">
                  Support During Probation Period
                </h3>
                <p className="text-subtitle text-xs mt-1">
                  Receive full support during your probation period to <br />
                  ensure your success.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Job Tracks */}
          <div className="border border-background rounded-lg w-full lg:w-[350px] h-full   overflow-hidden">
            <div className="bg-background text-text-white py-3 px-4 font-semibold text-md">
              Job Prep Tracks
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* Track items */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-5 w-5 bg-green-100 rounded-full border border-blue-700 flex items-center justify-center text-blue-700">
                    <Check size={13} />
                  </div>
                  <span className="text-title text-sm font-medium">
                    CloudOps/DevOps (AWS)
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-5 w-5 bg-green-100 rounded-full border border-blue-700 flex items-center justify-center text-blue-700">
                    <Check size={13} />
                  </div>
                  <span className="text-title text-sm font-medium">
                    Full-Stack Web/Mobile (MERN)
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-5 w-5 bg-green-100 rounded-full border border-blue-700 flex items-center justify-center text-blue-700">
                    <Check size={13} />
                  </div>
                  <span className="text-title text-sm font-medium">
                    Project/Product Management
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-5 w-5 bg-green-100 rounded-full border border-blue-700 flex items-center justify-center text-blue-700">
                    <Check size={13} />
                  </div>
                  <span className="text-title text-sm font-medium">
                    SQA Engineering
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-5 w-5 bg-green-100 rounded-full border border-blue-700 flex items-center justify-center text-blue-700">
                    <Check size={13} />
                  </div>
                  <span className="text-title font-medium">
                    Front-End Developer
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-5 w-5 bg-green-100 rounded-full border border-blue-700 flex items-center justify-center text-blue-700">
                    <Check size={13} />
                  </div>
                  <span className="text-title text-sm font-medium">
                    Back-End Developer
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-5 w-5 bg-green-100 rounded-full border border-blue-700 flex items-center justify-center text-blue-700">
                    <Check size={13} />
                  </div>
                  <span className="text-title text-sm font-medium">
                    Software Engineer
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-5 w-5 bg-green-100 rounded-full border border-blue-700 flex items-center justify-center text-blue-700">
                    <Check size={13} />
                  </div>
                  <span className="text-title text-sm font-medium">
                    AI Engineer
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-5 w-5 bg-green-100 rounded-full border border-blue-700 flex items-center justify-center text-blue-700">
                    <Check size={13} />
                  </div>
                  <span className="text-title text-sm font-medium">More</span>
                </div>
              </div>

              <p className="text-center text-xs text-subtitle">
                All tracks include job placement 99.99% guarantee to follow our
                techniques.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
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
      </Container>
    </section>
  );
}
