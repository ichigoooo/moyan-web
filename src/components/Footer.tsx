import { Mail, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2c2416] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif text-[#f5f1e8] mb-4">墨言</h3>
            <p className="text-[#a89985] leading-relaxed">
              让经典不再是死去的文字，而是鲜活的灵魂对话。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif text-[#f5f1e8] mb-4">产品</h4>
            <ul className="space-y-2 text-[#a89985]">
              <li className="hover:text-[#c8553d] transition-colors cursor-pointer">沉浸式阅读</li>
              <li className="hover:text-[#c8553d] transition-colors cursor-pointer">作者对话</li>
              <li className="hover:text-[#c8553d] transition-colors cursor-pointer">主题课题</li>
              <li className="hover:text-[#c8553d] transition-colors cursor-pointer">定价方案</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-[#f5f1e8] mb-4">联系我们</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#a89985]">
                <Mail className="w-5 h-5 text-[#c8553d]" strokeWidth={1.5} />
                <span>contact@moyan.app</span>
              </div>
              <div className="flex items-center gap-3 text-[#a89985]">
                <Smartphone className="w-5 h-5 text-[#c8553d]" strokeWidth={1.5} />
                <span>Android 首发体验</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#3d3020] text-center">
          <p className="text-[#8b7355] text-sm">
            © 2024 墨言 Mo Yan. 读其书，想见其为人。
          </p>
        </div>
      </div>
    </footer>
  );
}
