import { Users, GraduationCap, BookOpen } from 'lucide-react';

const scenarios = [
  {
    icon: Users,
    role: '家长',
    age: '35-50岁',
    description: '高知中产，重视素养教育',
    need: '希望孩子建立正确价值观，培养文化底蕴，但拒绝枯燥的应试教育',
    scene: '晚饭后收到推送："您的孩子今天和苏轼探讨了如何面对失败"'
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
    age: '大学生/青年',
    description: '有较强阅读习惯，对历史哲学感兴趣',
    need: '系统补课经典，理解《孙子兵法》《资治通鉴》等背后的思想结构',
    scene: '晚上阅读《孙子兵法》，顺便和"孙武"聊聊职场中的用兵之道'
  }
];

export default function UserScenarios() {
  return (
    <section className="py-24 px-6 bg-[#2c2416] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-[#c8553d] text-8xl font-serif">读</div>
        <div className="absolute bottom-20 left-20 text-[#c8553d] text-8xl font-serif">书</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#f5f1e8] mb-4 tracking-wide">
            为谁而设
          </h2>
          <div className="w-24 h-0.5 bg-[#c8553d] mx-auto mt-6" />
        </div>

        <div className="space-y-8">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-[#3d3020] border border-[#5a4a3a] p-8 transition-all duration-300 hover:border-[#c8553d] hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#c8553d] flex items-center justify-center">
                    <scenario.icon className="w-8 h-8 text-[#f5f1e8]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-baseline gap-4 mb-3">
                    <h3 className="text-2xl font-serif text-[#f5f1e8]">{scenario.role}</h3>
                    <span className="text-sm text-[#a89985]">{scenario.age}</span>
                    <span className="text-sm text-[#8b7355]">·</span>
                    <span className="text-sm text-[#a89985]">{scenario.description}</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-[#c8553d] font-serif">需求</span>
                      <p className="text-[#d4c5b0] leading-relaxed">{scenario.need}</p>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-[#c8553d] font-serif">场景</span>
                      <p className="text-[#a89985] leading-relaxed italic">"{scenario.scene}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
