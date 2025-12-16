import { BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c2416] via-[#3d3020] to-[#f5f1e8]" />

      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 text-[#8b7355] text-9xl font-serif">墨</div>
        <div className="absolute bottom-40 right-20 text-[#8b7355] text-9xl font-serif">言</div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-[#c8553d] rounded-full flex items-center justify-center shadow-2xl">
            <BookOpen className="w-10 h-10 text-[#f5f1e8]" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-serif text-[#f5f1e8] mb-6 tracking-wider">
          墨言
        </h1>

        <div className="w-32 h-0.5 bg-[#c8553d] mx-auto mb-8" />

        <p className="text-2xl md:text-3xl text-[#d4c5b0] mb-4 font-light">
          读其书，想见其为人
        </p>

        <p className="text-lg md:text-xl text-[#a89985] mb-12 max-w-2xl mx-auto leading-relaxed">
          让经典不再是死去的文字，而是鲜活的灵魂对话
        </p>

        <button className="group relative px-12 py-4 bg-[#c8553d] text-[#f5f1e8] text-lg font-light tracking-wider overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <span className="relative z-10">即刻体验</span>
          <div className="absolute inset-0 bg-[#a84632] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f1e8] to-transparent" />
    </section>
  );
}
