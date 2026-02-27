import { useState, useEffect, useRef } from "react";

function Counter({ target, duration = 1500, delay = 0 }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const step = target / (duration / 16);
      const interval = setInterval(() => {
        start += step;
        if (start >= target) { setValue(target); clearInterval(interval); }
        else setValue(Math.floor(start));
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return <>{value}</>;
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [headlightOn, setHeadlightOn] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
    setTimeout(() => setHeadlightOn(true), 800);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const lightX = mousePos.x * 100;
  const lightY = mousePos.y * 100;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden select-none"
      style={{
        background: "#1a1a1a",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Dynamic spotlight following mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-all duration-75"
        style={{
          background: `radial-gradient(ellipse 600px 500px at ${lightX}% ${lightY}%, rgba(234,234,234,0.06) 0%, transparent 70%)`,
        }}
      />

      {/* Road texture at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent, #434343 60%, #2a2a2a)" }}
        />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${8 + i * 12.5}%`,
              bottom: "24px",
              width: "8%",
              height: "4px",
              background: "#a4a4a4",
              opacity: 0.5,
              borderRadius: "2px",
            }}
          />
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#a4a4a4", opacity: 0.3 }} />
        <div className="absolute bottom-12 left-0 right-0 h-px" style={{ background: "#a4a4a4", opacity: 0.15 }} />
      </div>

      {/* Headlight beam */}
      {headlightOn && (
        <div
          className="pointer-events-none absolute z-0"
          style={{
            bottom: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "0",
            height: "0",
            filter: "blur(30px)",
            borderLeft: "180px solid transparent",
            borderRight: "180px solid transparent",
            borderBottom: "420px solid rgba(234,234,234,0.06)",
            opacity: headlightOn ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      )}

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-3xl w-full pb-32">

        {/* Top badge */}
        <div
          className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full text-xs tracking-[0.25em] uppercase font-semibold"
          style={{
            background: "rgba(164,164,164,0.1)",
            border: "1px solid rgba(164,164,164,0.2)",
            color: "#a4a4a4",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-10px)",
            transition: "all 0.6s ease 0.1s",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#d6d6d6",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          Let's Drive Navigation Error
        </div>

        {/* 404 heading */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          <h1
            className="font-black leading-none"
            style={{
              fontSize: "clamp(100px, 22vw, 200px)",
              letterSpacing: "-0.05em",
              background: "linear-gradient(160deg, #eaeaea 0%, #a4a4a4 50%, #434343 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 40px rgba(234,234,234,0.08))",
            }}
          >
            404
          </h1>
        </div>

        {/* Divider */}
        <div
          className="flex items-center gap-4 my-4"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "all 0.6s ease 0.4s",
          }}
        >
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #434343)" }} />
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ color: "#a4a4a4" }}>
            <circle cx="14" cy="14" r="12.5" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="14" cy="14" r="3" fill="currentColor"/>
            <line x1="14" y1="11" x2="14" y2="1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="11.4" y1="16.2" x2="3.5" y2="20.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="16.6" y1="16.2" x2="24.5" y2="20.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #434343)" }} />
        </div>

        {/* Message */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s ease 0.5s",
          }}
        >
          <h2 className="text-xl font-semibold mb-3 tracking-wide" style={{ color: "#eaeaea" }}>
            Looks like you took a wrong turn.
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#a4a4a4" }}>
            The page you're looking for has left the lot. It may have been moved,
            <br className="hidden sm:block" />
            removed, or never made it off the production line.
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-3 my-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s ease 0.65s",
          }}
        >
          {[
            { label: "Error Code", value: "404", suffix: "" },
            { label: "Miles Lost", value: 404, suffix: " mi" },
            { label: "Routes Available", value: 7, suffix: "+" },
          ].map(({ label, value, suffix }) => (
            <div
              key={label}
              className="py-4 px-3 rounded-lg text-center"
              style={{
                background: "rgba(67,67,67,0.3)",
                border: "1px solid rgba(164,164,164,0.1)",
              }}
            >
              <div className="text-2xl font-bold tracking-tight mb-1" style={{ color: "#eaeaea" }}>
                {typeof value === "number"
                  ? <><Counter target={value} delay={900} />{suffix}</>
                  : <>{value}{suffix}</>}
              </div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "#a4a4a4" }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s ease 0.8s",
          }}
        >
          <a
            href="/"
            className="px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-200"
            style={{ background: "#eaeaea", color: "#1a1a1a", boxShadow: "0 0 30px rgba(234,234,234,0.1)" }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(234,234,234,0.25)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#eaeaea";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(234,234,234,0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Back to Home
          </a>
          <a
            href="/cars"
            className="px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-200"
            style={{ background: "transparent", color: "#d6d6d6", border: "1px solid rgba(164,164,164,0.3)" }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(214,214,214,0.6)";
              e.currentTarget.style.background = "rgba(214,214,214,0.05)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(164,164,164,0.3)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Browse Our Fleet
          </a>
        </div>
      </div>

      {/* Car silhouette */}
      <div
        className="absolute z-30"
        style={{
          bottom: "38px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        <svg width="220" height="70" viewBox="0 0 220 70" fill="none">
          <ellipse cx="110" cy="67" rx="90" ry="5" fill="rgba(0,0,0,0.5)" />
          <path
            d="M20 44 C20 44 35 30 55 26 L80 20 C88 18 95 17 110 17 C125 17 132 18 140 20 L165 26 C185 30 200 44 200 44 L200 55 C200 57.2 198.2 59 196 59 L24 59 C21.8 59 20 57.2 20 55 Z"
            fill="#434343"
          />
          <path d="M65 26 L78 12 C82 7 90 5 110 5 C130 5 138 7 142 12 L155 26 Z" fill="#3a3a3a" />
          <path d="M80 24 L90 11 C93 8 100 7 110 7 L110 24 Z" fill="rgba(214,214,214,0.15)" />
          <path d="M140 24 L130 11 C127 8 120 7 110 7 L110 24 Z" fill="rgba(214,214,214,0.15)" />
          <line x1="110" y1="6" x2="110" y2="24" stroke="#2a2a2a" strokeWidth="1.5" />
          <circle cx="62" cy="57" r="14" fill="#1a1a1a" />
          <circle cx="158" cy="57" r="14" fill="#1a1a1a" />
          <circle cx="62" cy="57" r="11" fill="#2a2a2a" stroke="#a4a4a4" strokeWidth="1.5" />
          <circle cx="158" cy="57" r="11" fill="#2a2a2a" stroke="#a4a4a4" strokeWidth="1.5" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1={62 + Math.cos((angle * Math.PI) / 180) * 3}
              y1={57 + Math.sin((angle * Math.PI) / 180) * 3}
              x2={62 + Math.cos((angle * Math.PI) / 180) * 9}
              y2={57 + Math.sin((angle * Math.PI) / 180) * 9}
              stroke="#d6d6d6"
              strokeWidth="1"
              strokeLinecap="round"
            />
          ))}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1={158 + Math.cos((angle * Math.PI) / 180) * 3}
              y1={57 + Math.sin((angle * Math.PI) / 180) * 3}
              x2={158 + Math.cos((angle * Math.PI) / 180) * 9}
              y2={57 + Math.sin((angle * Math.PI) / 180) * 9}
              stroke="#d6d6d6"
              strokeWidth="1"
              strokeLinecap="round"
            />
          ))}
          <circle cx="62" cy="57" r="3" fill="#d6d6d6" />
          <circle cx="158" cy="57" r="3" fill="#d6d6d6" />
          <rect x="196" y="38" width="8" height="6" rx="2" fill="#eaeaea" opacity="0.9" />
          <rect x="196" y="38" width="8" height="6" rx="2" fill="#eaeaea" style={{ filter: "blur(4px)" }} opacity="0.6" />
          <rect x="16" y="38" width="7" height="5" rx="1.5" fill="#a4a4a4" opacity="0.7" />
          <line x1="108" y1="26" x2="108" y2="55" stroke="rgba(164,164,164,0.2)" strokeWidth="1" />
          <rect x="88" y="38" width="14" height="2.5" rx="1.25" fill="rgba(164,164,164,0.4)" />
          <path d="M25 40 Q110 36 195 40" stroke="rgba(214,214,214,0.12)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}