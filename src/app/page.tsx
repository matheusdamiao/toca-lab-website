import CustomCursor from "@/components/customCursor";
import AboutSection from "@/components/home/aboutSection";
import AnimatedBanner from "@/components/home/animatedBanner";
import ContactSection from "@/components/home/contactSection";
import FooterSection from "@/components/home/footerSection";
import HeroSection from "@/components/home/heroSection";
import HeroTextSlider from "@/components/home/heroTextSlider";
import HowSection from "@/components/home/howSection";
import MissionSection from "@/components/home/missionSection";
import ProjectsSection from "@/components/home/projectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection/>
      <CustomCursor/>
      <HeroTextSlider/>
      <AboutSection/>
      <AnimatedBanner/>
      <MissionSection/>
      <HowSection/>
      <ProjectsSection/>
      <ContactSection/>
      <FooterSection/>
    </main>
  );
}
