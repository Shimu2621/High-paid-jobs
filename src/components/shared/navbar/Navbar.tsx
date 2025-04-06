"use client";

import { ModeToggle } from "@/components/toggle/ModeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/utils/container/Container";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logo.webp";

const Navbar = () => {
  return (
    <div className="bg-background  py-10 pt-0">
      <Container>
        <div className="flex justify-between items-center pb-3">
          <Image src={logo} alt="Logo" width={220} height={220} />

          <div className="flex items-center space-x-4">
            <ModeToggle />
            {/* ShadCN’s <Button /> component has default padding styles,  so to increase the padding, I need to force it with !important using Tailwind’s ! prefix */}
            <Button
              onClick={() => {
                const formSection = document.getElementById("career-form");
                formSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center bg-text-white text-[#2A3142] text-xs lg:text-xs font-normal lg:!px-3 !py-[-2] rounded-4xl hover:bg-text-white hover:text-[#2A3142]"
            >
              Get Started <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Full-width separator */}
        <Separator className="w-full bg-gray-500 h-[1px]" />
      </Container>
    </div>
  );
};

export default Navbar;
