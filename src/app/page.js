import Gallery from "@/components/gallery/Gallery";
import HeroSection from "@/components/heroSection/HeroSection";
import Review from "@/components/reviewSection/Review";
import Sell from "@/components/sales/Sell";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection/>
      <Gallery/>
      <Sell/>
      <Review/>
    </div>
  )
}
