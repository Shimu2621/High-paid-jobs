"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/utils/container/Container";

export default function FAQAccordion() {
  const [openItem, setOpenItem] = useState<string>("item-1");

  return (
    <div className="py-12 px-4 bg-secondary">
      <Container>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-title mb-2">
            Got Questions? We&rsquo;ve Got Answers
          </h1>
          <p className="text-subtitle">
            Find answers to our most frequently asked questions
          </p>
        </div>

        <div className="space-y-4">
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="space-y-4"
          >
            <AccordionItem
              value="item-1"
              className="border rounded-md bg-white shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium text-title">
                  How fast can I get a job?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-title">
                Job placement only: 8 weeks. Boot camp + placement: 10-12 weeks
                of training + 4-6 weeks to an offer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-md bg-white shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium text-title">
                  What if I don&rsquo;t get hired?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-title">
                We offer ongoing support until you secure a position. Our
                placement team continues to work with you to refine your
                approach and connect you with new opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-md bg-white shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium text-title">
                  Can I work remotely?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-title">
                Yes, many of our graduates secure remote positions. We have
                partnerships with companies that offer both remote and in-office
                opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-md bg-white shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium text-title">
                  Who is this program for?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-title">
                Our program is designed for motivated individuals looking to
                transition into tech careers, whether you&apos;re a recent
                graduate, career changer, or looking to upskill.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border rounded-md bg-white shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium text-title">
                  Do I need prior experience?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-title">
                No prior experience is required. Our curriculum is designed to
                take you from beginner to job-ready, with personalized support
                throughout your journey.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border rounded-md bg-white shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium text-title">
                  What companies hire your graduates?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-title">
                Our graduates have been hired by a wide range of companies, from
                startups to Fortune 500 corporations, including tech giants and
                industry leaders across various sectors.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-title">
            Have more questions? Ask us during your FREE consultation!
          </p>
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => {
                const formSection = document.getElementById("career-form");
                formSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-4xl !px-8 py-5 bg-background text-sm font-semibold !text-text-white hover:bg-[#1D4ED8]"
            >
              Book Free Consultation
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
