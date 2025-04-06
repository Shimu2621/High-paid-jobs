import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/utils/container/Container";

export default function PricingPlans() {
  return (
    <div className=" px-4 py-12 bg-white">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-title font-bold mb-1">
            Unlock Your Career Freedom!
          </h1>
          <p className="text-xs lg:text-sm text-subtitle mb-4">
            Choose the assessment plan that works best for you with our flexible
            payment options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter Plan-01 */}
          <div className="rounded-lg border bg-card shadow-sm p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-sm font-bold">Plan: Starter</h3>
              <p className="text-subtitle text-[10px]">
                Quick 30 min interview
              </p>
            </div>

            <div className="mb-4">
              <p className="text-[10px] text-subtitle">Starting from</p>
              <div className="text-xl font-bold">$49.99</div>
              <p className="text-[10px] text-subtitle">One time payment</p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 text-blue-700  mt-1 mr-2 shrink-0" />
                <span>30 Min Interview.</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 text-blue-700  mt-1 mr-2 shrink-0" />
                <span>Provide Recording.</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 text-blue-700  mt-1 mr-2 shrink-0" />
                <span>Interview Assessment.</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 text-blue-700  mt-1 mr-2 shrink-0" />
                <span>Delivery: 1 to 3 days.</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 text-blue-700  mt-1 mr-2 shrink-0" />
                <span>Receive: details report and next action plan.</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 text-blue-700  mt-1 mr-2 shrink-0" />
                <span>
                  Provide 30 Local recruiter (small to large companies for open
                  position)
                </span>
              </div>
            </div>

            <Button className="w-full rounded-4xl cursor-pointer bg-primary hover:bg-blue-700 text-text-white">
              Pay Now <span className="ml-2 text-text-white">→</span>
            </Button>
          </div>

          {/* Essential Plan-2 */}
          <div className="rounded-lg border bg-primary text-white shadow-sm p-6 flex flex-col relative">
            <div className="absolute right-[-8] top-16  ">
              <span className="bg-amber-400 text-black text-xs font-medium px-2.5 py-1 rounded">
                Most Popular
              </span>
              <span className="absolute top-6 right-0">
                <svg
                  width="7.903320"
                  height="7.903320"
                  viewBox="0 0 7.90332 7.90332"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs></defs>
                  <path
                    id="Vector 80"
                    d="M0 0L7.9 0L0 7.9L0 0Z"
                    fill="#F6A934"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>

            <div className="mb-4">
              <h3 className="text-sm text-gray-100 font-bold">
                Plan: Essential
              </h3>
              <p className="text-gray-200 text-[10px]">
                60 min technical interview and resume assessment
              </p>
            </div>

            <div className="mb-4">
              <p className="text-[10px] text-indigo-200">Starting From</p>
              <div className="text-xl text-text-white font-bold">$99.99</div>
              <p className="text-[10px] text-indigo-200">
                Upfront deposit, $99.99 installment for 24 months: Interest FREE
              </p>
            </div>

            <div className="space-y-3 mb-2 flex-grow">
              <div className="flex items-start text-text-white text-xs">
                <Check className="h-3 w-3 mt-1 mr-2 shrink-0" />
                <span>60 min interview.</span>
              </div>
              <div className="flex items-start text-text-white text-xs">
                <Check className="h-3 w-3  mt-1 mr-2 shrink-0" />
                <span>
                  Deliver: Recording Interview, Resume Assessment and guidance!
                </span>
              </div>
              <div className="flex items-start text-text-white text-xs">
                <Check className="h-3 w-3 mt-1  mr-2 shrink-0" />
                <span>Receive: details report and next action plan</span>
              </div>
              <div className="flex items-start text-text-white text-xs">
                <Check className="h-3 w-3 mt-1  mr-2 shrink-0" />
                <span>
                  50 Local recruiter (small to large companies for open
                  position)
                </span>
              </div>
            </div>

            <Button className="w-full rounded-4xl cursor-pointer px-4 bg-white text-text-blue hover:bg-primary hover:text-white">
              Pay Now <span className="ml-2">→</span>
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="rounded-lg border bg-card shadow-sm p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-sm font-bold">Plan: Premium</h3>
              <p className="text-subtitle text-[10px]">
                Interview, resume and current job application
              </p>
            </div>

            <div className="mb-4">
              <p className="text-[10px] text-subtitle">Starting From</p>
              <div className="text-xl font-bold">$149.99</div>
              <p className="text-[10px] text-subtitle">
                Upfront deposit, $149.99 installment for 24 months: Interest
                FREE
              </p>
            </div>

            <div className="space-y-3 mb-4 flex-grow">
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 mt-1 text-blue-700 mr-2 shrink-0" />
                <span>Duration: 2 Hours</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 mt-1 text-blue-700 mr-2 shrink-0" />
                <span>Recruiter Interview</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 mt-1 text-blue-700 mr-2 shrink-0" />
                <span>Tech Interview</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 mt-1 text-blue-700 mr-2 shrink-0" />
                <span>Behavior interview</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 mt-1 text-blue-700 mr-2 shrink-0" />
                <span>Resume Assessment</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 mt-1 text-blue-700 mr-2 shrink-0" />
                <span>Current job application assessment</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 mt-1 text-blue-700 mr-2 shrink-0" />
                <span>Receive: details report and next action plan</span>
              </div>
              <div className="flex items-start text-xs">
                <Check className="h-3 w-3 mt-1 text-blue-700 mr-2 shrink-0" />
                <span>
                  70 Local recruiter (small to large companies for open
                  position)
                </span>
              </div>
            </div>

            <Button className="w-full bg-primary rounded-4xl cursor-pointer hover:bg-blue-700 text-text-white">
              Pay Now <span className="ml-2 text-text-white">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
