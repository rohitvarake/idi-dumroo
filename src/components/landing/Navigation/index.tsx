import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import type { NavItem } from './types';

const navLinks: NavItem[] = [
  {
    id: 'about',
    href: '#',
    label: 'About Us',
    children: [
      { id: 'about-page', href: '/about', label: 'About Us' },
      { 
        id: 'foundation', 
        href: 'https://foundation.dumroo.ai', 
        label: 'Join the Mission',
        external: true 
      },
      { id: 'features', href: '#features2', label: 'Features' },
      { id: 'testimonials', href: '#testimonials', label: 'Testimonials' },
      { id: 'news', href: '/news', label: 'News' },
      { id: 'blog', href: '/blog', label: 'Blog' },
      { id: 'contact', href: '/contact', label: 'Contact Us' }
    ]
  },
  {
    id: 'products',
    href: '#',
    label: 'Micro-Apps',
    children: [
      { id: 'content-ai', href: '/products/content-ai', label: 'Content AI' },
      { id: 'progression-ai', href: '/products/progress-ai', label: 'Progression AI' },
      { id: 'performance-ai', href: '/products/performance-ai', label: 'Performance AI' },
      { id: 'personalize-ai', href: '/products/personalize-ai', label: 'Personalize AI' },
      { id: 'analytics-ai', href: '/products/analytics-ai', label: 'Analytics AI' },
      { id: 'companion-ai', href: '/products/rooboo-ai', label: 'Rooboo AI' },
      { id: 'teacher-genie', href: '/products/teacher-genie', label: 'TeacherGenie' },
    ]
  },
   {
    id: 'portals',
    href: '#',
    label: 'Portals',
    children: [
      { id: 'teacher-portal', href: '/portals/teacher-portal', label: 'Teacher Portal' },
      { id: 'student-portal', href: '/portals/student-portal', label: 'Student Portal' },
      { id: 'admin-portal', href: '/portals/admin-portal', label: 'Admin Portal' },
      { id: 'parent-portal', href: '/portals/parent-portal', label: 'Parent Portal' },
      { id: 'homeschooling-portal', href: '/portals/homeschooling-portal', label: 'Homeschooling Portal' }
    ]
  },
  { id: 'events', href: '/events', label: 'Events' },
  { id: 'gallery', href: '/gallery', label: 'Gallery' },
  { id: 'pricing', href: '/pricing', label: 'Pricing' },
  { id: 'privacy', href: '/privacy', label: 'Privacy & Security' }
];

// Teacher Genie specific navigation links
const teacherGenieNavLinks: NavItem[] = [
  { id: 'tg-benefits', href: '#benefits', label: 'Benefits' },
  { id: 'tg-features', href: '#features', label: 'Features' },
  { id: 'tg-tools', href: '#tools', label: 'Tools' },
  { id: 'tg-pricing', href: '#pricing', label: 'Pricing' },
  { id: 'tg-faq', href: '#faq', label: 'FAQ' },
  { id: 'tg-dumroo', href: 'https://dumroo.ai', label: 'Visit Dumroo', external: true },
  { id: 'tg-cta', href: 'https://teachergenie.dumroo.ai/login', label: 'Sign In', external: true, isButton: true }
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine which navigation links to show
  const getNavLinks = () => {
    if (location.pathname === '/products/teacher-genie') {
      return teacherGenieNavLinks;
    }
    
    return navLinks;
  };

  // Determine which logo to show
  const renderLogo = () => {
    if (location.pathname === '/products/teacher-genie') {
      return (
        <img 
          src="/tg-white-logo.svg" 
          alt="Teacher Genie Logo"
          className="h-8 w-auto"
        />
      );
    }
    
    // Default logo for other pages
    return (
      <div className="flex items-center gap-2 text-brand-600">
        <img 
          src="https://i.imgur.com/HM5aJDB.png" 
          alt="Logo"
          className="h-8 w-auto"
        />
      </div>
    );
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-brand-bg/95 backdrop-blur-sm shadow-md' : 'bg-brand-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="shrink-0">
            {renderLogo()}
          </Link>
          
          <DesktopNav links={getNavLinks()} />
          
          <button 
            className="md:hidden text-brand-main p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen}
          links={getNavLinks()}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navigation;