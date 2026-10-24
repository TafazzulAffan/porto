import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, X, Send, Sparkles, User, RefreshCw, MessageSquare
} from 'lucide-react';
import { samplePromptsForHR, personalInfo } from '../data/portfolioData';

interface AiAssistantWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export const AiAssistantWidget: React.FC<AiAssistantWidgetProps> = ({
  isOpen,
  onClose,
  darkMode
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'ai',
      text: `Halo HRD & Recruiter! 👋 Saya adalah Virtual AI Assistant Tafazzul Affan (Lulusan S1 Teknik Informatika UNESA). Ada yang ingin Anda tanyakan mengenai kualifikasi, pengalaman proyek, atau skill teknis Tafazzul?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      // Build history payload for Gemini endpoint
      const historyPayload = messages.map(m => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: historyPayload
        })
      });

      const data = await res.json();

      const aiReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || data.error || 'Maaf, terjadi kesalahan saat menghubungi AI Assistant.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: `Tafazzul Affan adalah lulusan S1 Teknik Informatika UNESA dengan keahlian utama dalam React, TypeScript, Node.js, Express, dan PostgreSQL. Beliau siap diproses untuk posisi Full Stack Developer. Silakan hubungi via email: ${personalInfo.email}.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Floating Chat Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className={`relative w-full max-w-2xl h-[600px] rounded-3xl border shadow-2xl overflow-hidden z-10 flex flex-col ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-4 sm:p-5 text-white flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <Bot className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg tracking-tight flex items-center gap-2">
                  <span>Ask Tafazzul AI Assistant</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-white">
                    ONLINE
                  </span>
                </h3>
                <p className="text-xs text-blue-100 font-medium">
                  Tanyakan apapun seputar skill, proyek & pengalaman Tafazzul (UNESA)
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              id="ai-assistant-close-btn"
              className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sample Chips for HRDs */}
          <div className={`p-3 border-b flex items-center gap-2 overflow-x-auto flex-shrink-0 ${
            darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className="text-[11px] font-bold text-indigo-400 flex items-center gap-1 flex-shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Saran Pertanyaan HRD:</span>
            </span>
            {samplePromptsForHR.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className={`px-3 py-1 rounded-xl text-xs font-medium whitespace-nowrap transition-all border flex-shrink-0 ${
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="p-2 rounded-2xl bg-indigo-600 text-white h-fit mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none shadow-md'
                    : darkMode
                    ? 'bg-slate-800 text-slate-200 border border-slate-700/80 rounded-tl-none'
                    : 'bg-slate-100 text-slate-800 border border-slate-200/80 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className={`block text-[10px] mt-1 text-right ${
                    msg.sender === 'user' ? 'text-blue-100' : darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="p-2 rounded-2xl bg-slate-800 text-white h-fit mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="p-2 rounded-2xl bg-indigo-600 text-white h-fit">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className={`rounded-2xl p-4 text-xs ${
                  darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                } rounded-tl-none flex items-center gap-2`}>
                  <RefreshCw className="w-4 h-4 animate-spin text-indigo-500" />
                  <span>AI Assistant sedang memproses jawaban...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <div className={`p-4 border-t flex-shrink-0 ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ketik pertanyaan untuk AI Assistant Tafazzul..."
                id="ai-assistant-input-field"
                className={`flex-1 px-4 py-3 rounded-2xl text-xs sm:text-sm border outline-none transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-white focus:border-indigo-500'
                    : 'bg-white border-slate-200 text-slate-900 focus:border-indigo-500 shadow-sm'
                }`}
              />

              <button
                type="submit"
                disabled={loading || !inputMessage.trim()}
                id="ai-assistant-send-btn"
                className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold disabled:opacity-50 transition-all shadow-md shadow-blue-500/20"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
