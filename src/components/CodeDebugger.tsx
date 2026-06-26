import React, { useState } from "react";
import { Code2, Play, RefreshCw, Clipboard, Check, AlertCircle } from "lucide-react";
import { translations } from "../data";
import { Language } from "../types";
import { motion } from "motion/react";

interface CodeDebuggerProps {
  language: Language;
}

export default function CodeDebugger({ language }: CodeDebuggerProps) {
  const t = translations[language];
  const [code, setCode] = useState("");
  const [techType, setTechType] = useState("SQL");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleDebugCode = async () => {
    if (!code.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    const promptMessage = `Please analyze, review, and debug the following ${techType} code.
Identify any errors (syntax or logical), suggest performance optimizations or best practices, and provide the fully corrected, clean, functional version of the code.

Code to analyze:
\`\`\`${techType.toLowerCase()}
${code}
\`\`\``;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: promptMessage }],
          language: language,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process code. Please try again.");
      }

      const data = await response.json();
      setResult(data.reply);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during analyzing code.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codePresets = {
    SQL: "SELECT employee_id, first_name, salary,\n       AVG(salary) OVER(PARTITION BY department_id) as dept_avg\nFROM employees\nWHERE salary > dept_avg -- This has a logical error because WHERE runs before window functions!",
    Python: "def calculate_average(numbers):\n    total = 0\n    for n in numbers:\n        total += n\n    return total / len(numbers) # What happens if the list is empty? Please handle dividing by zero",
    "Power Query / M": "let\n    Source = Excel.CurrentWorkbook(){[Name=\"SalesData\"]}[Content],\n    FilterNulls = Table.SelectRows(Source, each [Revenue] <> null)\n    // Suggest how to replace nulls instead of just filtering them out\nin\n    FilterNulls"
  };

  const applyPreset = (tech: keyof typeof codePresets) => {
    setTechType(tech);
    setCode(codePresets[tech]);
  };

  return (
    <div
      className="rounded-2xl border border-violet-100 bg-white overflow-hidden flex flex-col h-[600px] shadow-sm"
      id="code-debugger-container"
    >
      {/* Header */}
      <div className="bg-violet-50/40 px-6 py-4 border-b border-violet-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-violet-100/50 p-2.5 border border-violet-200">
            <Code2 className="h-5 w-5 text-brand-cyan" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">
              {t.debuggerTitle}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Instant SQL, Python & Power Query Reviewer
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/20" id="debugger-workspace">
        {/* Technology Selector & Presets */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Select Language / Tool:
          </label>
          <div className="flex flex-wrap gap-2">
            {["SQL", "Python", "Power Query / M"].map((tech) => (
              <button
                key={tech}
                onClick={() => {
                  setTechType(tech);
                  if (tech in codePresets) {
                    applyPreset(tech as keyof typeof codePresets);
                  }
                }}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all border ${
                  techType === tech
                    ? "bg-violet-50 border-brand-cyan text-brand-cyan"
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                }`}
                id={`tech-selector-${tech}`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Input Textarea */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400 font-mono">CODE_INPUT_WINDOW</span>
            <button
              onClick={() => setCode("")}
              className="text-[10px] text-slate-400 hover:text-brand-cyan underline font-mono"
            >
              Clear
            </button>
          </div>
          <div className="relative rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={t.codePlaceholder}
              className="w-full h-44 bg-transparent border-0 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 font-mono text-xs sm:text-sm leading-relaxed resize-none"
              id="debugger-textarea"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={handleDebugCode}
            disabled={!code.trim() || isLoading}
            className="flex items-center gap-2 rounded-xl bg-brand-cyan hover:bg-violet-900 text-white px-5 py-3 text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            id="debug-submit-btn"
          >
            {isLoading ? (
              <RefreshCw className="h-4.5 w-4.5 animate-spin" />
            ) : (
              <Play className="h-4.5 w-4.5 fill-current" />
            )}
            <span>{isLoading ? t.debuggingStatus : t.debugAction}</span>
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 flex items-center gap-2.5 text-xs text-rose-600">
            <AlertCircle className="h-4.5 w-4.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Result Area */}
        {result && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                {t.debugResultLabel}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 px-2.5 py-1 text-xs text-slate-600 font-medium transition-all shadow-sm"
                id="copy-result-btn"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-violet-600" />
                    <span className="text-violet-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Clipboard className="h-3.5 w-3.5" />
                    <span>Copy Response</span>
                  </>
                )}
              </button>
            </div>
            <div className="rounded-xl border border-violet-100 bg-white p-5 overflow-x-auto text-sm text-slate-800 whitespace-pre-wrap font-sans select-text shadow-sm">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
