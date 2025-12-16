import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, GraduationCap, BookOpen, Quote } from 'lucide-react';

const scenarios = [
  {
    icon: Users,
    role: '家长',
    age: '35-50岁',
    description: '高知中产，重视素养教育',
    need: '不仅关注成绩，更希望古人智慧能滋养孩子的心性，在成长关键期赋予他们处世的格局与定力',
    scene: '看到孩子面对挫折时，竟能引用《定风波》自我开解，那是超越同龄人的成熟与豁达'
  },
  {
    icon: GraduationCap,
    role: '青少年',
    age: '10-18岁',
    description: '学业压力大，渴望被理解',
    need: '拒绝说教，希望以有趣的方式接触经典，与古人产生情感共鸣',
    scene: '读《定风波》不懂，点击苏轼头像："你当时真的没带伞吗？"'
  },
  {
    icon: BookOpen,
    role: '进阶学习者',
    age: '大学生和高知群体',
    description: '有较强阅读习惯，对历史哲学感兴趣',
    need: '系统补课经典，理解《孙子兵法》《资治通鉴》等背后的思想结构',
    scene: '晚上阅读《孙子兵法》，顺便和"孙武"聊聊职场中的用兵之道'
  }
];

export default function UserScenarios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-[#2c2416] relative overflow-hidden text-[#f5f1e8]">
      {/* Texture: Subtle wood grain or paper fiber overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 right-10 text-[#f5f1e8] text-9xl font-serif leading-none">读</div>
        <div className="absolute bottom-20 left-20 text-[#f5f1e8] text-9xl font-serif leading-none">人</div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 tracking-wide text-[#f5f1e8]">
            <span className="text-[#c8553d] mr-2">/</span>
            为谁而设
            <span className="text-[#c8553d] ml-2">/</span>
          </h2>
          <p className="text-[#a89985] font-light">
            不仅是工具，更是三代人的精神栖息地
          </p>
        </motion.div>

        <div className="grid gap-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-[#3d3020]/50 backdrop-blur-sm border border-[#5a4a3a] p-8 md:p-10 hover:bg-[#3d3020] hover:border-[#c8553d] transition-all duration-300 rounded-lg overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#c8553d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#c8553d] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <scenario.icon className="w-8 h-8 text-[#f5f1e8]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="flex flex-wrap items-baseline gap-4 border-b border-[#5a4a3a] pb-4 group-hover:border-[#c8553d]/30 transition-colors">
                    <h3 className="text-2xl font-serif text-[#f5f1e8] font-bold">{scenario.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-[#a89985]">
                      <span className="bg-[#2c2416] px-2 py-0.5 rounded text-[#c8553d]">{scenario.age}</span>
                      <span>{scenario.description}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <span className="block text-[#c8553d] font-serif text-sm mb-2 opacity-80">核心诉求</span>
                      <p className="text-[#d4c5b0] leading-relaxed font-light">{scenario.need}</p>
                    </div>

                    <div className="bg-[#2c2416]/50 p-4 rounded-lg border-l-2 border-[#8b7355] group-hover:border-[#c8553d] transition-colors">
                      <div className="flex gap-2">
                        <Quote className="w-4 h-4 text-[#8b7355] flex-shrink-0" />
                        <p className="text-[#a89985] text-sm italic leading-relaxed">
                          {scenario.scene}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
