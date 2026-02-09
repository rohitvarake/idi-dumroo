import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Public Pages - Direct imports
import Landing from './components/landing';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPosts from './components/BlogPosts';
import BlogPostDetail from './components/BlogPostDetail';
import News from './components/News';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Privacy from './components/Privacy';
import TermsOfService from './components/TermsOfService';
import WhitePaper from './components/WhitePaper';
import Pricing from './components/teacher-pricing';
import Sitemap from './components/Sitemap';
import useToastStore from './stores/toast';
import Toast from './ui/Toast';

// Portal Pages - Lazy loaded
const TeacherPortal_pp = lazy(() =>
  import('./components/portals/TeachersPortal')
);
const AdminsPortal_pp = lazy(() =>
  import('./components/portals/AdminsPortal')
);
const StudentsPortal_pp = lazy(() =>
  import('./components/portals/StudentsPortal')
);
const ParentsPortal_pp = lazy(() =>
  import('./components/portals/ParentsPortal')
);
const HomeschoolingEducatorPortal_pp = lazy(() =>
  import('./components/portals/HomeschoolingEducatorPortal')
);

// Product Pages - Lazy loaded
const ContentAI_pp = lazy(() =>
  import('./components/products/ContentAI')
);
const ProgressionAI_pp = lazy(() =>
  import('./components/products/ProgressionAI')
);
const PerformanceAI_pp = lazy(() =>
  import('./components/products/PerformanceAI')
);
const PersonalizeAI_pp = lazy(() =>
  import('./components/products/PersonalizeAI')
);
const EngagementAI_pp = lazy(() =>
  import('./components/products/EngagementAI')
);
const AttendanceAI_pp = lazy(() =>
  import('./components/products/AttendanceAI')
);
const AnalyticsAI_pp = lazy(() =>
  import('./components/products/AnalyticsAI')
);
const NavigationAI_pp = lazy(() =>
  import('./components/products/NavigationAI')
);
const TutorAI_pp = lazy(() =>
  import('./components/products/TutorAI')
);
const RoobooAI_pp = lazy(() =>
  import('./components/products/RoobooAI')
);
const RoobooVoiceAI_pp = lazy(() =>
  import('./components/products/RoobooVoiceAI')
);
const CommunityAI_pp = lazy(() =>
  import('./components/products/CommunityAI')
);
const GamifyAI_pp = lazy(() =>
  import('./components/products/GamifyAI')
);
const GradingAI_pp = lazy(() =>
  import('./components/products/GradingAI')
);
const TeacherGenie_pp = lazy(() =>
  import('./components/products/TeacherGenie')
);

const App = () => {
  const { message, type, hideToast } = useToastStore();

  return (
    <HelmetProvider>
      <div className="min-h-screen transition-colors duration-200 bg-gray-50">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-posts" element={<BlogPosts />} />
          <Route path="/blog-post/:slug" element={<BlogPostDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/white-paper" element={<WhitePaper />} />
          <Route path="/events" element={<Events />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/university"
            element={<Navigate to="/academy" replace />}
          />

          {/* Product Routes - Public */}
          <Route
            path="/products/content-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ContentAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/progress-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProgressionAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/performance-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PerformanceAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/personalize-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PersonalizeAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/engagement-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <EngagementAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/attendance-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AttendanceAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/analytics-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AnalyticsAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/navigation-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NavigationAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/tutor-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TutorAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/rooboo-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RoobooAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/rooboovoice-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RoobooVoiceAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/community-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CommunityAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/gamify-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <GamifyAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/grading-ai"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <GradingAI_pp />
              </Suspense>
            }
          />
          <Route
            path="/products/teacher-genie"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TeacherGenie_pp />
              </Suspense>
            }
          />

          {/* Portal Routes - Public */}
          <Route
            path="/portals/teacher-portal"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TeacherPortal_pp />
              </Suspense>
            }
          />
          <Route
            path="/portals/admin-portal"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AdminsPortal_pp />
              </Suspense>
            }
          />
          <Route
            path="/portals/student-portal"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <StudentsPortal_pp />
              </Suspense>
            }
          />
          <Route
            path="/portals/parent-portal"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ParentsPortal_pp />
              </Suspense>
            }
          />
          <Route
            path="/portals/homeschooling-portal"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomeschoolingEducatorPortal_pp />
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {message && <Toast message={message} type={type} onClose={hideToast} />}

    </HelmetProvider>
  );
};

export default App;