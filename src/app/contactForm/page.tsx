"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function CareerConsultationForm() {
  const [date, setDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    employed: "",
    jobSwitch: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, date });
    // Handle form submission
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-50">
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg p-8 shadow-md">
        <h1 className="text-xl font-bold text-gray-800">
          Book a FREE Career Consultation
        </h1>
        <p className="text-gray-600 text-xs mb-6">
          Please fill out the form below to schedule a 15-minute career auditing
          session
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="flex text-xs font-bold">
                Name <span className="text-gray-500 ml-[-4]">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 !text-xs"
              />
            </div>

            <div>
              <Label htmlFor="mobile" className="flex text-xs font-bold">
                Mobile <span className="text-gray-500 ml-[-4]">*</span>
              </Label>
              <Input
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className="mt-1 !text-xs"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="flex text-xs font-bold">
              Email <span className="text-gray-500 ml-[-4]">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 !text-xs"
            />
          </div>

          <div>
            <Label htmlFor="date" className="flex text-xs font-bold">
              What is the best time for a 15-minute career auditing session?{" "}
              <span className="text-gray-500 ml-[-4]">*</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between bg-white text-left text-xs text-gray-500 font-normal h-9 mt-1"
                  )}
                >
                  {date ? format(date, "PPP") : "Select date and time"}
                  <CalendarIcon className="mr-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <p className="text-xs text-gray-500 mt-1">
              Select your preferred date and time for the meeting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <Label className="flex text-xs font-bold">
                Are you currently employed?{" "}
                <span className="text-gray-500 ml-[-4]">*</span>
              </Label>
              <RadioGroup
                name="employed"
                value={formData.employed}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, employed: value }))
                }
                required
                className="mt-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="employed-yes" />
                  <Label htmlFor="employed-yes" className="text-xs">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="employed-no" />
                  <Label htmlFor="employed-no" className="text-xs">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="flex text-xs font-bold">
                Are you looking for job switch?{" "}
                <span className="text-gray-500 ml-[-4]">*</span>
              </Label>
              <RadioGroup
                name="jobSwitch"
                value={formData.jobSwitch}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, jobSwitch: value }))
                }
                required
                className="mt-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="switch-yes" />
                  <Label htmlFor="switch-yes" className="text-xs">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="switch-no" />
                  <Label htmlFor="switch-no" className="text-xs">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <Button
              type="submit"
              className="bg-primary hover:bg-blue-400 hover:text-black text-xs text-white px-6 m-1  rounded-lg"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
