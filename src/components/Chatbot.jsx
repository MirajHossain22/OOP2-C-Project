import React, { useEffect, useRef, useState } from 'react';
import { Bot, ChevronLeft, ChevronRight, Headphones, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { INITIAL_PRODUCTS, formatBDT } from '../data/products';

const starterMessage = { role: 'assistant', content: 'Hi 👋! How can I help you today?' };
const quickReplies = ['Track my order', 'Find a product', 'Return policy'];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([starterMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const [featuredProduct, setFeaturedProduct] = useState(0);
  const messagesEndRef = useRef(null);
  const product = INITIAL_PRODUCTS[featuredProduct];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (event, presetMessage) => {
    event?.preventDefault();
    const content = (presetMessage || input).trim();
    if (!content || isLoading) return;
    const nextMessages = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.slice(-12),
          products: INITIAL_PRODUCTS.map(({ name, price, stock, category }) => ({ name, price, stock, category })),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'The assistant is unavailable right now.');
      setMessages((current) => [...current, { role: 'assistant', content: data.message }]);
    } catch (error) {
      setMessages((current) => [...current, { role: 'assistant', content: error.message || 'Sorry, I could not answer right now.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const moveProduct = (direction) => {
    setFeaturedProduct((current) => (current + direction + INITIAL_PRODUCTS.length) % INITIAL_PRODUCTS.length);
  };

  return (
    <>
      {isOpen && (
        <section className="fixed bottom-24 right-4 z-[100] flex h-[min(640px,calc(100vh-7rem))] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[28px] border border-indigo-400/30 bg-[#070713] shadow-2xl shadow-indigo-950/70" aria-label="AURA AI assistant">
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-600/25 blur-3xl" />
          <header className="relative flex items-center justify-between border-b border-indigo-300/15 bg-[#0c1030]/95 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-900/60">
                <Bot className="h-5 w-5" /><span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0c1030] bg-emerald-400" />
              </div>
              <div><h2 className="text-sm font-bold text-white">AURA Assistant</h2><p className="text-[10px] text-indigo-200">Online · Store support</p></div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-xl p-2 text-indigo-200 transition-colors hover:bg-white/10 hover:text-white" aria-label="Close chat"><X className="h-4 w-4" /></button>
          </header>

          <div className="relative flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-[#090b20] to-[#070713] p-4" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex items-end gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' && <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white"><Bot className="h-3.5 w-3.5" /></div>}
                <div className={`max-w-[82%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${message.role === 'user' ? 'rounded-br-md bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-950/30' : 'rounded-bl-md border border-white/10 bg-white/[0.08] text-indigo-50'}`}>{message.content}</div>
              </div>
            ))}

            {messages.length === 1 && <div className="ml-8 space-y-2"><p className="text-[10px] font-semibold uppercase tracking-wider text-indigo-300">Quick replies</p><div className="flex flex-wrap gap-2">{quickReplies.map((reply) => <button key={reply} type="button" onClick={() => sendMessage(null, reply)} className="rounded-full border border-indigo-400/50 bg-indigo-500/10 px-3 py-1.5 text-[10px] font-semibold text-indigo-100 transition-colors hover:bg-indigo-500/25">{reply}</button>)}</div></div>}

            <div className="ml-8 rounded-2xl border border-indigo-300/15 bg-[#101431] p-3 shadow-lg shadow-black/20">
              <div className="mb-2 flex items-center justify-between"><span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-300"><Sparkles className="h-3 w-3" /> Featured pick</span><div className="flex gap-1"><button type="button" onClick={() => moveProduct(-1)} className="rounded-full bg-white/10 p-1 text-indigo-200 hover:bg-white/20" aria-label="Previous product"><ChevronLeft className="h-3 w-3" /></button><button type="button" onClick={() => moveProduct(1)} className="rounded-full bg-white/10 p-1 text-indigo-200 hover:bg-white/20" aria-label="Next product"><ChevronRight className="h-3 w-3" /></button></div></div>
              <div className="flex gap-3"><img src={product.image} alt={product.name} className="h-16 w-16 rounded-xl object-cover" /><div className="min-w-0"><p className="truncate text-xs font-bold text-white">{product.name}</p><p className="mt-1 text-[10px] text-indigo-200">{product.category}</p><p className="mt-1 font-mono text-xs font-bold text-fuchsia-300">{formatBDT(product.price)}</p></div></div>
              <button type="button" onClick={() => sendMessage(null, `Tell me about ${product.name}`)} className="mt-3 w-full rounded-lg border border-indigo-400/40 py-1.5 text-[10px] font-semibold text-indigo-100 hover:bg-indigo-500/15">Ask about this product</button>
            </div>

            {isLoading && <div className="flex items-end gap-2"><div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-500 text-white"><Bot className="h-3.5 w-3.5" /></div><div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.08] px-3.5 py-3"><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-300" /><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-300 [animation-delay:120ms]" /><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-300 [animation-delay:240ms]" /></div></div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="relative border-t border-indigo-300/15 bg-[#0c1030] p-3"><div className="flex items-center gap-2 rounded-2xl border border-indigo-400/40 bg-[#070713] px-3 py-2.5 shadow-inner shadow-indigo-950/40 focus-within:border-fuchsia-400"><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type your message..." className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-indigo-300/50" aria-label="Message AURA AI Assistant" /><button type="submit" disabled={!input.trim() || isLoading} className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 p-2 text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Send message"><Send className="h-3.5 w-3.5" /></button></div><div className="mt-2 flex items-center justify-between px-1 text-[9px] text-indigo-300/50"><span>AI-generated answers may be imperfect.</span><Headphones className="h-3 w-3" /></div></form>
        </section>
      )}

      <button type="button" onClick={() => setIsOpen((current) => !current)} className="group fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full border-2 border-indigo-300 bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-3 text-xs font-bold text-white shadow-xl shadow-indigo-950/80 transition-transform hover:scale-105" aria-label={isOpen ? 'Close AURA AI Assistant' : 'Open AURA AI Assistant'}><span className="absolute inset-1 rounded-full border border-white/30" />{isOpen ? <X className="relative h-4 w-4" /> : <MessageCircle className="relative h-4 w-4 text-white" />}<span className="relative">AI Chat</span></button>
    </>
  );
}
