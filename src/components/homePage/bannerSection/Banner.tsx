"use client";

import Navbar from "@/components/shared/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Container from "@/utils/container/Container";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import leftimage from "../../../../public/images/Maskgroup.webp";
// import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-background relative w-full pt-2 pb-16 overflow-hidden">
      <Container>
        <div>
          <div>
            <Image
              src={leftimage}
              alt=""
              width={340}
              height={500}
              className="absolute top-0 right-0 animate-pulse z-10"
            />
          </div>

          <div>
            <Image
              src={leftimage}
              alt=""
              width={400}
              height={500}
              className="absolute left-0 bottom-0 rotate-180 animate-pulse z-10"
            />
          </div>
        </div>

        <div className="relative z-20 mx-auto flex flex-col h-full p-3 lg:p-0">
          <Navbar />
          <div className="flex flex-col lg:flex-row justify-between items-center gap-15 mx-auto">
            {/* Left Section */}
            <div>
              <div className="animate-pulse">
                <Button className="bg-white/20 backdrop-blur-md border border-white/30  text-[#E6EBFA] px-5 !py-4 rounded-4xl text-xs font-normal mb-8 hover:bg-[#204AD4]">
                  <span className="animate-pulse">🔥</span>
                  99.99% GUARANTEED to get back your job!
                </Button>
              </div>

              <h1 className="text-[#FFFFFF] text-4xl font-bold mb-6 leading-[1.2]">
                Get Your Six-Figure
                <br /> job back in{""}{" "}
                <span className="text-[#D69D00] font-bold relative">
                  8-16 Weeks
                  <svg
                    className="absolute left-0 w-full -bottom-3"
                    height="20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q50 0, 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-warn"
                    ></path>
                  </svg>
                </span>{" "}
                <br /> with our proven
                <br /> techniques.
              </h1>
              <p className="text-[#B2C7F5] text-xs font-normal mb-8">
                Get access activity hiring 20+ premium recriters today
                surrounding your location.
              </p>

              <div className="flex space-x-4">
                <Button
                  onClick={() => {
                    const formSection = document.getElementById("career-form");
                    formSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-4xl !px-4 py-3 bg-[#EAC808] text-xs font-semibold !text-[#36321F] hover:bg-[#f6df59]"
                >
                  Book Free Consultation <ChevronRight className="w-4 h-4" />
                </Button>

                <Button
                  onClick={() => {
                    const formSection = document.getElementById("career-form");
                    formSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-4xl !px-4 py-3 bg-primary text-xs font-semibold !text-[#ebeff9] border !border-[#6172a9] hover:bg-[#486ce1]"
                >
                  Join Next Webinar <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            {/* ================Right Section(Video)============== */}
            <div className="relative w-full md:w-[300px] h-[350px] rounded-lg overflow-hidden pt-8 lg:pt-0">
              <iframe
                className="w-full h-full shadow-lg"
                src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3&autoplay=1"
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Vimeo video"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
