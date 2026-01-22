"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
	Monitor, 
	Server, 
	Database, 
	Wrench, 
	Smartphone, 
	Cloud,
	X
} from 'lucide-react'

interface TechCategory {
	id: string
	title: string
	icon: React.ReactNode
	iconColor: string
	technologies: string[]
}

const techCategories: TechCategory[] = [
	{
		id: 'frontend',
		title: 'Frontend Development',
		icon: <Monitor className="w-6 h-6" />,
		iconColor: 'text-blue-500',
		technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Framer Motion']
	},
	{
		id: 'backend',
		title: 'Backend Development',
		icon: <Server className="w-6 h-6" />,
		iconColor: 'text-green-500',
		technologies: ['Node.js', 'Express.js', 'Fastify', 'REST APIs', 'GraphQL', 'JWT Authentication', 'bcrypt', 'Nodemailer']
	},
	{
		id: 'database',
		title: 'Database & Cloud',
		icon: <Database className="w-6 h-6" />,
		iconColor: 'text-purple-500',
		technologies: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Mongoose', 'Redis', 'AWS S3', 'Vercel', 'Docker']
	},
	{
		id: 'tools',
		title: 'Tools & Technologies',
		icon: <Wrench className="w-6 h-6" />,
		iconColor: 'text-orange-500',
		technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Jest', 'React Testing Library', 'ESLint', 'Prettier']
	},
	{
		id: 'mobile',
		title: 'Mobile & Design',
		icon: <Smartphone className="w-6 h-6" />,
		iconColor: 'text-pink-500',
		technologies: ['Responsive Design', 'Mobile-First', 'CSS Grid', 'Flexbox', 'UI/UX Principles', 'Accessibility', 'Performance Optimization', 'SEO']
	},
	{
		id: 'devops',
		title: 'DevOps & Deployment',
		icon: <Cloud className="w-6 h-6" />,
		iconColor: 'text-cyan-500',
		technologies: ['CI/CD', 'GitHub Actions', 'Vercel Deployment', 'Environment Variables', 'SSL/TLS', 'Monitoring', 'Error Handling', 'Security Best Practices']
	}
]

export default function TechStack() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='min-h-[50vh] flex flex-col justify-center items-center text-white px-4 md:px-10 pt-10 font-sans relative'>
			<h1 className="font-inter uppercase text-black text-center text-3xl mt-8" style={{ fontWeight: "200" }}>
				Our<span style={{ fontWeight: '800' }}>Technologies Stack</span>
			</h1>
			<Image src="/techstack.png" alt="logo" width={1000} height={1000} className='w-full h-[10rem] object-contain' />

			{/* Clickable Black Box */}
			<motion.div 
				className='h-40 bg-black w-full rounded-t-2xl cursor-pointer relative overflow-hidden group'
				onClick={() => setIsOpen(true)}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				initial={{ opacity: 1 }}
				animate={{ opacity: isOpen ? 0 : 1 }}
				transition={{ duration: 0.3 }}
			>
				<div className="absolute inset-0 flex items-center justify-center">
					<motion.div
						className="text-white/60 text-lg md:text-2xl font-inter font-extrabold"
						animate={{ y: [0, -10, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					>
						Click to explore technologies
					</motion.div>
				</div>
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
					<motion.div
						className="w-8 h-1 bg-white/40 rounded-full"
						animate={{ width: [20, 40, 20] }}
						transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
					/>
				</div>
			</motion.div>

			{/* Animated Tech Stack Details */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsOpen(false)}
						/>

						{/* Tech Stack Content */}
						<motion.div
							className="fixed inset-x-0 bottom-0 z-50 bg-[#0a0a0a] rounded-t-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							exit={{ y: '100%' }}
							transition={{ 
								type: "spring", 
								damping: 30, 
								stiffness: 300 
							}}
						>
							{/* Close Button */}
							<div className="sticky top-0 z-10 flex justify-end p-4 bg-[#0a0a0a]/95 backdrop-blur-sm">
								<motion.button
									onClick={() => setIsOpen(false)}
									className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
									whileHover={{ scale: 1.1, rotate: 90 }}
									whileTap={{ scale: 0.9 }}
								>
									<X className="w-5 h-5 text-white" />
								</motion.button>
							</div>

							{/* Content */}
							<div className="px-4 md:px-8 lg:px-12 py-6 pb-12">
								<motion.h2 
									className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
								>
									Technology Stack
								</motion.h2>

								{/* Grid Layout */}
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
									{techCategories.map((category, index) => (
										<motion.div
											key={category.id}
											className="bg-[#1a1a1a] rounded-xl p-5 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
											initial={{ opacity: 0, y: 50 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ 
												delay: 0.3 + index * 0.1,
												duration: 0.5,
												ease: "easeOut"
											}}
											whileHover={{ 
												scale: 1.02,
												boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
											}}
										>
											{/* Category Header */}
											<div className="flex items-center gap-3 mb-4">
												<div className={`${category.iconColor} p-2 rounded-lg bg-white/5`}>
													{category.icon}
												</div>
												<h3 className="text-lg md:text-xl font-semibold text-white">
													{category.title}
												</h3>
											</div>

											{/* Technology Tags */}
											<div className="flex flex-wrap gap-2 mt-4">
												{category.technologies.map((tech, techIndex) => (
													<motion.span
														key={tech}
														className="px-3 py-1.5 text-xs md:text-sm bg-[#2a2a2a] text-white/90 rounded-lg border border-white/5 hover:border-white/20 transition-colors"
														initial={{ opacity: 0, scale: 0.8 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ 
															delay: 0.4 + index * 0.1 + techIndex * 0.03,
															duration: 0.3
														}}
														whileHover={{ 
															scale: 1.05,
															backgroundColor: "#3a3a3a"
														}}
													>
														{tech}
													</motion.span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}
