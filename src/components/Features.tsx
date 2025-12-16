import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookMarked, MessageCircle, Lightbulb, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: BookMarked,
    title: '沉浸式名篇阅读',
    subtitle: 'The Reader',
    description: '极简、留白、纸质感。精选传世名作，支持竖排横排，难字注音，让阅读回归本真。',
    details: ['20-30篇精选名作', '竹排横排自由切换', '生僻字注音标注', '极简注释不干扰']
  },
  {
    icon: MessageCircle,
    title: '作者亲授对话',
    subtitle: 'The Dialogue',
    description: '与苏轼聊豁达，与庄子聊自由，与诸葛亮聊责任。让千年前的智者成为你的人生导师。',
    details: ['伴读解惑实时对答', '自由辩论深度交流', 'AI还原作者人格', '多轮对话自然流畅']
  },
  {
    icon: Lightbulb,
    title: '课题与主题库',
    subtitle: 'Topic Driven',
    description: '从"读什么书"到"思考什么问题"。按情绪索引，按思想主题，找到属于你的经典药方。',
    details: ['情绪主题分类', '思想课题索引', '智能推荐书单', '阶段学习回顾']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
} as const;

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-[#f5f1e8] relative overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c2416] mb-6 tracking-wide">
            不做电子教辅，做<span className="text-[#c8553d]">数字书房</span>
          </h2>
          <p className="text-[#8b7355] text-lg max-w-2xl mx-auto">
            以“名篇古籍原文的深入阅读”为轴心，避免碎片化，回归经典本身。
          </p>
          <div className="w-24 h-0.5 bg-[#c8553d]/50 mx-auto mt-8" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-[#fffdf9] p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#e6dfcc] overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e6dfcc] group-hover:bg-[#c8553d] transition-colors duration-500" />

              <div className="mb-8 flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl bg-[#f5f1e8] flex items-center justify-center group-hover:bg-[#c8553d] transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#5a4a3a] group-hover:text-[#f5f1e8] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-4xl font-serif text-[#e6dfcc] font-bold group-hover:text-[#c8553d]/10 transition-colors">0{index + 1}</span>
              </div>

              <h3 className="text-2xl font-serif text-[#2c2416] mb-2 group-hover:text-[#c8553d] transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs font-medium text-[#8b7355] mb-6 tracking-widest uppercase opacity-70">
                {feature.subtitle}
              </p>

              <p className="text-[#5a4a3a] mb-8 leading-relaxed min-h-[4.5rem]">
                {feature.description}
              </p>

              <ul className="space-y-3 border-t border-[#e6dfcc] pt-6">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-[#6b5d4f] flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8553d]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronRight className="w-5 h-5 text-[#c8553d]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
