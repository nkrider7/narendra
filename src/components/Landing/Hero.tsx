"use client"
import React from 'react'
import SocialIcons from './SocialLinks';

export default function Hero() {
	return (
		<div
			className='  md:h-[84vh] bg-black   bg-fixed flex flex-col  overflow-hidden  justify-center items-center'>
			<div className='z-10'>
			</div>
			<div className=' z-50 w-full py-10 rounded-lg'>
				<h1 className='text-white text-center font-sink text-3xl md:text-4xl'>Hello, My Name is</h1>
				<h1
					style={{
						backgroundImage: 'url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNhYWZ4MG90cDFuYmxhb3E5aDlxOHdtbXdsZmVvMDVkOG45NTd5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xZ1t7hxPfe19M4/giphy.gif)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						color: 'white', // fallback color
					}}
					className='text-6xl md:text-9xl w-full text-[#6F07FB] font-sink flex text-center items-center justify-center'
				>
					Narendra
				</h1>
				<h1 className='text-white text-center font-sink text-2xl md:text-xl'> Full-Stack Developer </h1>
			</div>
			<SocialIcons />

		</div>


	)
}

