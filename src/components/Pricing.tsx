import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: '免费体验',
    price: '¥0',
    period: '永久免费',
    features: [
      '阅读所有文章原文',
      '每日5次对话机会',
      '基础注释与释义',
      '阅读进度记录'
    ],
    cta: '立即体验',
    highlighted: false
  },
  {
    name: '私塾会员 (月付)',
    price: '¥19',
    period: '每月',
    features: [
      '无限畅聊次数',
      '深度解读与幕后故事',
      '优先体验新功能',
      '智能笔记与回顾'
    ],
    cta: '开启月度阅读',
    highlighted: false
  },
  {
    name: '私塾会员 (年付)',
    price: '¥168',
    period: '每年',
    features: [
      '无限畅聊次数',
      '深度解读与幕后故事',
      '优先体验新功能',
      '智能笔记与回顾',
      '年度专属徽章'
    ],
    cta: '开启年度私塾',
    highlighted: true
  }
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-[#f5f1e8] overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c2416] mb-4 tracking-wide">
            择一而入
          </h2>
          <div className="w-24 h-0.5 bg-[#c8553d] mx-auto mt-6" />
          <p className="text-[#5a4a3a] mt-6 text-lg">
            高端教育的解药，文化格调的传承
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-white p-10 transition-all duration-300 border-2 ${plan.highlighted
                ? 'border-[#c8553d] shadow-2xl transform md:scale-105 rounded-xl z-20'
                : 'border-[#d4c5b0] hover:border-[#c8553d] hover:shadow-xl rounded-xl z-10'
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#c8553d] text-[#f5f1e8] px-6 py-1 text-sm flex items-center gap-2 rounded-full shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  <span>推荐</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif text-[#2c2416] mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-light text-[#c8553d]">{plan.price}</span>
                  <span className="text-[#8b7355]">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#c8553d] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[#5a4a3a]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 text-lg font-light tracking-wider transition-all duration-300 rounded-lg overflow-hidden relative group ${plan.highlighted
                  ? 'bg-[#c8553d] text-[#f5f1e8] shadow-lg hover:shadow-xl'
                  : 'bg-[#f5f1e8] text-[#2c2416] border border-[#d4c5b0] hover:border-[#c8553d] hover:text-[#c8553d]'
                  }`}
              >
                <span className="relative z-10">{plan.cta}</span>
                {plan.highlighted && <div className="absolute inset-0 bg-[#a84632] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
