'use client';

import { useState, useRef, useEffect } from 'react';
import { aiProjectInquiryAssistant } from '@/ai/flows/ai-project-inquiry-assistant';

// ─── Types ───────────────────────────────────────────────────────────────────

type Message = {
    role: 'user' | 'assistant';
    content: string;
    suggestedActions?: string[];
};

// ─── Real API call ──────────────────
async function sendMessage(
    query: string,
    history: { role: 'user' | 'assistant'; content: string }[]
) {
    const result = await aiProjectInquiryAssistant({
        query,
        conversationHistory: history,
    });
    
    return {
        answer: result.answer,
        suggestedActions: result.suggestedActions,
    };
}

// ─── Typing Indicator ────────────────────────────────────────────────────────

function TypingIndicator() {
    return (
        <div className="sp-msg-row bot" style={{ marginBottom: '16px' }}>
            <div className="sp-msg-avatar bot">CEZ</div>
            <div className="sp-bubble bot" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center', height: '8px' }}>
                    <span style={{ width: '6px', height: '6px', background: 'hsl(var(--foreground))', animation: 'sp-pulse 1.5s infinite', animationDelay: '0ms' }} />
                    <span style={{ width: '6px', height: '6px', background: 'hsl(var(--foreground))', animation: 'sp-pulse 1.5s infinite', animationDelay: '300ms' }} />
                    <span style={{ width: '6px', height: '6px', background: 'hsl(var(--foreground))', animation: 'sp-pulse 1.5s infinite', animationDelay: '600ms' }} />
                </div>
            </div>
        </div>
    );
}

// ─── Cez Robot Trigger ───────────────────────────────────────────────────────

const IDLE_SAYINGS = [
    "I wonder what big pops Cesar is doing rn...",
    "Probably playing with his cats or something...",
    "Beep boop.",
    "I love a good CSS grid layout.",
    "01101000 01101001",
    "Did you know HTML isn't a programming language?",
    "My code is compiling... slowly.",
    "Are you gonna click me?",
    "Error 404: Coffee not found.",
    "Brutalism is cozy, actually."
];

const SCROLL_SAYINGS = [
    "Wheeeeeeee!",
    "Going down!",
    "Hold on to your pixels!",
    "Scroll faster!",
    "Wheee!"
];

