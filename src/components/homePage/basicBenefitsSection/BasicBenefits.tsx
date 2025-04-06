"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import benefits from "@/staticData/basicBenefits";
import Container from "@/utils/container/Container";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const BasicBenefits = () => {
  return (
    <section className="py-8 lg:py-12  bg-secondary text-center">
      <Container>
        {/* Title and Subtitle */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-title font-bold mb-4">
            Why High Paid Jobs is your
            <br /> ticket to success
          </h2>
          <p className="text-xs text-subtitle mb-6">
            We share our special tools and techniques, and coach you one-on-one
            <br />
            from the beginning to the placement with higher raise.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="max-w-[300px] sm:max-w-[500px] md:max-w-[750px] lg:max-w-[850px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 p-4 gap-4 lg:gap-8">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="p-3 bg-card text-title rounded-sm shadow-sm "
            >
              <CardContent className="flex flex-col items-center text-center  space-y-3">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={53}
                  height={60}
                  className="w-8 lg:w-10 h-8 lg:h-10"
                />
                <h3 className="text-xs lg:text-lg text-title font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-subtitle text-xs text-subtitle">
                  {benefit.subTitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
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
      </Container>
    </section>
  );
};

export default BasicBenefits;
