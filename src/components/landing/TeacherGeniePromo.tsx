import React from 'react';
import { Sparkles } from 'lucide-react';

const TeacherGeniePromo: React.FC = () => {
  return (
    <div className="py-20 bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 to-indigo-700 shadow-2xl">
          <div className="absolute inset-0 bg-grid-white/10 bg-size:[20px_20px] opacity-20" />
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                  <Sparkles className="h-5 w-5 text-yellow-300" />
                  <span className="text-sm font-semibold text-white">
                    NEW AI Solution for Educators
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Meet <span className="text-yellow-300">TeacherGenie</span> —
                  the lighter, brighter version of Dumroo AI.
                </h2>
                
                <p className="text-lg text-blue-100 mb-8 max-w-2xl">
                  Built for teachers, tutors, homeschoolers, and parents,
                  it turns learning into an elegant, effortless journey.
                </p>
                
                <div className="space-y-4 mb-8">
                  <p className="text-lg text-blue-100 font-medium">
                    Simple. Powerful. Beautiful.
                  </p>
                  <p className="text-lg text-blue-100">
                    An AI companion that lifts the burden
                    and lets education soar.
                  </p>
                  <p className="text-lg text-blue-100 font-medium">
                    TeacherGenie — where intelligence meets heart.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://teachergenie.dumroo.ai"
                    className="px-8 py-4 bg-linear-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-center"
                  >
                    Explore TeacherGenie
                  </a>
                  <a
                    href="https://teachergenie.dumroo.ai/register"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 text-center"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-yellow-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Lesson Plan Preview</p>
                          <p className="text-xs text-blue-200">Grade 8 Science</p>
                        </div>
                      </div>
                      <div className="text-xs text-blue-200">Just now</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <h3 className="font-semibold text-white mb-2">Topic: Photosynthesis</h3>
                        <p className="text-sm text-blue-200">
                          Students will understand the process of photosynthesis and its importance...
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                          <p className="text-xs text-white font-semibold">Objectives</p>
                        </div>
                        <div className="bg-green-500/20 rounded-lg p-3 text-center">
                          <p className="text-xs text-white font-semibold">Activities</p>
                        </div>
                        <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                          <p className="text-xs text-white font-semibold">Assessment</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-blue-200">
                        <span>Standards aligned</span>
                        <span>Editable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherGeniePromo;