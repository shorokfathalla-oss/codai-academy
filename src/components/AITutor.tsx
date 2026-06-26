import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Sparkles, AlertCircle, Bot, User, HelpCircle } from "lucide-react";
import { translations } from "../data";
import { Message, Language } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface AITutorProps {
  language: Language;
}

export default function AITutor({ language }: AITutorProps) {
  const t = translations[language];
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      role: "model",
      content: t.tutorIntro,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setError(null);
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    // Append user message
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          language: language,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI Tutor. Please try again.");
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Let's try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const quickSuggestions = [
    { label: t.promptSqlJoin, text: language === "en" ? "Explain SQL JOIN types simply." : "اشرح لي أنواع الـ SQL JOINs ببساطة." },
    { label: t.promptPowerQuery, text: language === "en" ? "How does Power Query handle null values?" : "إزاي الـ Power Query بيتعامل مع القيم الفاضية (Null)؟" },
    { label: t.promptAiModel, text: language === "en" ? "What is the difference between supervised and unsupervised learning?" : "إيه الفرق بين الـ Supervised والـ Unsupervised Learning؟" },
  ];

  return (
    <div
      className="rounded-2xl border border-violet-100 bg-white overflow-hidden flex flex-col h-[600px] shadow-sm"
      id="ai-tutor-container"
    >
      {/* Header */}
      <div className="bg-violet-50/40 px-6 py-4 border-b border-violet-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative rounded-xl bg-violet-100/50 p-2.5 border border-violet-200">
            <Bot className="h-5 w-5 text-brand-cyan" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-base sm:text-lg font-sans">
              {t.tutorTitle}
            </h3>
            <p className="text-[10px] text-slate-500 font-medium">Powered by Gemini</p>
          </div>
        </div>
        <div className="text-[10px] text-slate-400 max-w-[200px] text-right font-mono">
          CODAI_TUTOR_v2.5
        </div>
      </div>

      {/* Info Warning Banner */}
      <div className="bg-violet-50/10 px-4 py-2 border-b border-violet-100/40 flex items-center gap-2 text-[11px] text-slate-500">
        <AlertCircle className="h-3.5 w-3.5 text-brand-cyan flex-shrink-0" />
        <span className="truncate">{t.tutorDisclaimer}</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/20" id="chat-messages-area">
        <AnimatePresence initial={false}>
          {messages.map((msg) => {
            const isModel = msg.role === "model";
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 max-w-[85%] ${
                  isModel ? "" : "ml-auto flex-row-reverse"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${
                    isModel
                      ? "bg-violet-50 text-brand-cyan border-violet-100"
                      : "bg-slate-100 text-slate-600 border-slate-200"
                  }`}
                >
                  {isModel ? <Bot className="h-4.5 w-4.5" /> : <User className="h-4.5 w-4.5" />}
                </div>

                {/* Bubble */}
                <div className="flex flex-col">
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      isModel
                        ? "bg-white border border-slate-200 text-slate-800 rounded-tl-none"
                        : "bg-brand-cyan text-white rounded-tr-none font-medium"
                    }`}
                  >
                    {/* Render message formatting (handling simple bold & lists or code blocks) */}
                    <div className="whitespace-pre-wrap select-text font-sans">
                      {msg.content}
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 self-start font-mono px-1">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 max-w-[85%]">
            <div className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-violet-50 text-brand-cyan border border-violet-100">
              <Bot className="h-4.5 w-4.5" />
            </div>
            <div className="flex flex-col">
              <div className="rounded-2xl px-4 py-3 bg-white border border-slate-200 rounded-tl-none flex items-center gap-1.5 shadow-sm">
                <span className="h-2 w-2 bg-brand-cyan rounded-full animate-bounce"></span>
                <span className="h-2 w-2 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="h-2 w-2 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 flex items-center gap-2.5 text-xs text-rose-600">
            <AlertCircle className="h-4.5 w-4.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Quick suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 py-3 border-t border-slate-100 bg-slate-50/50">
          <p className="text-[10px] uppercase font-bold text-slate-500 mb-2 flex items-center gap-1">
            <HelpCircle className="h-3.5 w-3.5 text-slate-400" />
            <span>{t.quickPromptsLabel}</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {quickSuggestions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(item.text)}
                className="text-xs bg-white hover:bg-violet-50 text-slate-700 hover:text-brand-cyan rounded-lg px-3 py-2 border border-slate-200 hover:border-violet-100 transition-all text-left truncate max-w-full shadow-sm"
                id={`quick-suggestion-${idx}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input controls */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputValue);
        }}
        className="p-4 bg-white border-t border-slate-100 flex gap-2"
        id="chat-input-form"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={t.tutorPlaceholder}
          disabled={isLoading}
          className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan disabled:opacity-50"
          id="chat-text-input"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isLoading}
          className="rounded-xl bg-brand-cyan hover:bg-violet-900 text-white p-2.5 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          id="chat-send-btn"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
