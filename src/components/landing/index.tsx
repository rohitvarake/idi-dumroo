import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Announcement from './Announcement';
import Hero from './HeroSection';
import Products from './Products';
import TeacherGeniePromo from './TeacherGeniePromo';
import RoleFeatures from './Features/RoleFeatures';
import Features2 from './Features2';
import WhyChoose from './WhyChoose';
import Testimonials from './Testimonials';
import VideoS from './Video Section/VideoSection';
import CallToAction from './CallToAction';
import Footer from './Footer';
import FAQ from './FAQ';
import { useScrollTo } from '../../hooks/useScrollTo';

const Landing: React.FC = () => {
  const location = useLocation();
  const scrollTo = useScrollTo();

  // Handle scroll to section after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollTo(location.state.scrollTo);
      }, 100);
    }
  }, [location.state?.scrollTo, scrollTo]);

  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      <Helmet>
        <title>AI for Teachers with School Decision Intelligence - Dumroo AI</title>
        <meta name="description" content="Empowering schools and students with AI-driven tools that enhance learning, performance, and personalization across every level of education." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="AI for Teachers with School Decision Intelligence - Dumroo AI" />
        <meta property="og:description" content="Empowering schools and students with AI-driven tools that enhance learning, performance, and personalization across every level of education." />
        <meta property="og:url" content="https://dumroo.ai/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI for Teachers with School Decision Intelligence - Dumroo AI" />
        <meta name="twitter:description" content="Empowering schools and students with AI-driven tools that enhance learning, performance, and personalization across every level of education." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://dumroo.ai/" />
      </Helmet>
      <Navigation />
      <Announcement />
      <Hero />
      <VideoS />
      <Products />
      <RoleFeatures />
      <Features2 />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <TeacherGeniePromo />
      <Footer />
    </div>
  );
};

export default Landing;