"use client";

import Container from "@/utils/container/Container";
import Image from "next/image";

import React from "react";
import leftCTA from "../../../../public/images/cta-left.webp";
import { Button } from "@/components/ui/button";

const SecureJob = () => {
  return (
    <div className="relative overflow-hidden bg-white py-12 text-center">
      <div>
        <Container>
          <div className="relative bg-primary p-8 rounded-md overflow-hidden">
            {/* Background image */}
            <div className="absolute left-0 top-1/2 rotate-180 animate-pulse -translate-y-1/2 opacity-30 md:opacity-100 pointer-events-none">
              <Image
                src={leftCTA}
                alt="Background Image"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute animate-pulse right-0 top-1/2 -translate-y-1/2">
              <Image
                src={leftCTA}
                alt="Background Image"
                width={200}
                height={200}
              />
            </div>
            <div className="z-20">
              <h1 className="text-2xl text-title md:text-4xl font-bold mb-2">
                Secure Your $100K+ Future Today!
              </h1>

              <p className="text-xs text-subtitle mb-8 max-w-2xl mx-auto">
                Spots are filling FAST! Join our next hiring wave and start your
                journey to a high-paying tech career.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  onClick={() => {
                    const formSection = document.getElementById("career-form");
                    formSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-medium  py-2 px-4 rounded-full transition-colors flex items-center justify-center gap-1"
                >
                  Book a Free 15-Min Call{" "}
                  <span className="ml-2 mb-1 items-center">›</span>
                </Button>

                <Button
                  onClick={() => {
                    const formSection = document.getElementById("career-form");
                    formSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-indigo-400 hover:bg-indigo-500 text-xs text-title font-medium py-2 px-4 rounded-full transition-colors flex items-center justify-center gap-1"
                >
                  Join Next Webinar <span className="ml-1">›</span>
                </Button>
              </div>

              <div className="text-center">
                <p className="inline-flex items-center text-xs md:text-sm text-title">
                  <span className="mr-2">🚀</span> HighPaidJobs.us – The Fastest
                  Path to a $100K+ Career!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SecureJob;
