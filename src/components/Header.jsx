import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { constant } from '../constant';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-gray-900">
          Portfolio
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">
            Skills
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={constant.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={constant.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
