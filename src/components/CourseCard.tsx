import { Database, Cpu, Clock, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { Course, Language } from "../types";
import { translations } from "../data";
import { motion } from "motion/react";

interface CourseCardProps {
  course: Course;
  language: Language;
}

export default function CourseCard({ course, language }: CourseCardProps) {
  const t = translations[language];

  // Render the proper icon dynamically
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Database":
        return <Database className="h-6 w-6 text-brand-cyan" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-brand-cyan" />;
      default:
        return <Database className="h-6 w-6 text-brand-cyan" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full rounded-2xl border border-violet-100 bg-white p-8 transition-all hover:border-violet-300 hover:shadow-lg group"
      id={`course-card-${course.id}`}
    >
      {/* Icon & Title */}
      <div className="flex items-start gap-4 mb-6">
        <div className="rounded-xl bg-violet-50 p-3 border border-violet-100">
          {renderIcon(course.icon)}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-cyan transition-colors">
            {course.title[language]}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">{t.academyName}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
        {course.description[language]}
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-violet-100/60 mb-8 bg-violet-50/10 rounded-lg px-3">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-brand-cyan flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500 uppercase font-mono tracking-wider">{t.durationLabel}</span>
            <span className="text-xs font-semibold text-slate-800">{course.duration[language]}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-brand-cyan flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500 uppercase font-mono tracking-wider">{t.levelLabel}</span>
            <span className="text-xs font-semibold text-slate-800">{course.level[language]}</span>
          </div>
        </div>
      </div>

      {/* Syllabus */}
      <div className="mb-8">
        <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-4">
          <BookOpen className="h-4 w-4 text-brand-cyan" />
          <span>{t.syllabusLabel}</span>
        </h4>
        <ul className="space-y-3">
          {course.syllabus[language].map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-brand-cyan/80 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action Button */}
      <button
        onClick={() => {
          const tutorSec = document.getElementById("tutor-workspace");
          if (tutorSec) {
            tutorSec.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="w-full rounded-xl bg-violet-50 hover:bg-violet-100 border border-violet-100 hover:border-violet-200 py-3 text-center text-xs font-semibold text-brand-cyan transition-all"
        id={`course-enroll-btn-${course.id}`}
      >
        {t.enrollBtn}
      </button>
    </motion.div>
  );
}
