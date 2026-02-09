import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import NavLink from './NavLink';
import type { NavItem } from './types';
import { cn } from '../../../lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  links: NavItem[];
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, links, onClose }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();

  // Reset expanded item when route changes
  useEffect(() => {
    setExpandedItem(null);
  }, [location]);

  // Check if we're on the TeacherGenie page
  const isTeacherGeniePage = location.pathname === '/products/teacher-genie';

  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 border-t border-white/10">
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <div key={link.id} className="flex flex-col">
            {link.children ? (
              <>
                <button
                  onClick={() => setExpandedItem(expandedItem === link.label ? null : link.label)}
                  className={cn(
                    "flex items-center justify-between",
                    "text-brand-main/80 hover:text-brand-main transition-colors",
                    "px-4 py-2 rounded-lg",
                    expandedItem === link.label && "bg-brand-50"
                  )}
                >
                  <span className="font-medium">{link.label}</span>
                  {expandedItem === link.label ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {expandedItem === link.label && (
                  <div className={cn(
                    "mt-1 ml-4 space-y-1 border-l-2 border-brand-100 pl-4",
                    "animate-in slide-in-from-left duration-200"
                  )}>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.id}
                        href={child.href}
                        label={child.label}
                        external={child.external}
                        onClick={() => {
                          setExpandedItem(null);
                          onClose();
                        }}
                        className={cn(
                          "block text-brand-main/70 hover:text-brand-main transition-colors",
                          "px-2 py-1.5 rounded-lg text-sm"
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
                onClick={onClose}
              />
            ) : (
              <NavLink
                href={link.href}
                label={link.label}
                external={link.external}
                onClick={onClose}
                className={cn(
                  "text-brand-main/80 hover:text-brand-main transition-colors",
                  "px-4 py-2 rounded-lg"
                )}
              />
            )}
          </div>
        ))}
        {/* Only show Sign In link when not on TeacherGenie page */}
        {!isTeacherGeniePage && (
          <NavLink
            href="/login"
            label="Sign In"
            onClick={onClose}
            className={cn(
              "bg-brand-aux1 text-brand-bg hover:bg-brand-aux1/90",
              "px-4 py-2 rounded-lg text-center mt-4",
              "animate-in fade-in-50 duration-200"
            )}
          />
        )}
      </div>
    </div>
  );
};

export default MobileMenu;