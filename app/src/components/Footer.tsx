"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-4 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-lg mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-300 mb-2 md:mb-0">
          © {new Date().getFullYear()} MyBoilerPlate. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/tirdesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/tirdesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:pettugani.t@northeastern.edu"
            aria-label="Email"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="tel:+18573167532"
            aria-label="Phone"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
