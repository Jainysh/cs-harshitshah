// src/app/page.tsx
import HeroCarousel from "@/components/HeroCarousel";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesGrid from "@/components/ServicesGrid";
// import BlogsCarousel from "@/components/BlogsCarousel";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <WhoWeAre />
      <WhyChooseUs />
      <ServicesGrid />
      {/* <BlogsCarousel /> TODO once blogs are live */}
      <Testimonials />
    </>
  );
}
