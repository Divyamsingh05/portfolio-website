import React from 'react';

const SKILLS = [
  { name: 'HTML', color: 'text-orange-500' },
  { name: 'CSS', color: 'text-blue-500' },
  { name: 'JavaScript', color: 'text-yellow-400' },
  { name: 'C', color: 'text-blue-500' },
  { name: 'Python', color: 'text-blue-400' },
  { name: 'Java', color: 'text-red-500' },
  { name: 'Spring Boot', color: 'text-red-500' },
  { name: 'Express.js', color: 'text-gray-400' },
  { name: 'Hibernate', color: 'text-yellow-400' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'React.js', color: 'text-gray-400' },
  { name: 'MongoDB', color: 'text-green-600' },
  { name: 'MySQL', color: 'text-blue-600' },
  { name: 'PHP', color: 'text-orange-600' },
  { name: 'GitHub', color: 'text-gray-300' },
  { name: 'REST API', color: 'text-purple-400' },
  { name: 'POSTMAN', color: 'text-teal-400' },
  { name: 'Netlify', color: 'text-gray-400' },
  { name: 'Vercel', color: 'text-orange-500' },
  { name: 'MySQL WorkBench', color: 'text-blue-600' },
  
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
        <p className="text-gray-400">Technologies I work with to bring ideas to life.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="glass-card flex items-center justify-center px-6 py-3 rounded-xl hover:scale-105 transition-transform hover:border-white/30 cursor-pointer min-w-[130px] border border-white/5 shadow-md">
            <h3 className={`text-sm tracking-wide font-semibold ${skill.color}`}>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
