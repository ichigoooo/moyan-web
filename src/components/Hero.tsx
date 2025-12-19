import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Sparkles, Send } from 'lucide-react';


export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f1e8]">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6dfcc] via-[#f5f1e8] to-[#f5f1e8] opacity-80" />

      {/* Animated Background Characters */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-20 -left-20 text-[#2c2416] text-[20rem] font-serif blur-sm"
        >
          墨
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 -right-20 text-[#2c2416] text-[20rem] font-serif blur-sm"
        >
          言
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          style={{ y, opacity }}
          className="text-center lg:text-left pt-20 lg:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e6dfcc]/50 border border-[#d4c5b0] mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#c8553d]" />
            <span className="text-[#8b7355] text-sm tracking-widest font-medium">墨言APP：AI 驱动的数字书房</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#2c2416] mb-6 tracking-tight leading-tight"
          >
            <span className="block">读其书，</span>
            <span className="block text-[#c8553d]">想见其为人</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#5a4a3a] mb-12 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            让经典不再是死去的文字，而是与千古圣哲跨越时空的<span className="border-b-2 border-[#c8553d]/30 pb-1">灵魂对话</span>。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="group relative px-8 py-4 bg-[#2c2416] text-[#f5f1e8] text-lg rounded-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                即刻体验
                <BookOpen className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-[#c8553d] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>

            <button className="px-8 py-4 bg-transparent border border-[#8b7355] text-[#5a4a3a] text-lg rounded-lg hover:bg-[#e6dfcc]/30 transition-colors">
              了解更多
            </button>
          </motion.div>
        </motion.div>

        {/* Right Visual: Interactive Chat Demo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full max-w-md mx-auto h-[600px] bg-white/40 backdrop-blur-sm rounded-3xl border border-[#d4c5b0] p-6 shadow-2xl skew-y-0 hover:skew-y-1 transition-transform duration-700">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#d4c5b0]/50 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2c2416] flex items-center justify-center text-[#f5f1e8] font-serif text-xl border-2 border-[#c8553d]">苏</div>
                <div>
                  <h3 className="text-[#2c2416] font-serif font-bold">苏东坡</h3>
                  <p className="text-xs text-[#8b7355]">北宋 · 黄州</p>
                </div>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            {/* Chat Area */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#2c2416] flex-shrink-0 flex items-center justify-center text-[#f5f1e8] text-xs">苏</div>
                <div className="bg-[#f5f1e8] p-4 rounded-2xl rounded-tl-none border border-[#d4c5b0] shadow-sm">
                  <p className="text-[#2c2416] text-sm leading-relaxed font-serif">
                    “其实人生哪里没有风雨呢？那时雨大得很，同行的人都觉得狼狈，我却觉得这雨打在竹林的声音甚是好听。”
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="flex gap-3 flex-row-reverse"
              >
                <div className="w-8 h-8 rounded-full bg-[#c8553d] flex-shrink-0 flex items-center justify-center text-white text-xs">我</div>
                <div className="bg-[#2c2416] p-4 rounded-2xl rounded-tr-none shadow-md">
                  <p className="text-[#f5f1e8] text-sm leading-relaxed">
                    先生真是旷达。可若我正当你那般境地，只怕是笑不出来的。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#2c2416] flex-shrink-0 flex items-center justify-center text-[#f5f1e8] text-xs">苏</div>
                <div className="bg-[#f5f1e8] p-4 rounded-2xl rounded-tl-none border border-[#d4c5b0] shadow-sm">
                  <p className="text-[#2c2416] text-sm leading-relaxed font-serif">
                    “哈哈哈，且去吃茶！风雨过了便是晴天，心若无尘，何处不是归途？”
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Input Placeholder */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-2 items-center bg-white p-3 rounded-xl border border-[#d4c5b0] shadow-inner">
                <span className="text-[#8b7355] text-sm flex-1">问问先生怎么看...</span>
                <button className="p-2 rounded-lg bg-[#c8553d] text-white hover:bg-[#a84632] transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements around phone/chat */}
          <div className="absolute -z-10 top-1/2 -right-12 w-64 h-64 bg-[#c8553d]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -z-10 -bottom-12 -left-12 w-48 h-48 bg-[#2c2416]/5 rounded-full blur-2xl" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f1e8] to-transparent pointer-events-none" />
    </section>
  );
}
