import React from 'react';
import { BookOpen, BarChart, Brain, Users, Navigation2, Lightbulb } from 'lucide-react';
import './Features2.css'; // We will update this file next

const features = [
  {
    icon: BookOpen,
    title: 'Smart Planning',
    description: 'Use AI to generate lesson plans in minutes, helping teachers focus on instruction instead of paperwork.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop',
  },
  {
    icon: BarChart,
    title: 'Intelligent Analytics',
    description: 'Gain actionable insights with our school decision intelligence software, combining attendance, grades, and behavior data to guide better decisions for administrators and teachers alike.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
  },
  {
    icon: Brain,
    title: 'Differentiated Learning',
    description: 'Adapt content and pacing to each learner\'s needs, ensuring every student receives the right level of challenge and support.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop',
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Keep parents, teachers, and students engaged through real-time updates, communication tools, and progress tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop',
  },
  {
    icon: Navigation2,
    title: 'AI-Enhanced Navigation',
    description: 'Intuitive AI tools that guide users through the platform, making it easy to find resources, data, and personalized recommendations.',
    imageUrl: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1374&auto=format&fit=crop',
  },
  {
    icon: Lightbulb,
    title: 'Dynamic IEPs',
    description: 'Create adaptive Individualized Education Programs with AI-driven suggestions that evolve with each student\'s progress.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop',
  },
];

const Features2: React.FC = () => {
  return (
    <section id="features2" className="min-h-screen py-24 bg-slate-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-3xl lg:text-4xl font-extrabold mb-4 text-center leading-tight">
            <span className="text-gray-900">Powerful Features for Modern Education: </span>{' '}
            <span className="text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 ">
               AI for Teachers & Decision Intelligence
            </span>
          </p>
          <p className="text-base text-gray-600 mb-14 text-center max-w-2xl mx-auto">
            See how our AI teacher tools and analytics software transform education from classrooms to administration.
          </p>
        </div>

        {/* The change for wider cards is here: lg:grid-cols-2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("${feature.imageUrl}")`
              }}
            >
              <div className="card-content">
                <div className="icon-container">
                  <feature.icon className="h-4 w-4 text-white" /> {/* Smaller icon */}
                </div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            </div>
          ))}
      </div>

      </div>
    </section>
  );
};

export default Features2;