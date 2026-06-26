import { Course } from "./types";

export const translations = {
  en: {
    academyName: "Codai Academy",
    academySlogan: "Empowering the Next Generation of AI & Data Leaders",
    academySubtitle: "Learn from industry experts, master state-of-the-art tools, and accelerate your tech career with our premium bilingual courses.",
    
    // Navigation
    navHome: "Home",
    navCourses: "Our Tracks",
    navTutor: "AI Tutor",
    navDebugger: "Code Debugger",
    navContact: "Connect",
    
    // Call to Action
    ctaExplore: "Explore Tracks",
    ctaChatTutor: "Chat with AI Tutor",
    
    // Quick Stats
    statStudents: "Active Students",
    statCourses: "Specialized Tracks",
    statEmployment: "Graduate Success Rate",
    
    // Tracks Section
    tracksHeader: "Our Educational Tracks",
    tracksSubtitle: "High-demand specializations with practical projects, expert mentorship, and official certifications.",
    durationLabel: "Duration",
    levelLabel: "Level",
    syllabusLabel: "Syllabus Overview",
    enrollBtn: "Learn More",
    
    // AI Tutor Chat
    tutorTitle: "Gemini AI Tech Tutor",
    tutorSubtitle: "Ask about Coding, SQL, Power Query, or AI. Ask in Arabic for a friendly Egyptian Dialect chat, or English for clean explanations!",
    tutorPlaceholder: "Type your tech question here... (e.g., 'What is a SQL Join?')",
    tutorSend: "Send",
    tutorIntro: "Hi there! I am your Codai Academy AI assistant. I can help you understand coding, databases, Power Query, and artificial intelligence. I can also review and debug your code! What are you learning today?",
    tutorDisclaimer: "Note: To keep you focused, I only answer questions related to Computer Science, Coding, Data Analysis, and AI.",
    quickPromptsLabel: "Quick Prompts",
    
    // Code Debugger Tab
    debuggerTitle: "Interactive Code Debugger",
    debuggerSubtitle: "Paste your SQL queries, Python scripts, or Power Query formulas below and get an automated professional code review.",
    codePlaceholder: "// Paste your Python, SQL, or Power Query code here...",
    debugAction: "Analyze & Fix Code",
    debuggingStatus: "Analyzing your code with Gemini...",
    debugResultLabel: "AI Tutor Analysis & Corrected Code:",
    
    // Contact & Social
    contactTitle: "Get in Touch",
    contactSubtitle: "Have questions about our schedule, tracks, or pricing? Drop us a message or visit our branch.",
    addressLabel: "Academy Address",
    addressValue: "El Galaa Square, El Dokki, Giza, Egypt",
    phoneLabel: "Phone / WhatsApp",
    hoursLabel: "Working Hours",
    hoursValue: "Daily: 11:00 AM - 9:00 PM",
    socialFollow: "Follow Us",
    whatsappTooltip: "Chat with us on WhatsApp",
    
    // Reviews Section
    navReviews: "Reviews",
    reviewsHeader: "What Our Students Say",
    reviewsSubtitle: "Real, positive stories from graduates who transformed their careers with Codai Academy.",
    addReviewBtn: "Add Your Review",
    ratingLabel: "Rating",
    namePlaceholder: "Your Name",
    reviewPlaceholder: "Share your experience...",
    submitReview: "Submit Review",
    reviewSuccess: "Thank you for your review! Our AI verified your feedback and rated it 5/5 stars! ⭐⭐⭐⭐⭐",
    reviewErrorMinStars: "Only positive 5-star reviews are allowed here! 😍 We've set it to 5 stars for you.",
    
    // Quick Suggestion Queries
    promptSqlJoin: "Explain SQL JOIN types simply.",
    promptPowerQuery: "How does Power Query handle null values?",
    promptAiModel: "What is the difference between supervised and unsupervised learning?",
    promptDebug: "Help me debug my code."
  },
  ar: {
    academyName: "كوداي أكاديمي",
    academySlogan: "تمكين الجيل القادم من قادة الذكاء الاصطناعي وتحليل البيانات",
    academySubtitle: "تعلم على أيدي خبراء الصناعة، واحترف أدوات المستقبل، وسرّع مسيرتك المهنية من خلال مساراتنا التعليمية المميزة ثنائية اللغة.",
    
    // Navigation
    navHome: "الرئيسية",
    navCourses: "المسارات التعليمية",
    navTutor: "المعلم الذكي",
    navDebugger: "مصحح الكود",
    navContact: "تواصل معنا",
    
    // Call to Action
    ctaExplore: "تصفح المسارات",
    ctaChatTutor: "تحدث مع المعلم الذكي",
    
    // Quick Stats
    statStudents: "طالب نشط",
    statCourses: "مسارات متخصصة",
    statEmployment: "نسبة توظيف الخريجين",
    
    // Tracks Section
    tracksHeader: "المسارات التعليمية المتاحة",
    tracksSubtitle: "تخصصات عالية الطلب في سوق العمل تركز على التطبيق العملي، ومشاريع حقيقية، وشهادات معتمدة.",
    durationLabel: "المدة",
    levelLabel: "المستوى",
    syllabusLabel: "محتوى المسار",
    enrollBtn: "تفاصيل المسار",
    
    // AI Tutor Chat
    tutorTitle: "مساعد الذكاء الاصطناعي الأكاديمي",
    tutorSubtitle: "اسألني في البرمجة، SQL، Power Query، أو الذكاء الاصطناعي. هجاوبك بالعامية المصرية الجميلة لو كلمتني عربي، وبالإنجليزي لو حابب!",
    tutorPlaceholder: "اكتب سؤالك البرمجي هنا... (مثال: 'يعني إيه SQL Join؟')",
    tutorSend: "إرسال",
    tutorIntro: "أهلاً بيك يا بطل! أنا المساعد الذكي الخاص بكوداي أكاديمي. هنا عشان أساعدك تفهم البرمجة، وقواعد البيانات، والـ Power Query، والذكاء الاصطناعي، وكمان أصححلك الكود بتاعك! حابب نبدأ بإيه النهاردة؟",
    tutorDisclaimer: "ملاحظة: لضمان تركيزك، أنا مصمم للإجابة فقط على الأسئلة المتعلقة بعلوم الحاسب، تحليل البيانات، والذكاء الاصطناعي.",
    quickPromptsLabel: "أسئلة سريعة مجهزة لك",
    
    // Code Debugger Tab
    debuggerTitle: "المصحح التفاعلي للأكواد",
    debuggerSubtitle: "ألصق كود SQL أو Python أو معادلات Power Query هنا للحصول على مراجعة فورية وتصحيح للأخطاء من المعلم الذكي.",
    codePlaceholder: "-- الصق كود SQL أو Python أو الكود المراد تصحيحه هنا...",
    debugAction: "تحليل وتصحيح الكود",
    debuggingStatus: "جاري تحليل الكود وتصحيحه بواسطة الذكاء الاصطناعي...",
    debugResultLabel: "تحليل وتصحيح المعلم الذكي:",
    
    // Contact & Social
    contactTitle: "تواصل معنا",
    contactSubtitle: "عندك استفسار عن المواعيد، المسارات، أو الأسعار؟ ابعتلنا رسالة أو شرفنا بالزيارة في فرعنا.",
    addressLabel: "عنوان الأكاديمية",
    addressValue: "ميدان الجلاء، الدقي، الجيزة، مصر",
    phoneLabel: "الهاتف / واتساب",
    hoursLabel: "مواعيد العمل",
    hoursValue: "يومياً: 11:00 صباحاً - 9:00 مساءً",
    socialFollow: "تابعنا على منصاتنا",
    whatsappTooltip: "تواصل معنا مباشرة عبر واتساب",
    
    // Reviews Section
    navReviews: "الآراء والريفيوهات",
    reviewsHeader: "آراء طلابنا (ريفيوهات)",
    reviewsSubtitle: "قصص حقيقية وإيجابية من خريجينا اللي غيروا مسارهم المهني مع كوداي أكاديمي.",
    addReviewBtn: "أضف تقييمك",
    ratingLabel: "التقييم",
    namePlaceholder: "اسمك الكريم",
    reviewPlaceholder: "شاركنا تجربتك المميزة مع الأكاديمية...",
    submitReview: "إرسال التقييم",
    reviewSuccess: "شكراً لتقييمك الرائع! ذكاؤنا الاصطناعي فحص تعليقك وصنّفه 5/5 نجوم! ⭐⭐⭐⭐⭐",
    reviewErrorMinStars: "مسموح فقط بالتقييمات الإيجابية 5 نجوم هنا! 😍 تم تعديل التقييم تلقائياً لـ 5 نجوم.",
    
    // Quick Suggestion Queries
    promptSqlJoin: "اشرح لي أنواع الـ SQL JOINs ببساطة.",
    promptPowerQuery: "إزاي الـ Power Query بيتعامل مع القيم الفاضية (Null)؟",
    promptAiModel: "إيه الفرق بين الـ Supervised والـ Unsupervised Learning؟",
    promptDebug: "ساعدني أصلح الكود ده."
  }
};