function CezTrigger({ 
    isOpen, 
    onClick,
    introStage = 'done'
}: { 
    isOpen: boolean; 
    onClick: () => void;
    introStage?: 'loading' | 'wink' | 'playing' | 'flying' | 'done'
}) {
    const eyeContainerRef = useRef<HTMLDivElement>(null);
    const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
    const [isBlinking, setIsBlinking] = useState(false);
    const [saying, setSaying] = useState<string | null>(null);

    // Idle saying logic
    useEffect(() => {
        if (isOpen) {
            setSaying(null);
            return;
        }

        // Special intro sayings
        if (introStage === 'loading') { setSaying("Initializing..."); return; }
        if (introStage === 'wink') { setSaying("Systems Online! ;)"); return; }
        if (introStage === 'playing') { setSaying("VROOOOOM!"); return; }
        if (introStage === 'flying') { setSaying("Docking sequence..."); return; }
        if (introStage === 'done' && saying === "Docking sequence...") { 
            setSaying("Ready to help!"); 
            setTimeout(() => setSaying(null), 2000);
            return; 
        }
        
        const interval = setInterval(() => {
            if (introStage !== 'done') return;
            // 50% chance to say something
            if (Math.random() > 0.5) { 
                const randomSaying = IDLE_SAYINGS[Math.floor(Math.random() * IDLE_SAYINGS.length)];
                setSaying(randomSaying);
                setTimeout(() => {
                    setSaying(null);
                }, 4000);
            }
        }, 10000);
        
        return () => clearInterval(interval);
    }, [isOpen, introStage]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!eyeContainerRef.current || introStage !== 'done') return;
            const rect = eyeContainerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Calculate distance and angle
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            
            // Limit the maximum translation
            const maxOffset = 4;
            const angle = Math.atan2(deltaY, deltaX);
            const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 50, maxOffset);
            
            setEyeOffset({
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
            });
        };

        let scrollTimeout: NodeJS.Timeout;
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            // Blinking physics
            setIsBlinking(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => setIsBlinking(false), 200);

            // Fast scroll reaction
            if (isOpen) return;
            const currentScrollY = window.scrollY;
            const diff = Math.abs(currentScrollY - lastScrollY);
            
            if (diff > 150 && !saying) { 
                const randomSaying = SCROLL_SAYINGS[Math.floor(Math.random() * SCROLL_SAYINGS.length)];
                setSaying(randomSaying);
                setTimeout(() => setSaying(null), 3000);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        
        // Random blinking
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150);
        }, 4000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            clearInterval(blinkInterval);
        };
    }, []);

    return (
        <div className="relative">
            {saying && !isOpen && (
                <div className="cez-thought-bubble">
                    {saying}
                </div>
            )}
            <button 
                className={`sp-trigger float-slow ${isOpen ? 'active' : ''} ${(introStage === 'flying' || introStage === 'playing') ? 'is-flying' : ''}`} 
                onClick={onClick} 
                aria-label="Toggle SYS_CTRL Chat"
            >
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-highlight" />
                <div className="cez-face" ref={eyeContainerRef}>
                    {/* Jetpacks at the bottom */}
                    <div className="cez-jetpack left">
                        <div className="cez-booster" />
                    </div>
                    <div className="cez-jetpack right">
                        <div className="cez-booster" />
                    </div>

                    <div 
                        className="cez-eyes" 
                        style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                    >
                        <div className={`cez-eye ${isBlinking || (introStage === 'wink') ? 'blink' : ''}`} />
                        <div className={`cez-eye ${isBlinking ? 'blink' : ''}`} />
                    </div>
                    {isOpen ? (
                        <div className="cez-mouth-open" />
                    ) : (
                        <div className="cez-mouth" />
                    )}
                </div>
            </button>
        </div>
    );
}

// ─── Main Widget ─────────────────────────────────────────────────────────────

