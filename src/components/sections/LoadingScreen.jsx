import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Pesandi Munasinghe";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 900);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.22),transparent)]" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Logo badge */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-bold text-lg shadow-[0_0_30px_rgba(59,130,246,0.20)]">
          PM
        </div>

        {/* Role badge */}
        <div className="rounded-full border border-blue-500/25 bg-blue-500/10 px-5 py-1.5 text-xs uppercase tracking-[0.3em] text-blue-300 font-medium">
          Web Developer
        </div>

        {/* Typing name */}
        <div className="text-center text-4xl md:text-5xl font-bold tracking-tight">
          <span className="gradient-text">{text}</span>
          <span className="animate-blink ml-1 text-blue-400 font-light">|</span>
        </div>

        {/* Loading bar */}
        <div className="w-48 overflow-hidden rounded-full bg-white/[0.06] border border-blue-500/15 p-[2px]">
          <div className="h-[3px] w-[45%] rounded-full bg-gradient-to-r from-blue-700 to-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.70)] animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};
