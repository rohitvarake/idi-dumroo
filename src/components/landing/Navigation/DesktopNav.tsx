import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import NavLink from './NavLink';
import type { NavItem } from './types';
import { cn } from '../../../lib/utils';

interface DesktopNavProps {
  links: NavItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  // Check if we're on the TeacherGenie page
  const isTeacherGeniePage = location.pathname === '/products/teacher-genie';

  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <div
          key={link.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(link.label)}
          onMouseLeave={handleMouseLeave}
        >
          {link.children ? (
            <>
              <button
                className={cn(
                  "text-brand-main/80 hover:text-brand-main transition-colors",
                  "flex items-center gap-1 group"
                )}
              >
                {link.label}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  activeDropdown === link.label && "rotate-180"
                )} />
              </button>
              {activeDropdown === link.label && (
                <div 
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    "absolute top-full left-0 mt-2 py-2",
                    "bg-white rounded-xl shadow-xl border border-gray-100",
                    "animate-in fade-in slide-in-from-top-2 duration-200",
                    link.label === 'Products' ? "w-72 grid grid-cols-2 gap-1 p-3" : "w-56"
                  )}
                >
                  {link.children.map((child) => (
                    <NavLink
                      key={child.id}
                      href={child.href}
                      label={child.label}
                      external={child.external}
                      onClick={() => setActiveDropdown(null)}
                      className={cn(
                        "block text-left text-sm text-gray-700",
                        "hover:bg-brand-50 hover:text-brand-600",
                        "transition-colors rounded-lg",
                        link.label === 'Products' ? "px-3 py-2" : "px-4 py-2"
                      )}
                    />
                  ))}
                </div>
              )}
            </>
          ) : link.isButton ? (
            <NavLink
              href={link.href}
              label={link.label}
              external={link.external}
              isButton={true}
            />
          ) : (
            <NavLink
              href={link.href}
              label={link.label}
              external={link.external}
              className="text-brand-main/80 hover:text-brand-main transition-colors"
            />
          )}
        </div>
      ))}
      {/* Only show Sign In link when not on TeacherGenie page */}
      {!isTeacherGeniePage && (
        <NavLink
          href="/login"
          label="Sign In"
          className="bg-brand-aux1 text-brand-bg hover:bg-brand-aux1/90 px-4 py-2 rounded-lg"
        />
      )}
    </div>
  );
};

export default DesktopNav;