// import React from 'react';
import { Brain, Layers, TrendingUp } from 'lucide-react';

const features = [
  {
    title: 'AI-First Design',
    icon: Brain,
    items: [
      'Voice and text interaction lets teachers and students communicate naturally.',
      'Intelligent navigation adapts to user preferences for a personalized experience.',
      'Predictive insights guide teachers and administrators toward better decisions.',
    ],
  },
  {
    title: 'Seamless Integration',
    icon: Layers,
    items: [
      'All-in-one platform meets every educational need.',
      'Compatible with existing school systems for quick adoption.',
      'Easy implementation and onboarding mean you start seeing value right away.',
    ],
  },
  {
    title: 'Proven Results',
    icon: TrendingUp,
    items: [
      'Increased student engagement through personalized learning.',
      'Improved academic outcomes thanks to data-driven insights.',
      'Reduced administrative workload with automated tasks.',
      'Enhanced family involvement via real-time communication and progress updates.',
    ],
  },
];

const WhyChoose = () => {
  return (
    <div className="bg-linear-to-b from-white to-blue-100 min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <p className="text-3xl lg:text-4xl font-extrabold mb-4 text-center leading-tight">
          <span className="text-gray-900">Why Everyone</span>{' '}
          <span className="text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-400 after:rounded-full ">
            Loves Dumroo AI
          </span>
        </p>
        <p className="text-base text-gray-600 mb-14 text-center max-w-2xl mx-auto">
          Our platform combines AI for teachers and decision intelligence for administrators, delivering powerful solutions for every role in education.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-xl shadow-md p-7 pt-14 flex flex-col items-start space-y-4 
                        hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              {/* Floating Icon */}
              <div
                className="absolute -top-8 left-10 bg-linear-to-tr from-blue-500 to-blue-300 p-4 rounded-full shadow-lg 
                          hover:rotate-6 hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">{feature.title}</h3>

              {/* List */}
              <ul className="text-sm text-gray-600 space-y-2 list-none p-0">
                {feature.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 group hover:text-blue-600 transition-colors duration-200"
                  >
                    <span className="text-blue-500 mt-1 group-hover:scale-110 transition-transform">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
};

export default WhyChoose;