"use client"
import React from 'react'
import { Blogs } from '../Data'
import { useParams } from 'next/navigation';
import Image from 'next/image';
// import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function Page() {

	const { slug } = useParams()

	const blog = Blogs.filter((blog) => blog._id === slug);
	console.log(blog)

	return (
		<article className="max-w-5xl mx-auto px-4 py-8">
			{/* <ScrollProgress className="top-[0px]" /> */}
			<h1 className='font-guzan text-4xl text-center mb-4'>{blog[0].title}</h1>
			<Image
				src={blog[0].coverImage.url}
				alt={blog[0].title}
				width={1000}
				height={1000}
				className="w-full h-[200px] md:h-[400px] rounded-lg object-cover"
			/>
			<div
				dangerouslySetInnerHTML={{ __html: blog[0].content }}
				className=" text-pretty font-inter w-full mt-4"
			></div>


		</article>
	)
}
