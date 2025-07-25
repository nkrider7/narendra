"use client"
import React from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1aLZBGD6XLk5NG2fMZ5WjaLTliBCXNeby/view?usp=drive_link',
    color: 'text-black',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"><path d="M13.5 8h-3" /><path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" /><path d="M16.899 22A5 5 0 0 0 7.1 22" /><path d="m9 2 3 6" /><circle cx="12" cy="15" r="3" /></svg>
    ),
  },
  {
    name: 'Whatsapp',
    href: 'https://wa.me/+918938850519',
    color: 'text-[#1db954]',
    icon: (
      <FaWhatsapp size={24} className='text-[#1db954]' />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nkriderking/',
    color: 'text-[#E000A8]',
    icon: (
      <Instagram className='text-[#E000A8]' />
    ),
  },
  {
    name: 'Github',
    href: 'https://github.com/nkrider7',
    color: 'text-white',
    icon: (
      <FaGithub size={24} className='text-[#333]' />
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/narendra-nishad/',
    color: 'text-[#0077b5]',
    icon: (
      <FaLinkedin size={24} className='text-[#0077b5]' />
    ),
  },
];

export default function SocialIcons() {
  return (
    <div className="text-center">
      <ul className="flex justify-center items-center gap-4 py-4 mb-6">
        {socialLinks.map((social) => (
          <li key={social.name} className="relative group">
            <Link
              href={social.href}
              aria-label={social.name}
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-700 transition-shadow duration-300 ease-in-out hover:shadow-xl ${social.color}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </Link>
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 font-sink bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:-top-10 transition-all duration-300 ${social.color}`}>
              {social.name}
            </div>
          </li>
        ))}
      </ul>


    </div>
  );
}
