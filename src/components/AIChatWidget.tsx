import React, { useState, useRef, useEffect, useCallback } from "react";
import "./AIChatWidget.css";

const SITE_CONTEXT = `You are the friendly AI assistant for "Dashly" – a restaurant discovery platform in Baku, Azerbaijan. The platform lists local restaurants, their menus, opening hours, Google ratings, and lets users make reservations online. Key facts: Over 200 partner restaurants. Cuisine types: Italian, Asian, Turkish, Fast-food, Vegan, Seafood, Grill. Users can filter by rating, price range, distance and cuisine. Reservations are free and instant. Keep answers friendly, concise, and always offer to help further. Always respond in the same language the user writes in.`;

type Message = { role: "user" | "assistant"; content: string };
type Weather = { temp: number | null; description: string; humidity: number | null };

const QUICK_PROMPTS = [
  "🍽️ İndi nə yeməliyəm?",
  "⭐ Ən yüksək reytinqli restoranlar",
  "🌦️ Bu hava üçün ən yaxşı yemək?",
  "ℹ️ Bu sayt nə edir?",
];

function BotAvatar({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill={`url(#grad-${id})`} />
      <path d="M13 24c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="20" cy="14" r="2.5" fill="#fff" />
      <circle cx="15" cy="22" r="1.2" fill="#fff" opacity=".7" />
      <circle cx="25" cy="22" r="1.2" fill="#fff" opacity=".7" />
    </svg>
  );
}

function TypingDots() {
  return (
    <span style={{ display: "inline-flex", gap: 4, alignItems: "center", height: 20 }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="ai-dot"
          style={{ animation: `aidot 1.2s ${i * 0.2}s infinite ease-in-out` }}
        />
      ))}
    </span>
  );
}

function Bubble({ msg }: { msg: Message }) {
  const isBot = msg.role === "assistant";
  return (
    <div className={`ai-bubble-row ${isBot ? "bot" : "user"}`}>
      {isBot && <BotAvatar id="bubble" />}
      <div className={`ai-bubble ${isBot ? "bot" : "user"}`}>
        {msg.content}
      </div>
    </div>
  );
}

const AIChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [pulse, setPulse] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    fetch("/api/ai/weather")
      .then((r) => r.json())
      .then(setWeather)
      .catch(() => null);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 120);
      if (messages.length === 0) {
        setMessages([{
          role: "assistant",
          content: "👋 Salam! Mən Dashly AI asistanıyam.\n\nYemək təklifləri, restoran reytinqləri və ya sayt haqqında istənilən sualı verə bilərsiniz!",
        }]);
      }
    }
  }, [open]);

  const sendMessage = useCallback(async (text?: string) => {
    const userText = (text ?? input).trim();
    if (!userText || loading) return;
    setInput("");

    const now = new Date();
    const hour = now.getHours();
    const timeLabel =
      hour < 6 ? "gecə" :
      hour < 11 ? "səhər" :
      hour < 14 ? "günorta" :
      hour < 18 ? "günorta üstü" :
      hour < 22 ? "axşam" : "gec axşam";

    const contextNote = `[Vaxt: ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} (${timeLabel}). ${
      weather
        ? `Hava: ${weather.description}, ${weather.temp}°C.`
        : "Hava məlumatı yoxdur."
    }]`;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userText },
    ];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          siteContext: SITE_CONTEXT,
          contextNote,
        }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...newMessages, {
        role: "assistant",
        content: "Bağlantı xətası — bir az sonra yenidən cəhd edin!",
      }]);
    } finally {
      setLoading(false);
    }
  }, [input, messages, loading, weather]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!open && (
        <button
          className={`ai-trigger ${pulse ? "pulse" : ""}`}
          onClick={() => setOpen(true)}
          title="AI Assistant"
        >
          <svg viewBox="0 0 36 36" width="32" height="32" fill="none">
            <path d="M10 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="11" r="3" fill="#fff" />
            <circle cx="12" cy="21" r="1.5" fill="#fff" opacity=".75" />
            <circle cx="24" cy="21" r="1.5" fill="#fff" opacity=".75" />
            <path d="M14 29h8M18 29v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="ai-badge">AI</span>
        </button>
      )}

      {open && (
        <div className="ai-panel">
          <div className="ai-header">
            <BotAvatar id="header" />
            <div style={{ flex: 1 }}>
              <div className="ai-header-name">Dashly AI</div>
              <div className="ai-header-status">
                <span className="ai-header-dot" />
                Online
              </div>
            </div>
            {weather && weather.temp !== null && (
              <div className="ai-header-weather">
                <div>{weather.temp}°C</div>
                <div>{weather.description}</div>
              </div>
            )}
            <button className="ai-close" onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="ai-messages">
            {messages.map((m, i) => (
              <Bubble key={i} msg={m} />
            ))}
            {loading && (
              <div className="ai-typing">
                <BotAvatar id="loading" />
                <div className="ai-typing-bubble">
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.filter((m) => m.role === "user").length === 0 && (
            <div className="ai-quick-wrap">
              {QUICK_PROMPTS.map((p) => (
                <button
                  key={p}
                  className="ai-quick"
                  onClick={() => sendMessage(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          <div className="ai-input-row">
            <textarea
              ref={inputRef}
              className="ai-input"
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Sual yazın…"
              onInput={(e) => {
                const t = e.target as HTMLTextAreaElement;
                t.style.height = "auto";
                t.style.height = Math.min(t.scrollHeight, 100) + "px";
              }}
            />
            <button
              className="ai-send"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="ai-footer">Powered by Claude AI · Dashly</div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;