import Gallery from "@/components/gallery/Gallery";
import HeroSection from "@/components/heroSection/HeroSection";

export default function Home() {
  return (
    <div className="overflow-y-hidden">
      <HeroSection/>
      <Gallery/>
    </div>
  )
}
