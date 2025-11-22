import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Terminal, Minus } from 'lucide-react';
import { ChatMessage, ChatRole } from '../types';
import { generateChatResponse } from '../services/geminiService';

const FoxChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: ChatRole.MODEL,
      text: "Hi! I'm CyberFox 🦊. Ask me anything about this portfolio or cybersecurity topics!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: ChatRole.USER,
      text: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await generateChatResponse(history, userMessage.text);
      const botMessage: ChatMessage = {
        role: ChatRole.MODEL,
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center justify-center w-14 h-14 bg-fox-500 text-white rounded-full shadow-lg hover:bg-fox-600 hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">AI</span>
          <MessageSquare className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-cyber-800 border border-fox-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-fox-600 to-fox-500 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-full">
                <span className="text-lg">🦊</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">CyberFox Assistant</h3>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-fox-100">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded text-white/80 hover:text-white transition-colors"
                title="Minimize"
              >
                <Minus className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded text-white/80 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cyber-900/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    msg.role === ChatRole.USER
                      ? 'bg-fox-600 text-white rounded-br-none'
                      : 'bg-slate-700 text-gray-100 rounded-bl-none border border-slate-600'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 text-fox-400 rounded-2xl rounded-bl-none px-4 py-2 shadow-sm border border-slate-600 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-cyber-800 border-t border-slate-700">
            <div className="relative flex items-center">
              <div className="absolute left-3 text-gray-400">
                <Terminal className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about security..."
                className="w-full bg-slate-900 text-white pl-9 pr-10 py-2.5 rounded-xl border border-slate-700 focus:border-fox-500 focus:ring-1 focus:ring-fox-500 outline-none text-sm placeholder-gray-500 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-1.5 bg-fox-500 text-white rounded-lg hover:bg-fox-600 disabled:opacity-50 disabled:hover:bg-fox-500 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-2">
                <span className="text-[10px] text-gray-500">Powered by Gemini 2.5 Flash</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FoxChat;