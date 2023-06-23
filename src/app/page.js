import Gallery from "@/components/gallery/Gallery";
import HeroSection from "@/components/heroSection/HeroSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection/>
      <Gallery/>
    </div>
  )
}
