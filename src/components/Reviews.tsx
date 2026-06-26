import React, { useState } from "react";
import { Star, MessageSquare, Sparkles, UserPlus } from "lucide-react";
import { translations } from "../data";
import { Language } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ReviewsProps {
  language: Language;
}

interface ReviewItem {
  id: string;
  name: string;
  track: { en: string; ar: string };
  rating: number;
  text: { en: string; ar: string };
  date: { en: string; ar: string };
  avatarBg: string;
}

export default function Reviews({ language }: ReviewsProps) {
  const t = translations[language];

  // Pre-populated realistic and 100% positive reviews of the academy
  const [reviews, setReviews] = useState<ReviewItem[]>([
    {
      id: "rev-1",
      name: language === "en" ? "Ahmed Mamdouh" : "أحمد ممدوح",
      track: {
        en: "Advanced Data Analysis Track",
        ar: "مسار تحليل البيانات المتقدم"
      },
      rating: 5,
      text: {
        en: "The timeline is excellent and WhatsApp follow-up is very quick. Thanks to the Advanced Data Analysis Track, I managed to work as a freelancer and build interactive dashboards for international companies.",
        ar: "المتابعة والمحتوى ممتازين جداً والرد على الواتساب سريع لمساعدتنا. بفضل مسار تحليل البيانات المتقدم، قدرت أشتغل فريلانسر وأعمل لوحات تحكم تفاعلية لشركات برة مصر."
      },
      date: { en: "2 weeks ago", ar: "منذ أسبوعين" },
      avatarBg: "bg-violet-500"
    },
    {
      id: "rev-2",
      name: language === "en" ? "Mona El-Mahdy" : "منى المهدي",
      track: {
        en: "Artificial Intelligence & Python Engineering",
        ar: "مسار هندسة الذكاء الاصطناعي وبايثون"
      },
      rating: 5,
      text: {
        en: "The AI track with Codai truly changed my mindset. The lessons are highly practical and the AI Tutor on the website helped me solve complex Python coding challenges anytime!",
        ar: "مسار الذكاء الاصطناعي مع كوداي حقيقي غيّر طريقة تفكيري بالكامل. الشرح عملي وتطبيقي جداً، والـ AI Tutor على الويب سايت كان بيساعدني في حل مشاكل الأكواد المعقدة في أي وقت!"
      },
      date: { en: "3 weeks ago", ar: "منذ 3 أسابيع" },
      avatarBg: "bg-emerald-500"
    },
    {
      id: "rev-3",
      name: language === "en" ? "Mostafa Kamel" : "مصطفى كامل",
      track: {
        en: "Advanced Data Analysis Track",
        ar: "مسار تحليل البيانات المتقدم"
      },
      rating: 5,
      text: {
        en: "I started completely from scratch, and today I work with Power BI and SQL in a reputable tech company. Codai Academy is truly the best investment I've made in my career.",
        ar: "بدأت من الصفر تماماً، والنهاردة شغال بـ Power BI وSQL في شركة تكنولوجية محترمة. كوداي أكاديمي حقيقي أفضل استثمار عملته في حياتي المهنية."
      },
      date: { en: "1 month ago", ar: "منذ شهر" },
      avatarBg: "bg-indigo-500"
    },
    {
      id: "rev-4",
      name: language === "en" ? "Nourhan El-Shafei" : "نورهان الشافعي",
      track: {
        en: "Artificial Intelligence & Python Engineering",
        ar: "مسار هندسة الذكاء الاصطناعي وبايثون"
      },
      rating: 5,
      text: {
        en: "The practical application and real-world projects are the best part. The instructors are extremely helpful and explain every single detail with immense patience.",
        ar: "التطبيق العملي والمشاريع الحقيقية هي أهم ميزة بالأكاديمية. المحاضرين متعاونين جداً وبيشرحوا كل تفصيلة بصبر لا حدود له."
      },
      date: { en: "1 month ago", ar: "منذ شهر" },
      avatarBg: "bg-fuchsia-500"
    }
  ]);

  // Form states
  const [newName, setNewName] = useState("");
  const [newReviewText, setNewReviewText] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("data-analysis");
  const [selectedRating, setSelectedRating] = useState(5);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "info" } | null>(null);

  const handleRatingChange = (rating: number) => {
    if (rating < 5) {
      // Direct funny positive validation
      setSelectedRating(5);
      showNotification(t.reviewErrorMinStars, "info");
    } else {
      setSelectedRating(5);
    }
  };

  const showNotification = (message: string, type: "success" | "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newReviewText.trim()) return;

    // Build new review
    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newName,
      track: selectedTrack === "data-analysis" 
        ? { en: "Advanced Data Analysis Track", ar: "مسار تحليل البيانات المتقدم" }
        : selectedTrack === "cyber-security"
        ? { en: "Cybersecurity & Network Defense Track", ar: "مسار الأمن السيبراني وحماية الشبكات" }
        : { en: "Artificial Intelligence & Python Engineering", ar: "مسار هندسة الذكاء الاصطناعي وبايثون" },
      rating: 5, // Force 5 stars always!
      text: { en: newReviewText, ar: newReviewText },
      date: { en: "Just now", ar: "الآن" },
      avatarBg: ["bg-violet-500", "bg-emerald-500", "bg-indigo-500", "bg-fuchsia-500", "bg-pink-500", "bg-teal-500"][Math.floor(Math.random() * 6)]
    };

    setReviews([newReview, ...reviews]);
    setNewName("");
    setNewReviewText("");
    setSelectedRating(5);
    
    showNotification(t.reviewSuccess, "success");
  };

  const tracksOptions = [
    { id: "data-analysis", label: language === "en" ? "Advanced Data Analysis Track" : "مسار تحليل البيانات المتقدم" },
    { id: "ai-python", label: language === "en" ? "AI & Python Engineering Track" : "مسار هندسة الذكاء الاصطناعي وبايثون" },
    { id: "cyber-security", label: language === "en" ? "Cybersecurity & Network Defense Track" : "مسار الأمن السيبراني وحماية الشبكات" }
  ];

  return (
    <div className="space-y-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
          <span className="text-gradient">{t.reviewsHeader}</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.reviewsSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Reviews List Column */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence initial={false}>
              {reviews.map((rev, index) => (
                <motion.div
                  key={rev.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
                  id={`review-${rev.id}`}
                >
                  {/* Decorative faint quote sign */}
                  <div className={`absolute top-4 ${language === "ar" ? "left-4" : "right-4"} text-slate-100/70 text-7xl font-serif select-none pointer-events-none`}>
                    ”
                  </div>

                  <div className="space-y-4 relative z-10">
                    
                    {/* Stars & Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {language === "en" ? rev.date.en : rev.date.ar}
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {language === "en" ? rev.text.en : rev.text.ar}
                    </p>
                  </div>

                  {/* Student Details */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100/80 mt-4 relative z-10">
                    <div className={`h-9 w-9 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                      {rev.name.substring(0, 1)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold text-slate-900 truncate">{rev.name}</span>
                      <span className="text-[11px] font-semibold text-violet-800 truncate">
                        {language === "en" ? rev.track.en : rev.track.ar}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Add Review Form Column */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-violet-150 bg-gradient-to-br from-white to-violet-50/20 p-6 shadow-sm relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-150">
              <div className="p-1.5 rounded-lg bg-violet-100 text-violet-800">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {language === "en" ? "Leave Your Feedback" : "اكتب رأيك بصراحة"}
              </h3>
            </div>

            {/* Notification / Toast Banner inside Card */}
            <AnimatePresence>
              {notification && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`p-3.5 mb-4 rounded-xl text-xs font-medium leading-relaxed flex items-start gap-2 ${
                    notification.type === "success" 
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-100" 
                      : "bg-violet-100 text-violet-800 border border-violet-200"
                  }`}
                >
                  <Sparkles className="h-4 w-4 flex-shrink-0 text-amber-500 mt-0.5 animate-bounce" />
                  <span>{notification.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  {language === "en" ? "Student Name" : "اسم الطالب"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-violet-500 focus:outline-none transition-all"
                />
              </div>

              {/* Course Track Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  {language === "en" ? "Track Completed" : "المسار التعليمي"}
                </label>
                <select
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-violet-500 focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  {tracksOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Star Rating Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>{t.ratingLabel}</span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    {language === "en" ? "Positivity Checked" : "مضمون الإيجابية"}
                  </span>
                </label>
                <div className="flex gap-1.5 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className="transition-transform active:scale-95 p-0.5"
                    >
                      <Star 
                        className={`h-6 w-6 ${
                          star <= selectedRating 
                            ? "fill-amber-400 text-amber-400" 
                            : "text-slate-300 hover:text-amber-300"
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback text */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  {language === "en" ? "Your Feedback" : "رأيك بالأكاديمية"}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={t.reviewPlaceholder}
                  value={newReviewText}
                  onChange={(e) => setNewReviewText(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-violet-500 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-brand-cyan hover:bg-violet-800 text-white font-bold text-xs tracking-wider transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5 mt-2"
              >
                <UserPlus className="h-4 w-4" />
                <span>{t.submitReview}</span>
              </button>

            </form>
          </div>
        </div>

      </div>

    </div>
  );
}
