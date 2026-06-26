import { MapPin, Phone, Clock, Facebook, Instagram, Music } from "lucide-react";
import { translations, socialLinks } from "../data";
import { Language } from "../types";

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="border-t border-violet-100 bg-white/40 backdrop-blur-md" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Upper footer split */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          
          {/* Academy Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/images/logo_1782472258988.jpg"
                alt="Codai Academy Logo"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%237c3aed'><circle cx='50' cy='50' r='40' fill='none' stroke='%237c3aed' stroke-width='8'/><path d='M35 50 L45 60 L65 40' fill='none' stroke='%237c3aed' stroke-width='8' stroke-linecap='round'/></svg>";
                }}
                className="h-10 w-10 rounded-lg object-contain bg-violet-50/50 p-1 border border-violet-100"
              />
              <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
                {t.academyName}
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-medium">
              {t.academySlogan}
            </p>
            
            {/* Social Icons inside Brand */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* TikTok Button */}
              <a
                href={socialLinks.tiktok}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 rounded-lg bg-black border border-black px-3.5 py-2 text-xs font-bold text-white hover:bg-zinc-900 transition-all shadow-sm"
                aria-label="TikTok"
              >
                <Music 
                  className="h-4 w-4 flex-shrink-0 text-white fill-white" 
                  style={{ filter: "drop-shadow(1px 0 0 #fe0979) drop-shadow(-1px 0 0 #00f2fe)" }}
                />
                <span>TikTok</span>
              </a>

              {/* Instagram Button */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-3.5 py-2 text-xs font-bold text-white hover:opacity-90 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 flex-shrink-0 text-white" />
                <span>Instagram</span>
              </a>

              {/* Facebook Button */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 rounded-lg bg-[#1877F2] border border-[#1877F2] px-3.5 py-2 text-xs font-bold text-white hover:bg-[#166fe5] transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 flex-shrink-0 text-white fill-white" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              {t.contactTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address item - CRITICAL REQ: El Galaa Square, El Dokki */}
              <div className="flex gap-3">
                <div className="rounded-lg bg-violet-50 border border-violet-100 p-2 text-brand-cyan h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-slate-500 uppercase">{t.addressLabel}</h5>
                  <p className="text-sm text-slate-800 mt-1 font-semibold">{t.addressValue}</p>
                </div>
              </div>

              {/* WhatsApp item - CRITICAL REQ: WhatsApp 01507810781 */}
              <div className="flex gap-3">
                <div className="rounded-lg bg-violet-50 border border-violet-100 p-2 text-violet-600 h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-slate-500 uppercase">{t.phoneLabel}</h5>
                  <p className="text-sm text-violet-800 mt-1 font-mono font-bold">
                    {socialLinks.whatsappNumber}
                  </p>
                </div>
              </div>

              {/* Work hours */}
              <div className="flex gap-3 sm:col-span-2">
                <div className="rounded-lg bg-violet-50 border border-violet-100 p-2 text-brand-cyan h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-slate-500 uppercase">{t.hoursLabel}</h5>
                  <p className="text-sm text-slate-800 mt-1 font-semibold">{t.hoursValue}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="mt-12 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {t.academyName}. All rights reserved.
          </p>
          <div className="text-[10px] text-slate-400 font-mono text-center sm:text-right">
            <span>Specializing in Data Analysis & AI Education</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
