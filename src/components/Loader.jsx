import { useEffect, useState } from "react";
export default function Loader() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}, transparent)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative w-24 h-24">
          <div
            className="absolute inset-0 rounded-2xl border-2 border-blue-500/40 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute inset-2 rounded-xl border-2 border-violet-500/40 animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          />
          <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-2xl font-black">
            UZ
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-wider text-white mb-1">
            USAMA ZULFIQAR
          </h1>
          <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
            Portfolio Loading...
          </p>
        </div>
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-gray-500 text-xs">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </div>
    </div>
  );
}
