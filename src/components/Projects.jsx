import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import aiguardImg from '../assets/aiguard.png';
import hospitalImg from '../assets/hospital.png';
import hotelImg from '../assets/hotel.png';
import networkImg from '../assets/networktracker.png';
import nutritionImg from '../assets/nutritiontracker.png';
import societyImg from '../assets/society.png';

const PROJECTS = [
  {
    title: 'REVO Healthcare  - Hospital Management System',
    description: 'A web application developed to streamline hospital operations such as patient records, doctor scheduling, appointment booking, and billing management. It provides a secure and user-friendly interface for managing healthcare services efficiently.',
    image: hospitalImg,
    tech: ['Html', 'CSS', 'Javascript' ,'PHP', 'MySQL' , 'Netlify'],
    github: 'https://github.com/Divyamsingh05/Revo-Hospital-Management-System.git',
    live: 'https://revo-healthcaree.netlify.app/'
  },
  {
    title: 'GuardAi - Scam Detector Website',
    description: 'A scam detection platform that helps users identify fraudulent messages, suspicious links, and potential online scams using machine learning techniques. The application provides real-time analysis, risk assessment, and actionable insights through an intuitive and responsive user interface.',
    tech: [
  'HTML',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'Python',
  'PostgreSQL',
  'Machine Learning',
  'REST APIs'
],
    image: aiguardImg,
    github: 'https://github.com/Divyamsingh05/GuardAI-ScamDetector.git',
    live: 'https://guardai-scamdetection.netlify.app/'
  },
  {
    title: 'IP & Domain Tracker',
    description: 'A responsive web application that enables users to track IP addresses and domain locations in real time. It integrates external REST APIs to fetch detailed network information and displays the results on an interactive map interface.',
    image: networkImg,
   tech: [
  'HTML/CSS',
  'JavaScript',
  'React',
  'Leaflet.js',
  'REST APIs',
  'Geo.IPify API'
],
    github: 'https://github.com/Divyamsingh05/IP-Domain-Tracker.git',
    live: 'https://ipdomain-trackersystem.netlify.app/'
  },
  {
    title: 'LumiereRoyale - Hotel Booking Website',
    description: 'A modern hotel booking platform that allows users to discover hotels, view room availability, make secure reservations, and manage their bookings. The system includes user authentication, an admin dashboard, payment integration, and a responsive interface to deliver a seamless booking experience.',
    image: hotelImg,
    tech: [
  'HTML',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'MongoDB',
  'REST APIs',
  'Stripe API',
  'Google Maps API'
],
    github: 'https://github.com/Divyamsingh05/LumiereRoyale-HMS-project.git',
    live: 'https://lumiereroyale.netlify.app/'
  },
  {
    title: 'Food Nuiturions tracker System ',
    description: 'A comprehensive nutrition tracking system that enables users to log meals, monitor calorie intake, track macronutrients, calculate BMI, and set personalized health goals. Built with a responsive dashboard, the platform provides real-time insights and progress analytics to support healthier lifestyle choices.',
    image: nutritionImg,
    tech: [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Python',
  'PostgreSQL',
  'REST APIs',
  'JWT Authentication'
],
    github: 'https://github.com/Divyamsingh05/Food-Nuiturions-tracker.git',
    live: 'https://foodnutritiontrack.netlify.app/'
  },
  {
    title: 'Societyplus - Society Management System',
    description: 'A society management system that streamlines community operations by providing features such as resident management, visitor tracking, maintenance billing, complaint resolution, event scheduling, and real-time announcements. The platform offers secure role-based access and an intuitive interface for both residents and administrators.',
    image: societyImg,
    tech: [
  'HTML',
  'CSS',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'REST APIs'
],
    github: 'https://github.com/Divyamsingh05/society-management-system.git',
    live: 'https://societyplus-sms.netlify.app/'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
        <p className="text-gray-400">Some things I've built recently.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:to-transparent transition-colors z-10 pointer-events-none" aria-hidden />
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
                decoding="async"
                width="1200"
                height="675"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 will-change-transform"
                style={{ transformOrigin: 'center center', objectPosition: 'top center' }}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-[#00f0ff]/10 border border-[#00f0ff]/20 rounded-full text-xs text-[#00f0ff]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-6 mt-auto pt-4 border-t border-white/10">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Code size={18} /> Source Code
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#00f0ff] hover:text-[#00f0ff]/70 transition-colors">
                  <ExternalLink size={18} /> Live View
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
