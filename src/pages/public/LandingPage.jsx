import React from 'react';
import { useSelector } from 'react-redux';
import Banner from '../../components/Home/Banner';
import Features from '../../components/Home/Features';
import WhyEvSystems from '../../components/Home/WhyEvSystems';
import TestimonialBanner from '../../components/Home/TestimonialBanner';
import CallToAction from '../../components/Home/CallToAction';

export default function LandingPage() {
  const { data: landingPageData } = useSelector((state) => state.landingPage);
  const toggles = landingPageData?.section_toggles || {};

  return (
    <div className="flex flex-col w-full">
      {toggles.enable_banners !== false && <Banner />}
      {toggles.enable_features !== false && <Features />}
      {toggles.enable_why_ev !== false && <WhyEvSystems />}
      <TestimonialBanner />
      <CallToAction />
    </div>
  );
}
