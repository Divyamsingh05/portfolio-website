import React from 'react';
import { Code2, Server, Layout } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
  
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-gray-300 leading-relaxed text-[1.05rem]">
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            {/* Subtle glow effect behind text */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#8a2be2]/10 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>

            <p className="mb-6 relative z-10">
              Hello! I'm <strong className="text-white font-bold text-xl tracking-wide">Divyam Singh</strong>, a passionate <span className="text-[#00f0ff] font-semibold">Full Stack Developer</span> who enjoys building modern, responsive, and high-performance web applications. I have a strong interest in transforming ideas into real digital products that provide great user experiences.
            </p>

            <p className="mb-6 relative z-10">
              I specialize in developing dynamic user interfaces using <strong className="text-white font-medium">HTML , CSS , Javascript , React.js </strong> while also working with backend technologies like <strong className="text-white font-medium">Node.js , Express.js , spring Boot and Databases like mySQL,MongoDB</strong> to build secure and scalable server-side systems. I enjoy working across the entire development process, from designing user-friendly interfaces to managing databases and APIs.
            </p>

            <p className="relative z-10">
              I am continuously learning new technologies and improving my development skills. My goal is to build efficient, scalable, and impactful web applications that solve real-world problems and deliver excellent performance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-0">
          <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[#00f0ff]/50 transition-colors shadow-lg shadow-[#00f0ff]/5">
            <div className="p-3 bg-[#00f0ff]/10 rounded-xl w-fit mb-4 text-[#00f0ff]">
              <Layout size={24} />
            </div>
<h3 className="text-xl font-bold mb-2">Frontend</h3>
<p className="text-sm text-gray-400">
  Building responsive, interactive, and user-friendly interfaces using modern web technologies.
</p>
</div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[#8a2be2]/50 transition-colors shadow-lg shadow-[#8a2be2]/5 sm:-translate-y-6">
            <div className="p-3 bg-[#8a2be2]/10 rounded-xl w-fit mb-4 text-[#8a2be2]">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Backend</h3>
<p className="text-sm text-gray-400">
  Building secure, scalable, and efficient server-side applications, APIs, and database systems.
</p>
</div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-pink-500/50 transition-colors shadow-lg shadow-pink-500/5 sm:col-span-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 bg-pink-500/10 rounded-xl w-fit text-pink-500">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Clean Architecture</h3>
<p className="text-sm text-gray-400">
  Designing scalable application architectures and writing clean, reusable, and efficient code across the full stack.
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
