"use client"
import React from 'react'
import SocialIcons from './SocialLinks';

export default function Hero() {
	return (
		<div
			className=' h-screen md:h-[100vh] bg-black   bg-fixed flex flex-col  overflow-hidden  justify-start items-center'
			style={{
				backgroundImage: 'url(/myhero.jpeg)',
				backgroundSize: 'cover',
				backgroundPosition: 'bottom',
			}}
			>
			<div className='z-10'>
			</div>
			<div className=' z-50 w-full my-10  rounded-lg'>
				<h1 className='text-white hidden text-center font-sink text-3xl md:text-4xl'>Hello, My Name is</h1>
				<h1
					style={{
						backgroundImage: 'url(https://i.pinimg.com/originals/4c/92/f1/4c92f1c9d448b63c0702705a926a638e.gif)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						color: 'white', // fallback color
					}}
					className='text-6xl md:text-9xl w-full text-[#CA160B] font-sink flex text-center items-center justify-center'
				>
					Narendra
				</h1>
				<h1 className='text-[#161413] text-center font-sink text-2xl md:text-xl'> Full-Stack Developer </h1>
				<div className='block md:hidden'><SocialIcons direction="horizontal"  /></div>
			</div>
		  <div className="hidden md:block md:absolute md:left-10 md:top-1/2 md:-translate-y-1/2">
      {/* <div className='bg-gradient-to-bl to-black via-gray-800 from-transparent  w-fit px-3 rounded-full'> */}
		<SocialIcons direction="vertical"  />
		{/* </div> */}
      </div>

		</div>


	)
}

