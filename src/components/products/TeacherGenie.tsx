import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  Sparkles,
  Star,
  CheckCircle,
  Zap,
  Target,
  Lock,
  BookOpen,
  FileText,
  Clipboard,
  Users,
  ChevronDown,
} from "lucide-react";
import PublicLayout from "../layout/PublicLayout";
import { useScrollTo } from "../../hooks/useScrollTo";

const TeacherGenie: React.FC = () => {
  const location = useLocation();
  const scrollTo = useScrollTo();
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Handle scroll to section from navigation
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      scrollTo((location.state as any).scrollTo);
    }
  }, [location.state, scrollTo]);



  // Animation on scroll
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-fade-in-up");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PublicLayout>
      <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50">
        <Helmet>
          <title>Teacher Genie AI Lesson Plan Generator for Teachers</title>
          <meta name="description" content="Create lesson plans faster with an AI lesson plan generator for teachers. Generate worksheets, quizzes, and assessments with standards alignment." />
        </Helmet>
        {/* TOP STRIP / BREADCRUMB */}
        <div className="border-b border-blue-100/70 bg-white/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="font-medium text-gray-700">Products</span>
              <span className="opacity-50">/</span>
              <span className="text-brand-bg font-semibold">TeacherGenie</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <span className="hidden sm:inline-flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Loved by busy teachers</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">
                <Sparkles className="w-3 h-3" />
                AI for Education, made simple
              </span>
            </div>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-x-0 -top-40 pointer-events-none">
            <div className="mx-auto h-72 w-72 sm:h-96 sm:w-96 bg-brand-bg/10 blur-3xl rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
              {/* Left: Copy */}
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-bg/15 bg-white/70 backdrop-blur-sm mb-5">
                  <Sparkles className="h-4 w-4 text-brand-aux1" />
                  <span className="text-xs font-semibold tracking-wide uppercase text-brand-bg">
                    TeacherGenie by Dumroo.ai
                  </span>
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span className="text-xs text-gray-600">
                    30-day free trial • No risk
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 mb-5">
                  Turn{" "}
                  <span className="text-brand-bg">
                    AI into your co-teacher
                  </span>{" "}
                  — not your replacement.
                </h1>

                <p className="text-sm sm:text-base text-gray-600 max-w-xl mb-6">
                  TeacherGenie is an AI lesson plan generator that helps teachers create lesson plans, worksheets, quizzes, and assessments faster—while keeping full control in your hands.
                </p>

                <ul className="space-y-3 text-sm sm:text-base text-gray-700 mb-7">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5 h-5 w-5" />
                    <span>
                      Create lesson plans in minutes using an AI lesson plan generator
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5 h-5 w-5" />
                    <span>
                      Generate AI worksheets and quizzes aligned to your curriculum
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5 h-5 w-5" />
                    <span>Stop late-night planning with a calm, structured planning workflow</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://teachergenie.dumroo.ai/register")
                    }
                    className="px-6 py-3 bg-linear-to-r from-brand-bg to-blue-600 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
                  >
                    Start your 30-day free trial
                    <span className="ml-2">→</span>
                  </button>
                  <button
                    onClick={() => scrollTo("features")}
                    className="px-6 py-3 bg-white/80 text-brand-bg border border-brand-bg/20 rounded-lg font-medium text-sm shadow-sm hover:shadow-md hover:bg-blue-50/60 transition-all duration-200 flex items-center justify-center"
                  >
                    See what Genie can create
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>No credit card needed for trial</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>Perfect for individual teachers & small schools</span>
                  </div>
                </div>
              </div>

              {/* Right: Product visual / card */}
              <div
                className={`relative transition-all duration-700 delay-150 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100/70 shadow-2xl overflow-hidden p-4 sm:p-5">
                  <div className="absolute -top-12 -right-10 w-32 h-32 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-16 w-40 h-40 bg-brand-bg/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between mb-4 px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-bg/10 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-brand-bg" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-700">
                          Live Lesson Builder
                        </p>
                        <p className="text-[11px] text-gray-400">
                          AI powered • You stay in control
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Autosaving</span>
                    </div>
                  </div>

                  <div className="relative rounded-2xl border border-blue-100 overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-100 mb-4">
                    <img
                      src="/tg-herocover.svg"
                      alt="TeacherGenie lesson plan dashboard"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px] sm:text-xs">
                    <div className="rounded-xl bg-blue-50/80 border border-blue-100 p-3 flex flex-col gap-1">
                      <p className="font-semibold text-gray-800">
                        Lesson Plan in 2 mins
                      </p>
                      <p className="text-gray-500">
                        Objectives, activities, assessment, and differentiation
                        already mapped.
                      </p>
                    </div>
                    <div className="rounded-xl bg-emerald-50/70 border border-emerald-100 p-3 flex flex-col gap-1">
                      <p className="font-semibold text-gray-800">
                        One click exports
                      </p>
                      <p className="text-gray-500">
                        Download to PDF, PPT, or share with your admin in
                        seconds.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Aligned with standards you select</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-gray-400" />
                      <span>Your content stays yours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS STRIP (quick social proof) */}
        <section
          className="py-10 bg-linear-to-r from-brand-bg to-blue-600 animate-on-scroll"
          id="benefits"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative bg-white/10 p-5 rounded-2xl border border-white/20 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Instant setup
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-blue-100">
                  Sign up, describe your class, and start generating lesson
                  plans in under 5 minutes. No training, no onboarding calls.
                </p>
              </div>

              <div className="relative bg-white/10 p-5 rounded-2xl border border-white/20 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-white">
                    85+ AI tools
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-blue-100">
                  From lesson plans to rubrics, projects, assessments and more —
                  everything lives in one clean workspace.
                </p>
              </div>

              <div className="relative bg-white/10 p-5 rounded-2xl border border-white/20 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">$</span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Just $4.99/month
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-blue-100">
                  Start with a 30-day free trial. Keep your entire library even
                  if you cancel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSFORMATION SECTION */}
        <section className="py-14 sm:py-20 bg-white animate-on-scroll">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
                From “I’ll finish this at midnight” to{" "}
                <span className="text-brand-bg">“I’m done before lunch.”</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                TeacherGenie helps you plan smarter with an all-in-one lesson plan generator built for real classrooms. Create AI-generated lesson plans, worksheets, quizzes, and assessments that align with standards and textbooks—without losing your personal teaching style.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-7 shadow-sm">
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-3">
                  Before TeacherGenie
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="mt-1 text-gray-400">•</span>
                    <span>
                      Hours spent manually creating lesson plans and assessments
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-gray-400">•</span>
                    <span>
                      Disconnected files for worksheets, quizzes, and standards
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-gray-400">•</span>
                    <span>
                      No easy way to reuse or improve lesson plans
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-6 sm:p-7 shadow-sm">
                <p className="text-xs font-semibold tracking-wide uppercase text-emerald-700 mb-3">
                  After TeacherGenie
                </p>
                <ul className="space-y-3 text-sm text-emerald-900">
                  <li className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      A reusable library of AI-generated lesson plans
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      One dashboard for lesson plans, worksheets, quizzes, and assessments
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      Faster planning using a smart lesson plan builder
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section
          className="py-16 sm:py-20 bg-linear-to-b from-blue-50 via-white to-blue-50 animate-on-scroll"
          id="features"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
                The calm, structured side of AI for teachers.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                TeacherGenie is built for teachers who want AI support—not chaos. Our AI lesson plan generator free trial lets you plan lessons, generate assessments, and stay aligned with standards, all in one focused workspace.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Zap className="h-7 w-7 text-brand-bg" />,
                  title: "⏰ Save 5+ hours every week",
                  desc: " Use AI to generate lesson plans, activities, and assessments—then customize them your way.",
                },
                {
                  icon: <Target className="h-7 w-7 text-brand-bg" />,
                  title: "🎯 Built-in standard alignment",
                  desc: " Create lesson plans directly from standards or textbooks using AI.",
                },
                {
                  icon: <Lock className="h-7 w-7 text-brand-bg" />,
                  title: "🔒 Your work, your control",
                  desc: " Edit, refine, and reuse everything created by your lesson plan AI generator.",
                },
              ].map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      {f.icon}
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS GRID */}
        <section
          className="py-16 bg-white animate-on-scroll"
          id="tools"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-6">
                TeacherGenie combines multiple tools into one powerful AI lesson plan generator, so you don't need separate platforms for planning, worksheets, quizzes, or assessments.
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
                85+ AI teaching tools in one place.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Swap scattered tools and templates for a single, focused
                workspace built for classroom reality.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <BookOpen className="h-6 w-6" />, name: "Lesson Plans", desc: " Create structured lesson plans using AI in minutes." },
                { icon: <FileText className="h-6 w-6" />, name: "Worksheets", desc: " Auto-generate printable and digital worksheets with an AI worksheet generator." },
                { icon: <Clipboard className="h-6 w-6" />, name: "Quizzes", desc: " Instantly create quizzes using an AI quiz generator." },
                { icon: <Users className="h-6 w-6" />, name: "Rubrics", desc: "Clear, student-friendly criteria." },
                { icon: <Target className="h-6 w-6" />, name: "Assessments", desc: " Design formative and summative tests with an educational assessment generator." },
                { icon: <Zap className="h-6 w-6" />, name: "Activities", desc: "Engaging tasks for every unit." },
                { icon: <Lock className="h-6 w-6" />, name: "Presentations", desc: "Ready for classroom display or online." },
                { icon: <Star className="h-6 w-6" />, name: "Projects", desc: "Long-form, standards-aligned projects." },
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 text-left border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-[1.01] transition-all duration-200 animate-on-scroll"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex justify-center items-center rounded-lg bg-blue-50 w-10 h-10 text-brand-bg">
                      {tool.icon}
                    </div>
                  </div>
                  <div className="mb-1 font-semibold text-gray-900 text-sm sm:text-base">
                    {tool.name}
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-500">
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 bg-linear-to-r from-blue-50 to-blue-100/60 animate-on-scroll">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                How TeacherGenie fits into your week.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Keep your planning predictable: from idea → AI draft → polished
                lesson, all in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "Step 1",
                  title: "Tell Genie about your class",
                  desc: "Subject, grade level, standards, and how your students learn best.",
                },
                {
                  step: "Step 2",
                  title: "Generate your resources",
                  desc: "Generate lesson plans, worksheets, quizzes, and assessments using a single lesson plan generator AI—all from one prompt.",
                },
                {
                  step: "Step 3",
                  title: "Review, tweak, and teach",
                  desc: "Edit anything, export to your favorite format, and walk into class prepared.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-white rounded-2xl border border-blue-100 shadow-sm p-6 flex flex-col"
                >
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-bg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 flex-grow">
                    {item.desc}
                  </p>
                  {idx < 2 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2">
                      <span className="text-xl text-blue-300">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section
          className="py-20 bg-white animate-on-scroll"
          id="pricing"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
                Simple, transparent pricing.
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                One plan, full access. Start with a 30-day free trial and keep
                what you create.
              </p>
            </div>

            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-x-6 -inset-y-6 bg-linear-to-b from-blue-100/40 via-transparent to-emerald-100/40 blur-3xl pointer-events-none" />
              <div className="relative p-8 rounded-3xl bg-linear-to-br from-white to-gray-50 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                      TeacherGenie Pro
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Best for individual teachers and small teams.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    50% launch discount
                  </span>
                </div>

                <div className="mb-6">
                  <div className="inline-flex items-baseline mb-3">
                    <div className="relative inline-block mr-3">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-400">
                        $9.99
                      </span>
                      <div className="absolute top-3/4 left-0 right-0 h-[2px] bg-red-500 transform -rotate-12 origin-left" />
                    </div>
                    <span className="text-4xl sm:text-5xl font-extrabold text-green-600">
                      $4.99
                    </span>
                    <span className="text-gray-600 ml-2 text-sm">
                      /month
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Billed monthly. Cancel anytime.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    Includes unlimited access to our AI lesson plan generator, worksheet generator, quiz generator, and assessment tools.
                  </p>
                </div>

                <ul className="space-y-3 mb-7 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                    <span>Access to all 85+ AI teaching tools.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                    <span>
                      Unlimited lesson plans, worksheets, quizzes, and
                      assessments.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                    <span>Your personal, private content library.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                    <span>Standards-aligned content in 22+ languages.</span>
                  </li>
                </ul>

                <button
                  onClick={() =>
                    (window.location.href =
                      "https://teachergenie.dumroo.ai/register")
                  }
                  className="w-full py-3 bg-linear-to-r from-brand-bg to-blue-600 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Start 30-day free trial
                </button>

                <p className="text-gray-500 text-[11px] sm:text-xs mt-3 text-center">
                  No credit card required to start your trial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-20 bg-linear-to-b from-white to-blue-50 animate-on-scroll"
          id="faq"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Everything you need to know before you invite Genie into your
                planning routine.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  question: "Is TeacherGenie a free AI lesson plan generator?",
                  answer:
                    "TeacherGenie offers a 30-day free trial so you can try the AI lesson plan generator, worksheet generator, and quiz tools before upgrading.",
                },
                {
                  question: "How does the 30-day free trial work?",
                  answer:
                    "Start your free trial with full access to all 85+ AI tools. For 30 days, you can create, edit, and export without restrictions. After that, your subscription continues at $4.99/month. No credit card is required to begin.",
                },
                {
                  question: "Can I cancel anytime?",
                  answer:
                    "Yes. You can cancel your subscription at any time from your account settings. You'll keep access until the end of your current billing period, and we won't charge you again.",
                },
                {
                  question: "What's included in the $4.99/month plan?",
                  answer:
                    "You get unlimited access to all 85+ AI tools inside TeacherGenie — lesson plans, worksheets, quizzes, rubrics, projects, activities, and your personal content library. Everything is included in one simple price.",
                },
                {
                  question: "Is my content private and secure?",
                  answer:
                    "Absolutely. Your content is stored securely in your personal library. You can export, duplicate, or delete your materials at any time. We don't share your lesson content with third parties.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/40"
                >
                  <button
                    className="flex justify-between items-center w-full p-5 sm:p-6 text-left bg-white hover:bg-blue-50/40 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="font-medium text-sm sm:text-base text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 sm:h-6 sm:w-6 text-brand-bg transition-transform duration-300 shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-400 ease-in-out overflow-hidden ${
                      openFaq === index
                        ? "max-h-40 sm:max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-gray-600 text-xs sm:text-sm border-t border-gray-100">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-emerald-700 text-xs sm:text-sm font-medium mb-6">
              <Star className="h-4 w-4" /> 30-day free trial • No commitment
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight text-gray-900">
              Ready to take planning off your late-night to-do list?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-9 max-w-2xl mx-auto">
              Give TeacherGenie your next unit, and let it draft the pieces for
              you. You still teach from the heart — Genie just makes the prep
              lighter.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://teachergenie.dumroo.ai/register")
                }
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-linear-to-r from-brand-bg to-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 flex items-center"
              >
                Get started with TeacherGenie
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default TeacherGenie;
