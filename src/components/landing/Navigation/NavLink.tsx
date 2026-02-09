import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScrollTo } from '../../../hooks/useScrollTo';

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
  isButton?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  label, 
  className = '', 
  onClick,
  external = false,
  isButton = false
}) => {
  const scrollTo = useScrollTo();
  const navigate = useNavigate();
  const location = useLocation();

  // Routes that are proxied to Site B - must use full page navigation
  const PROXIED_ROUTES = ['/login', '/register', '/reset-password'];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isButton) {
      // For button links, open in the same tab
      window.location.href = href;
    } else if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (PROXIED_ROUTES.includes(href)) {
      // Proxied routes must use full page navigation to trigger Netlify redirects
      window.location.href = href;
    } else if (href.startsWith('#')) {
      // Check if we're on the Teacher Genie page
      if (location.pathname === '/products/teacher-genie') {
        // If already on Teacher Genie page, just scroll
        scrollTo(href.slice(1));
      } else {
        // If not on Teacher Genie page, navigate there first
        navigate('/products/teacher-genie', { state: { scrollTo: href.slice(1) } });
      }
    } else if (href.startsWith('/')) {
      // Handle regular route navigation
      navigate(href);
    }
    
    onClick?.();
  };

  // Render as a button if isButton is true
  if (isButton) {
    return (
      <button
        onClick={handleClick}
        className={className || "bg-brand-aux1 text-brand-bg hover:bg-brand-aux1/90 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"}
      >
        {label}
      </button>
    );
  }

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
    </a>
  );
};

export default NavLink;