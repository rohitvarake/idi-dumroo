import React from 'react';
import { BarChart2, Clock, CheckCircle, TrendingUp, Users } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';
import { Helmet } from 'react-helmet-async';

const ProgressionAI: React.FC = () => {
  return (
    <PublicLayout>
      <Helmet>
        <title>Progress AI – Track Student Growth with Insights - Dumroo.ai</title>
        <meta name="description" content="Measure academic progress in real time with Progress AI data insights that help educators track growth and improve learning performance." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Progress AI – Track Student Growth with Insights - Dumroo.ai" />
        <meta property="og:description" content="Measure academic progress in real time with Progress AI data insights that help educators track growth and improve learning performance." />
        <meta property="og:url" content="https://dumroo.ai/products/progress-ai" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Progress AI – Track Student Growth with Insights - Dumroo.ai" />
        <meta name="twitter:description" content="Measure academic progress in real time with Progress AI data insights that help educators track growth and improve learning performance." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://dumroo.ai/products/progress-ai" />
      </Helmet>
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Progress AI - Track Student Growth with Insights - Dumroo.ai</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Track and visualize student progress with intelligent analytics and real-time insights
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Student Progress Tracking
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Progress AI system provides comprehensive tracking of student progress across all learning activities. Monitor completion rates, identify learning gaps, and get actionable insights to improve student outcomes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Progress Tracking</h3>
                    <p className="text-gray-600">Monitor student progress as it happens with live updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Time Management</h3>
                    <p className="text-gray-600">Track time spent on assignments and activities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Completion Tracking</h3>
                    <p className="text-gray-600">Monitor assignment completion and submission status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Progress Analytics</h3>
                    <p className="text-gray-600">Visualize learning trends and improvement over time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Progress tracking"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart2,
                title: "Visual Progress",
                description: "Clear visual representations of student progress and achievements"
              },
              {
                icon: Users,
                title: "Class Overview",
                description: "See progress trends across entire classes or groups"
              },
              {
                icon: TrendingUp,
                title: "Growth Tracking",
                description: "Monitor individual and class-wide improvement over time"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="p-3 bg-brand-50 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default ProgressionAI;