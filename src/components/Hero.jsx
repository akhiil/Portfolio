import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="w-[100%] min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">Akhil Kumar Anand</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Full-stack developer passionate about creating beautiful and functional web applications
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
            Contact Me
          </a>
          <a href="#projects" className="border border-gray-300 px-8 py-3 rounded-lg hover:border-gray-400 transition">
            View Work
          </a>
        </div>
        <div onClick={() => {
          window.scrollTo({
            top: 200,
            behavior: 'smooth'
          })
        }} className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
}