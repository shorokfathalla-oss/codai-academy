import { Globe } from "lucide-react";
import { translations } from "../data";
import { Language } from "../types";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  setActiveWorkspaceTab?: (tab: "tutor" | "debugger") => void;
}

export default function Header({
  language,
  setLanguage,
  activeSection,
  setActiveSection,
  setActiveWorkspaceTab,
}: HeaderProps) {
  const t = translations[language];

  const navItems = [
    { id: "home", label: t.navHome },
    { id: "courses", label: t.navCourses },
    { id: "reviews", label: t.navReviews },
    { id: "tutor", label: t.navTutor },
    { id: "debugger", label: t.navDebugger },
    { id: "contact", label: t.navContact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-violet-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
         
         {/* Logo and Academy Name */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/images/logo_1782472258988.jpg"
            alt="Codai Academy Logo"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Graceful fallback if logo doesn't exist yet on developer computer
              e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%237c3aed'><circle cx='50' cy='50' r='40' fill='none' stroke='%237c3aed' stroke-width='8'/><path d='M35 50 L45 60 L65 40' fill='none' stroke='%237c3aed' stroke-width='8' stroke-linecap='round'/></svg>";
            }}
            className="h-10 w-10 rounded-lg object-contain bg-violet-50/50 p-1 border border-violet-100"
            id="academy-logo"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl font-sans">
              {t.academyName}
            </span>
            <span className="hidden text-xs text-slate-500 sm:block max-w-[200px] truncate font-medium">
              {t.academySlogan}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                let targetId = item.id;
                if (item.id === "tutor" || item.id === "debugger") {
                  targetId = "tutor-workspace";
                  if (setActiveWorkspaceTab) {
                    setActiveWorkspaceTab(item.id);
                  }
                }
                const element = document.getElementById(targetId);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeSection === item.id
                  ? "bg-violet-50 text-violet-800"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Language Toggle and CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900"
            id="lang-toggle-btn"
          >
            <Globe className="h-4 w-4 text-violet-600" />
            <span>{language === "en" ? "العربية" : "English"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
