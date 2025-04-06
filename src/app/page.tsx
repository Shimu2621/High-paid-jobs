import Banner from "@/components/homePage/bannerSection/Banner";
import BasicBenefits from "@/components/homePage/basicBenefitsSection/BasicBenefits";
import CareerForm from "@/components/homePage/careerForm/CareerForm";
import ChoosePath from "@/components/homePage/choosePath/ChoosePath";
import ChooseUs from "@/components/homePage/chooseUs/ChooseUs";
import CountdownTimer from "@/components/homePage/countdownTimer/CountdownTimer";
import FAQAccordion from "@/components/homePage/FAQAccordion/FAQAccordion";
import HighPayCareer from "@/components/homePage/highPayCareer/HighPayCareer";
import PricingPlans from "@/components/homePage/pricingPlan/PricingPlan";
import SecureJob from "@/components/homePage/secureJob/SecureJob";
import SuccessStories from "@/components/homePage/testimonials/Testimonials";
// import Testimonials from "@/components/homePage/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <BasicBenefits />
      <HighPayCareer />
      <ChoosePath />
      <SuccessStories />
      <ChooseUs />
      <PricingPlans />
      <FAQAccordion />
      <CountdownTimer />
      <CareerForm />
      <SecureJob />
    </div>
  );
}
