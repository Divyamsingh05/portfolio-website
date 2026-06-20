import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CERTIFICATES = [
  { 
    title: "Advance Excel", 
    issuer: "Mind Luster", 
    link: "https://drive.google.com/file/d/14vfbcAolKHMeZfxlDHroO435EqPv-CfI/view?usp=drivesdk"
  },
  { 
    title: "Data Analytics Job Simulation", 
    issuer: "Deloitte", 
    link: "https://drive.google.com/file/d/1SAiW0zoQ5nLlSt-BAScXaFbhLn1-91zc/view?usp=drivesdk"
  },
  { 
    title: "Python Data Science", 
    issuer: "Infosys Springboard", 
    link: "https://drive.google.com/file/d/1hzWeyyrR74C7RfoyKsLu8Yz8JfDcZMiJ/view?usp=drivesdk"
  },
  { 
    title: "AI ML Virtual Internship", 
    issuer: "Google For Developers ", 
    link: "https://drive.google.com/file/d/18D8mwGOn_VJ0LERIHVAjTGVwCkeCP2D_/view?usp=drivesdk"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">My <span className="text-gradient">Certificates</span></h2>
        <p className="text-gray-400">Continuous learning and professional development.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATES.map((cert, i) => (
          <a key={i} href={cert.link} target="_blank" rel="noreferrer" className="glass-card p-6 rounded-2xl flex items-center justify-between gap-4 group hover:-translate-y-1 transition-transform border border-white/5 hover:border-[#00f0ff]/50">
             <div className="flex items-start gap-4">
               <div className="p-3 bg-[#00f0ff]/10 rounded-xl text-[#00f0ff] group-hover:scale-110 transition-transform">
                 <Award size={24} />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00f0ff] transition-colors">{cert.title}</h3>
                 <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                 <span className="inline-block px-2 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono mt-1">{cert.date}</span>
               </div>
             </div>
             <div className="text-gray-500 group-hover:text-[#00f0ff] transition-colors">
               <ExternalLink size={20} />
             </div>
          </a>
        ))}
      </div>
    </section>
  );
}
