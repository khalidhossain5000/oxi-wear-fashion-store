import Banner from "@/components/HomePage/Banner/Banner";
import FeaturedProduct from "@/components/HomePage/FeaturedProduct/FeaturedProduct";
import MarqueeInfo from "@/components/HomePage/MarqueeInfoSection/MarqueeInfo";
import WhyChooseUs from "@/components/HomePage/WhyChooseUsSection/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <MarqueeInfo/>
      <FeaturedProduct/>
<WhyChooseUs/>
    </div>
  );
}