export const coursesData: Course[] = [
  {
    id: "data-analysis",
    title: {
      en: "Advanced Data Analysis Track",
      ar: "مسار تحليل البيانات المتقدم"
    },
    duration: {
      en: "12 Weeks (72 Hours)",
      ar: "12 أسبوع (72 ساعة)"
    },
    level: {
      en: "Beginner to Pro",
      ar: "من الصفر للاحتراف"
    },
    description: {
      en: "Master clean, structure, analyze, and visualize data. Become a professional Data Analyst using industrial-grade spreadsheet techniques, SQL, Power Query, and Power BI dashboards.",
      ar: "احترف تنظيف، هيكلة، تحليل، وعرض البيانات. ابدأ رحلتك لتكون محلل بيانات محترف باستخدام تقنيات الجداول المتقدمة، لغة SQL، والـ Power Query، وتصميم لوحات تحكم تفاعلية بـ Power BI."
    },
    syllabus: {
      en: [
        "Advanced Excel & Analytical Formulas",
        "Data Modeling & Power Query Basics to Advanced Transformations",
        "Relational Databases and SQL Queries (DDL, DML, Joins, Aggregations)",
        "Power BI Dashboards, DAX formulas, and Interactive Storytelling",
        "Real-world Graduation Project with industrial datasets"
      ],
      ar: [
        "الإكسيل المتقدم وصيغ التحليل الرياضي للبيانات",
        "هيكلة البيانات وأساسيات الـ Power Query والتحولات المتقدمة",
        "قواعد البيانات والـ SQL (الاستعلامات، الربط والدمج، التجميع والفرز)",
        "تصميم لوحات التحكم بـ Power BI، لغة DAX وعرض النتائج بشكل تفاعلي",
        "مشروع تخرج متكامل ومحاكي لشركات عالمية باستخدام بيانات حقيقية"
      ]
    },
    icon: "Database"
  },
  {
    id: "ai-python",
    title: {
      en: "Artificial Intelligence & Python Engineering",
      ar: "مسار هندسة الذكاء الاصطناعي وبايثون"
    },
    duration: {
      en: "16 Weeks (96 Hours)",
      ar: "16 أسبوع (96 ساعة)"
    },
    level: {
      en: "Intermediate",
      ar: "مستوى متوسط (يتطلب أساسيات)"
    },
    description: {
      en: "Dive into the world of AI programming. Learn Python, build Machine Learning models, understand Deep Learning architectures, and integrate state-of-the-art LLMs using Prompt Engineering.",
      ar: "انغمس في عالم برمجة الذكاء الاصطناعي. تعلم لغة بايثون، وابنِ نماذج التعلم الآلي (Machine Learning)، وافهم الشبكات العصبية العميقة، بالإضافة إلى توظيف النماذج اللغوية الكبيرة (LLMs)."
    },
    syllabus: {
      en: [
        "Python Programming & Object-Oriented Principles for AI",
        "Data Manipulation libraries (NumPy, Pandas, Matplotlib)",
        "Supervised and Unsupervised Machine Learning (Scikit-Learn)",
        "Neural Networks, Deep Learning & Computer Vision (TensorFlow / PyTorch)",
        "Prompt Engineering, API integrations, and building AI Agents"
      ],
      ar: [
        "برمجة بايثون ومبادئ البرمجة كائنية التوجه (OOP) للذكاء الاصطناعي",
        "مكتبات معالجة البيانات الرياضية ورسمها (NumPy, Pandas, Matplotlib)",
        "نماذج التعلم الآلي بإشراف وبدون إشراف باستخدام Scikit-Learn",
        "الشبكات العصبية والتعلم العميق ورؤية الحاسوب (Deep Learning & Computer Vision)",
        "هندسة الأوامر (Prompt Engineering)، ربط الـ APIs، وبناء الوكلاء الأذكياء"
      ]
    },
    icon: "Cpu"
  },
  {
    id: "cyber-security",
    title: {
      en: "Cybersecurity & Network Defense Track",
      ar: "مسار الأمن السيبراني وحماية الشبكات"
    },
    duration: {
      en: "14 Weeks (84 Hours)",
      ar: "14 أسبوع (84 ساعة)"
    },
    level: {
      en: "Beginner to Pro",
      ar: "من الصفر للاحتراف"
    },
    description: {
      en: "Protect digital assets and secure networks. Learn ethical hacking, system security auditing, network defense, penetration testing, and incident response to start your career in Cybersecurity.",
      ar: "احمِ الأصول الرقمية وأمّن الشبكات. تعلم الهكر الأخلاقي، وفحص ثغرات الأنظمة، وحماية الشبكات، واختبار الاختراق، والاستجابة للحوادث لتبدأ رحلتك المهنية في الأمن السيبراني."
    },
    syllabus: {
      en: [
        "Introduction to Linux & Network Fundamentals",
        "Information Security Standards & Cryptography Basics",
        "Ethical Hacking & Penetration Testing Methodologies",
        "System, Web Application, and API Security Auditing",
        "Security Operations Center (SOC) Fundamentals & Incident Response"
      ],
      ar: [
        "مقدمة في نظام لينكس (Linux) وأساسيات شبكات الحاسوب",
        "أمن المعلومات ومبادئ علم التشفير (Cryptography)",
        "الهكر الأخلاقي ومنهجيات اختبار الاختراق (Penetration Testing)",
        "فحص وحماية ثغرات الأنظمة وتطبيقات الويب والـ APIs",
        "أساسيات مراكز مراقبة الأمن (SOC) والاستجابة للحوادث الأمنية"
      ]
    },
    icon: "Shield"
  }
];

export const socialLinks = {
  whatsapp: "https://wa.me/201507810781",
  whatsappNumber: "01507810781",
  instagram: "https://www.instagram.com/reel/DZ7729ODvPc/?igsh=enZ4ZHN4aTZoZ3kx",
  tiktok: "https://www.tiktok.com/@codai.academy?_r=1&_t=ZS-97WmKlD4E0A",
  facebook: "https://www.facebook.com/share/19DobRWTxB/"
};