export default function SiteplasmsChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [introStage, setIntroStage] = useState<'loading' | 'wink' | 'playing' | 'flying' | 'done'>('loading');

    // Intro sequence
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroStage('wink'), 1200);
        const timer2 = setTimeout(() => setIntroStage('playing'), 2200);
        const timer3 = setTimeout(() => setIntroStage('flying'), 4200);
        const timer4 = setTimeout(() => setIntroStage('done'), 5500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content:
                "SYS_CTRL initialized. I am Cez. State your project parameters.",
            suggestedActions: [
                'Build a Web App',
                'Design System',
                'View Retainers',
            ],
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSend = async (text?: string) => {
        const query = (text ?? input).trim();
        if (!query || isLoading) return;

        const userMsg: Message = { role: 'user', content: query };
        const updatedMessages = [...messages, userMsg];
        setMessages(updatedMessages);
        setInput('');
        setIsLoading(true);

        // Keep only the last 10 messages for context to prevent server timeouts and payload limits
        const history = updatedMessages
            .slice(-11, -1) // -11 to include up to 10 previous messages, excluding the brand new one
            .map((m) => ({ role: m.role, content: m.content }));

        try {
            const result = await sendMessage(query, history);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: result.answer,
                    suggestedActions: result.suggestedActions,
                },
            ]);
        } catch (err) {
            console.error("CEZ_ERROR:", err);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content:
                        "ERR_CONNECTION: System failure. Check console for details or email cesar@siteplasm.com.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* ── Global styles injected inline for portability ── */}
            <style>{`
        .sp-chat * { box-sizing: border-box; }

        .sp-chat-bubble {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 10001;
          transition: all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: auto;
        }

        .sp-chat-bubble.is-intro {
          bottom: 50%;
          right: 50%;
          transform: translate(50%, 50%) scale(2.5);
          pointer-events: none;
        }

        .sp-chat-bubble.is-playing {
          animation: cez-airplane 2s ease-in-out forwards;
          pointer-events: none;
        }
        
        @keyframes cez-airplane {
          0% { bottom: 50%; right: 50%; transform: translate(50%, 50%) scale(2.5) rotate(0deg); }
          20% { bottom: 60%; right: 70%; transform: translate(50%, 50%) scale(1.8) rotate(-15deg); }
          40% { bottom: 40%; right: 30%; transform: translate(50%, 50%) scale(2.2) rotate(20deg); }
          60% { bottom: 70%; right: 40%; transform: translate(50%, 50%) scale(1.6) rotate(-10deg); }
          80% { bottom: 30%; right: 60%; transform: translate(50%, 50%) scale(2.0) rotate(5deg); }
          100% { bottom: 50%; right: 50%; transform: translate(50%, 50%) scale(2.5) rotate(0deg); }
        }
        
        @media (max-width: 480px) {
          .sp-chat-bubble.is-intro {
            transform: translate(50%, 50%) scale(1.5);
          }
          .sp-chat-bubble.is-wink {
            transform: translate(50%, 50%) scale(1.8);
          }
          @keyframes cez-airplane {
            0% { bottom: 50%; right: 50%; transform: translate(50%, 50%) scale(1.5) rotate(0deg); }
            50% { bottom: 60%; right: 40%; transform: translate(50%, 50%) scale(1.2) rotate(-10deg); }
            100% { bottom: 50%; right: 50%; transform: translate(50%, 50%) scale(1.5) rotate(0deg); }
          }
        }

        /* ── Robot Trigger ── */
        .cez-thought-bubble {
          position: absolute;
          bottom: calc(100% + 16px);
          right: 0;
          width: max-content;
          max-width: 220px;
          background: hsl(var(--background));
          border: 2px solid hsl(var(--foreground));
          padding: 8px 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: hsl(var(--foreground));
          box-shadow: 4px 4px 0px hsl(var(--foreground));
          animation: sp-fadeup 0.2s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 10000;
        }
        .cez-thought-bubble::after {
          content: '';
          position: absolute;
          bottom: -6px;
          right: 24px;
          width: 8px;
          height: 8px;
          background: hsl(var(--background));
          border-right: 2px solid hsl(var(--foreground));
          border-bottom: 2px solid hsl(var(--foreground));
          transform: rotate(45deg);
        }

        @keyframes sp-fadeup {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .sp-trigger {
          width: 64px;
          height: 64px;
          background: hsl(var(--background));
          border: 2px solid hsl(var(--foreground));
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 6px 6px 0px hsl(var(--foreground));
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .sp-trigger:active, .sp-trigger.active {
          transform: translate(4px, 4px);
          box-shadow: 2px 2px 0px hsl(var(--foreground));
        }

        .cez-face {
          width: 44px;
          height: 38px;
          background: hsl(var(--foreground));
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 8px;
          overflow: hidden;
          z-index: 2;
        }

        .cez-jetpack {
          position: absolute;
          width: 8px;
          height: 18px;
          background: hsl(var(--foreground));
          border: 1px solid hsl(var(--background));
          bottom: -10px;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .cez-jetpack.left { left: 8px; border-radius: 0 0 4px 4px; }
        .cez-jetpack.right { right: 8px; border-radius: 0 0 4px 4px; }

        .cez-booster {
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 10px;
          background: hsl(var(--highlight));
          filter: blur(1px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .is-flying .cez-booster {
          opacity: 1;
          animation: cez-flame 0.1s infinite alternate;
        }

        @keyframes cez-flame {
          from { height: 8px; opacity: 0.8; transform: translateX(-50%) scaleX(1); }
          to { height: 16px; opacity: 1; transform: translateX(-50%) scaleX(1.3); }
        }
        
        .cez-eyes {
          display: flex;
          gap: 12px;
          transition: transform 0.1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .cez-eye {
          width: 6px;
          height: 8px;
          background: hsl(var(--highlight));
          transition: height 0.1s ease;
        }
        .cez-eye.blink {
          height: 2px;
          transform: translateY(3px);
        }

        .cez-mouth {
          width: 12px;
          height: 2px;
          background: hsl(var(--background));
          margin-top: 8px;
          transition: all 0.2s ease;
        }
        .cez-mouth-open {
          width: 16px;
          height: 6px;
          background: hsl(var(--background));
          margin-top: 6px;
          transition: all 0.2s ease;
        }

        /* ── Chat Window ── */
        .sp-window {
          position: fixed;
          bottom: 110px;
          right: 32px;
          width: 380px;
          height: 600px;
          max-height: calc(100vh - 140px);
          z-index: 9999;
          background: hsl(var(--background));
          border: 2px solid hsl(var(--foreground));
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 8px 8px 0px hsl(var(--foreground));
          transform-origin: bottom right;
          transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .sp-window.hidden {
          opacity: 0;
          transform: scale(0.95) translateY(10px);
          pointer-events: none;
        }
        .sp-window.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .sp-header {
          padding: 16px;
          border-bottom: 2px solid hsl(var(--foreground));
          display: flex;
          align-items: center;
          gap: 12px;
          background: hsl(var(--foreground));
          color: hsl(var(--background));
        }
        .sp-avatar {
          width: 32px;
          height: 32px;
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: bold;
          color: hsl(var(--foreground));
        }
        .sp-header-info { flex: 1; font-family: 'JetBrains Mono', monospace; }
        .sp-header-name {
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .sp-header-status {
          font-size: 9px;
          color: hsl(var(--muted));
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .sp-status-dot {
          width: 6px;
          height: 6px;
          background: hsl(var(--highlight));
          box-shadow: 0 0 8px hsl(var(--highlight));
        }
        .sp-close {
          width: 32px;
          height: 32px;
          background: transparent;
          border: 1px solid hsl(var(--border));
          cursor: pointer;
          color: hsl(var(--background));
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
        }
        .sp-close:hover {
          background: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        .sp-messages {
          flex: 1;
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 0;
          background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231c1917' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E");
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--foreground)) hsl(var(--background));
        }
        .sp-messages::-webkit-scrollbar { width: 6px; }
        .sp-messages::-webkit-scrollbar-track { background: hsl(var(--background)); border-left: 1px solid hsl(var(--border)); }
        .sp-messages::-webkit-scrollbar-thumb { background: hsl(var(--foreground)); }

        @keyframes sp-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }

        .sp-msg-row {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          margin-bottom: 20px;
          animation: sp-fadeup 0.2s ease;
        }
        .sp-msg-row.user { flex-direction: row-reverse; }

        .sp-msg-avatar {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          font-family: 'JetBrains Mono', monospace;
          border: 1px solid hsl(var(--foreground));
        }
        .sp-msg-avatar.bot {
          background: hsl(var(--foreground));
          color: hsl(var(--background));
        }
        .sp-msg-avatar.user {
          background: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        .sp-bubble {
          max-width: 75%;
          padding: 12px 16px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          line-height: 1.6;
          border: 1px solid hsl(var(--foreground));
        }
        .sp-bubble.bot {
          background: hsl(var(--surface));
          color: hsl(var(--foreground));
          box-shadow: 2px 2px 0px rgba(0,0,0,0.05);
        }
        .sp-bubble.user {
          background: hsl(var(--foreground));
          color: hsl(var(--background));
        }

        .sp-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: -8px;
          margin-left: 44px;
          margin-bottom: 16px;
        }
        .sp-action-btn {
          padding: 6px 12px;
          background: hsl(var(--background));
          border: 1px solid hsl(var(--foreground));
          color: hsl(var(--foreground));
          font-size: 10px;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.15s ease;
          letter-spacing: 0.05em;
          box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
        }
        .sp-action-btn:hover {
          background: hsl(var(--highlight));
          color: hsl(var(--background));
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px rgba(0,0,0,0.2);
        }
        .sp-action-btn:active {
          transform: translate(2px, 2px);
          box-shadow: 0px 0px 0px rgba(0,0,0,0);
        }

        .sp-footer {
          padding: 16px;
          border-top: 2px solid hsl(var(--foreground));
          display: flex;
          gap: 12px;
          background: hsl(var(--background));
        }
        .sp-input {
          flex: 1;
          background: transparent;
          border: 1px solid hsl(var(--border));
          padding: 12px;
          font-size: 13px;
          color: hsl(var(--foreground));
          font-family: 'Plus Jakarta Sans', sans-serif;
          outline: none;
          transition: border-color 0.15s ease;
        }
        .sp-input:focus { border-color: hsl(var(--highlight)); border-width: 1px; }

        .sp-send {
          width: 44px;
          height: 44px;
          background: hsl(var(--foreground));
          border: 1px solid hsl(var(--foreground));
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(var(--background));
          transition: all 0.1s ease;
          flex-shrink: 0;
        }
        .sp-send:hover:not(:disabled) {
          background: hsl(var(--highlight));
          color: hsl(var(--background));
        }
        .sp-send:active:not(:disabled) {
          transform: translate(2px, 2px);
        }
        .sp-send:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 480px) {
          .sp-window { 
            width: 100vw; 
            height: 100%;
            max-height: 100%;
            right: 0; 
            bottom: 0; 
            border: none;
            box-shadow: none;
            transform-origin: bottom center;
          }
          .sp-window.visible {
             transform: translateY(0);
          }
          .sp-window.hidden {
             transform: translateY(100%);
          }
          .sp-chat-bubble { right: 16px; bottom: 16px; }
          .sp-trigger { width: 52px; height: 52px; }
        }
      `}</style>

            <div className={`sp-chat sp-chat-bubble ${introStage !== 'done' ? 'is-intro' : ''} ${introStage === 'wink' ? 'is-wink' : ''} ${introStage === 'playing' ? 'is-playing' : ''}`}>
                <CezTrigger introStage={introStage} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

                {/* ── Chat Window ── */}
                <div className={`sp-window ${isOpen ? 'visible' : 'hidden'}`}>
                    {/* Header */}
                    <div className="sp-header">
                        <div className="sp-avatar">CEZ</div>
                        <div className="sp-header-info">
                            <div className="sp-header-name">SYS_CTRL Interface</div>
                            <div className="sp-header-status">
                                <span className="sp-status-dot" />
                                Optimal Execution
                            </div>
                        </div>
                        <button className="sp-close" onClick={() => setIsOpen(false)}>
                            X
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="sp-messages" data-lenis-prevent>
                        {messages.map((msg, i) => (
                            <div key={i}>
                                <div className={`sp-msg-row ${msg.role}`}>
                                    <div className={`sp-msg-avatar ${msg.role === 'assistant' ? 'bot' : 'user'}`}>
                                        {msg.role === 'assistant' ? 'CEZ' : 'USR'}
                                    </div>
                                    <div className={`sp-bubble ${msg.role === 'assistant' ? 'bot' : 'user'}`}>
                                        {msg.content}
                                    </div>
                                </div>
                                {msg.role === 'assistant' && msg.suggestedActions && i === messages.length - 1 && (
                                    <div className="sp-actions">
                                        {msg.suggestedActions.map((action, j) => (
                                            <button
                                                key={j}
                                                className="sp-action-btn"
                                                onClick={() => handleSend(action)}
                                                disabled={isLoading}
                                            >
                                                {action}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {isLoading && <TypingIndicator />}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input */}
                    <div className="sp-footer">
                        <input
                            ref={inputRef}
                            className="sp-input"
                            placeholder="Input command..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={isLoading}
                        />
                        <button
                            className="sp-send"
                            onClick={() => handleSend()}
                            disabled={isLoading || !input.trim()}
                            aria-label="Execute"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}