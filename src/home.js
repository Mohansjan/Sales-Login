import React from "react";
import HeaderSection from "./HeaderSection/header";
import SliderSection from "./SliderSection/slider";
import SpinnerSection from "./FlashSpinnerSection/spinner";
import CategorySection from "./CategorySection/category";
import BumberSection from "./BumberSection/bumber";
import TopSellerSection from "./TopSellerSection/topSeller";
import AllProSection from "./AllProSection/allPro";
import AddsSection from "./AddsSection/adds";
import FooterSection from "./FooterSection/footer";
import BannerSection from "./BannerSection/banner";


const HomeSection = () => {
  return (
    <div className="Home">
       <HeaderSection />
      <SliderSection/>
      <SpinnerSection />
      <CategorySection />
      <BumberSection/>
      <TopSellerSection/>
      <BannerSection />
      <AllProSection />
      <AddsSection />
      <FooterSection />
    </div>
  );
};

export default HomeSection;
