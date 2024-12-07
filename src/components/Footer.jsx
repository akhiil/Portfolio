import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { constant } from '../constant';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Akhil Kumar Anand</h3>
            <p className="text-gray-400">Full-stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href={constant?.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <Github className="w-6 h-6" />
            </a>
            <a href={constant?.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:john.doe@example.com" className="hover:text-indigo-400">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Thank you for visiting.</p>
        </div>
      </div>
    </footer>
  );
}