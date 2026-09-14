import React from 'react';
import Banner from '../../components/Home/Banner';
import Features from '../../components/Home/Features';
import WhyEvSystems from '../../components/Home/WhyEvSystems';
import TestimonialBanner from '../../components/Home/TestimonialBanner';
import CallToAction from '../../components/Home/CallToAction';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <Features />
      <WhyEvSystems />
      <TestimonialBanner />
      <CallToAction />
    </div>
  );
}
