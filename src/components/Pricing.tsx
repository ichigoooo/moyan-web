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
    name: '私塾会员',
    price: '¥168',
    period: '每年',
    features: [
      '无限畅聊次数',
      '深度解读与幕后故事',
      '亲子成长周报',
      '优先体验新功能',
      '专属学习顾问',
      '智能笔记与回顾'
    ],
    cta: '开启私塾之旅',
    highlighted: true
  }
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-[#f5f1e8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c2416] mb-4 tracking-wide">
            择一而入
          </h2>
          <div className="w-24 h-0.5 bg-[#c8553d] mx-auto mt-6" />
          <p className="text-[#5a4a3a] mt-6 text-lg">
            高端教育的解药，文化格调的传承
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white p-10 transition-all duration-300 border-2 ${
                plan.highlighted
                  ? 'border-[#c8553d] shadow-2xl transform md:scale-105'
                  : 'border-[#d4c5b0] hover:border-[#c8553d] hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#c8553d] text-[#f5f1e8] px-6 py-1 text-sm flex items-center gap-2">
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
                className={`w-full py-4 text-lg font-light tracking-wider transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#c8553d] text-[#f5f1e8] hover:bg-[#a84632] shadow-lg'
                    : 'bg-[#f5f1e8] text-[#2c2416] border border-[#d4c5b0] hover:border-[#c8553d] hover:text-[#c8553d]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
