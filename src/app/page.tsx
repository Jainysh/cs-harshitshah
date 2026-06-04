// src/app/page.tsx
import HeroCarousel from "@/components/HeroCarousel";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesGrid from "@/components/ServicesGrid";
// import BlogsCarousel from "@/components/BlogsCarousel";
import Testimonials from "@/components/Testimonials";

const serviceImages = [
  "/services/ia.webp",
  "/services/ra.webp",
  "/services/pms.webp",
  "/services/aif.webp",
  "/services/company-formation.webp",
  "/services/corporate-secretarial.webp",
  "/services/corporate-transactions.webp",
  "/services/fundraising.webp",
  "/services/strike-off.webp",
  "/services/due-diligence.webp",
];

export default function Home() {
  return (
    <>
      {serviceImages.map((src) => (
        <link key={src} rel="prefetch" as="image" href={src} />
      ))}
      <HeroCarousel />
      <WhoWeAre />
      <WhyChooseUs />
      <ServicesGrid />
      {/* <BlogsCarousel /> TODO once blogs are live */}
      <Testimonials />
    </>
  );
}
