import React from 'react';
import Navigation from '../landing/Navigation';
import Footer from '../landing/Footer';

interface PublicLayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children, hideHeader = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeader && <Navigation />}
      <main className={`flex-1 ${hideHeader ? '' : 'pt-16'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;