import React from 'react';
import { Brain, BookOpen, CheckSquare, FileText, Sparkles } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';
import { Helmet } from 'react-helmet-async';

const PlanningAI: React.FC = () => {
  return (
    <PublicLayout>
      <Helmet>
        <title>Content AI – Smart Learning Content Creation - Dumroo.ai</title>
        <meta name="description" content="Create AI-powered educational content efficiently with Content AI your smart assistant for building engaging, curriculum-aligned lessons." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Content AI – Smart Learning Content Creation - Dumroo.ai" />
        <meta property="og:description" content="Create AI-powered educational content efficiently with Content AI your smart assistant for building engaging, curriculum-aligned lessons." />
        <meta property="og:url" content="https://dumroo.ai/products/content-ai" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Content AI – Smart Learning Content Creation - Dumroo.ai" />
        <meta name="twitter:description" content="Create AI-powered educational content efficiently with Content AI your smart assistant for building engaging, curriculum-aligned lessons." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://dumroo.ai/products/content-ai" />
      </Helmet>
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Content AI – Smart Learning Content Creation - Dumroo.ai</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transform your teaching with AI-powered lesson planning and curriculum development
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                AI Toolkit for Educators
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI Toolkit revolutionizes how teachers plan and create educational content. With powerful AI assistance, you can generate engaging lesson plans, create assessments, and develop curriculum materials in minutes instead of hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <Brain className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Intelligent Planning</h3>
                    <p className="text-gray-600">AI-powered suggestions based on curriculum standards and student needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lesson Creation</h3>
                    <p className="text-gray-600">Generate detailed lesson plans with objectives, activities, and assessments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <CheckSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Assessment Design</h3>
                    <p className="text-gray-600">Create quizzes, tests, and rubrics aligned with learning objectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Resource Generation</h3>
                    <p className="text-gray-600">Generate worksheets, study guides, and supplementary materials</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://i.imgur.com/OWAlsje.png?1"
                alt="Teacher planning"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Smart Templates",
                description: "Pre-built templates for various lesson types and subjects"
              },
              {
                icon: Sparkles,
                title: "Differentiation Support",
                description: "Automatically adapt content for different learning levels"
              },
              {
                icon: FileText,
                title: "Content Library",
                description: "Save and organize your generated content for future use"
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

export default PlanningAI;