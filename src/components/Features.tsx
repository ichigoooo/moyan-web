import { BookMarked, MessageCircle, Lightbulb } from 'lucide-react';

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

export default function Features() {
  return (
    <section className="py-24 px-6 bg-[#f5f1e8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c2416] mb-4 tracking-wide">
            不做电子教辅，做数字书房
          </h2>
          <div className="w-24 h-0.5 bg-[#c8553d] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 transition-all duration-300 hover:shadow-xl border border-[#d4c5b0]"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#c8553d] group-hover:h-full transition-all duration-500" />

              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-[#f5f1e8] flex items-center justify-center group-hover:bg-[#c8553d] transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#c8553d] group-hover:text-[#f5f1e8] transition-colors duration-300" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-2xl font-serif text-[#2c2416] mb-2 text-center">
                {feature.title}
              </h3>

              <p className="text-sm text-[#8b7355] text-center mb-4 italic">
                {feature.subtitle}
              </p>

              <p className="text-[#5a4a3a] mb-6 leading-relaxed text-center">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-[#6b5d4f] flex items-start">
                    <span className="text-[#c8553d] mr-2">·</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
