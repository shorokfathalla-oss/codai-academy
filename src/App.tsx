import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CourseCard from "./components/CourseCard";
import AITutor from "./components/AITutor";
import CodeDebugger from "./components/CodeDebugger";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { coursesData, translations, socialLinks } from "./data";
import { Language } from "./types";
import { motion } from "motion/react";
import { 
  Database, 
  Cpu, 
  Sparkles, 
  MessageSquare, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Users, 
  ArrowUpRight,
  PhoneCall,
  ChevronRight,
  ChevronLeft,
  Bot
} from "lucide-react";

export default function App() {
  const [language, setLanguage] = useState<Language>("ar");
  const [activeSection, setActiveSection] = useState("home");
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<"tutor" | "debugger">("tutor");

  const t = translations[language];

  // Dynamically update document direction on language change
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  // Handle active section change based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "courses", "reviews", "tutor-workspace", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            let activeId = section;
            if (section === "tutor-workspace") {
              activeId = activeWorkspaceTab;
            }
            setActiveSection(activeId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { id: "students", val: "1,200+", label: t.statStudents, icon: <Users className="h-5 w-5 text-brand-cyan" /> },
    { id: "tracks", val: "2", label: t.statCourses, icon: <GraduationCap className="h-5 w-5 text-brand-violet" /> },
    { id: "success", val: "94%", label: t.statEmployment, icon: <Briefcase className="h-5 w-5 text-brand-cyan" /> },
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-800 flex flex-col font-sans relative antialiased selection:bg-violet-600/20 selection:text-violet-900">

      {/* Background Decorative Gradients - beautiful light purple & white glow */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-[120px] pointer-events-none animate-pulse [animation-duration:8s]" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-violet-300/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-fuchsia-300/5 blur-[130px] pointer-events-none" />

      {/* Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setActiveWorkspaceTab={setActiveWorkspaceTab}
      />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section id="home" className="relative pt-16 pb-24 md:pt-24 md:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-start">
              
              {/* Academy Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-1.5 text-xs text-brand-cyan shadow-sm mx-auto lg:mx-0">
                <span className="font-semibold tracking-wider uppercase font-mono text-violet-800">
                  {language === "en" ? "Registration Open" : "باب التسجيل مفتوح الآن"}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {language === "en" ? (
                  <>
                    Unlock the Power of <br className="hidden sm:inline" />
                    <span className="text-gradient">Data Analysis</span> & <span className="text-gradient">AI</span>
                  </>
                ) : (
                  <>
                    اصنع مستقبلك مع <br className="hidden sm:inline" />
                    <span className="text-gradient">تحليل البيانات</span> والـ <span className="text-gradient">AI</span>
                  </>
                )}
              </h1>

              {/* Sub-headline */}
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
                {t.academySubtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById("courses");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-cyan hover:bg-violet-800 text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-violet-900/10 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>{t.ctaExplore}</span>
                  {language === "en" ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("tutor-workspace");
                    el?.scrollIntoView({ behavior: "smooth" });
                    setActiveWorkspaceTab("tutor");
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-violet-200 bg-white hover:bg-violet-50 text-brand-cyan font-semibold text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4.5 w-4.5 text-brand-cyan" />
                  <span>{t.ctaChatTutor}</span>
                </button>
              </div>

            </div>

            {/* Right Graphic/Mockup Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl border border-violet-100 bg-white/60 p-6 flex items-center justify-center shadow-md">
                
                {/* Simulated Clean Info Blocks */}
                <div className="space-y-4 w-full">
                  
                  {/* Flat Clean SQL Box */}
                  <div className="rounded-xl border border-violet-100 bg-violet-50/30 p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-violet-300" />
                      <div className="h-2 w-2 rounded-full bg-violet-200" />
                      <span className="text-[10px] text-slate-500 font-mono ml-2">sales_query.sql</span>
                    </div>
                    <code className="text-xs text-brand-cyan font-mono block leading-relaxed">
                      SELECT region, SUM(revenue)<br />
                      FROM academy_sales<br />
                      GROUP BY region;
                    </code>
                  </div>

                  {/* Flat Clean AI Prompt Box */}
                  <div className="rounded-xl border border-violet-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] text-violet-800 font-semibold font-mono">Gemini AI Tutor</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {language === "en" 
                        ? "Great query! To boost performance, add an INDEX on the 'region' column. 🚀" 
                        : "استعلام ممتاز! عشان تزود السرعة، ضيف INDEX على عمود الـ region. 🚀"}
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Quick Statistics Banner */}
        <section className="border-t border-b border-violet-100/60 bg-white/40 backdrop-blur-md py-10 px-4 sm:px-6 lg:px-8 shadow-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center justify-center space-y-2 group">
                <div className="rounded-xl bg-violet-50/50 border border-violet-100 p-2.5 group-hover:scale-105 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.val}</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Educational Tracks Catalog */}
        <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.tracksHeader}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.tracksSubtitle}
            </p>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course} language={language} />
            ))}
          </div>

        </section>

        {/* Reviews & Testimonials Section */}
        <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-violet-100/40">
          <Reviews language={language} />
        </section>

        {/* Interactive Workspace (AI Tutor & Code Debugger Tabs) */}
        <section id="tutor-workspace" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-md border-t border-b border-violet-100/60 shadow-sm">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Section Header with Tabs */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-1.5 text-center md:text-start">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center md:justify-start gap-2">
                  <span className="text-gradient">
                    {language === "en" ? "Codai Interactive Learning Center" : "مركز كوداي التعليمي التفاعلي"}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  {language === "en"
                    ? "Work on active tracks, consult the smart AI tutor, and polish your codes."
                    : "طبق اللي اتعلمته في المسارات، استشر المعلم الذكي وصحح الأكواد فوراً."}
                </p>
              </div>

              {/* Tabs Control */}
              <div className="flex rounded-xl bg-slate-50 border border-slate-200 p-1 w-full max-w-xs sm:max-w-md shadow-sm">
                <button
                  onClick={() => setActiveWorkspaceTab("tutor")}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeWorkspaceTab === "tutor"
                      ? "bg-brand-cyan text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  id="tab-btn-tutor"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  <span>{t.navTutor}</span>
                </button>
                <button
                  onClick={() => setActiveWorkspaceTab("debugger")}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeWorkspaceTab === "debugger"
                      ? "bg-brand-cyan text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  id="tab-btn-debugger"
                >
                  <Code2 className="h-4.5 w-4.5" />
                  <span>{t.navDebugger}</span>
                </button>
              </div>
            </div>

            {/* Active Workspace View */}
            <div className="max-w-4xl mx-auto">
              {activeWorkspaceTab === "tutor" ? (
                <AITutor language={language} />
              ) : (
                <CodeDebugger language={language} />
              )}
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* CRITICAL REQ: Floating WhatsApp Widget */}
      <div 
        className={`fixed bottom-6 z-50 flex items-center gap-2.5 ${
          language === "ar" ? "left-6" : "right-6"
        }`}
        id="floating-whatsapp-widget"
      >
        {/* Hover tooltip */}
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2.5 shadow-lg transition-all duration-300 scale-95 hover:scale-105 border-violet-500/10 hover:border-violet-500/30 group"
          title={t.whatsappTooltip}
        >
          {/* Animated WhatsApp Ring indicator */}
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-600 border border-violet-150">
            <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400/20 animate-ping opacity-75"></span>
            <PhoneCall className="h-4 w-4" />
          </span>
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">
              {language === "en" ? "Chat Support" : "الدعم الفني والواتساب"}
            </span>
            <span className="text-xs font-extrabold text-violet-800 font-mono leading-none mt-0.5">
              {socialLinks.whatsappNumber}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
