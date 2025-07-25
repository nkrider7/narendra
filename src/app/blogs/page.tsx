"use client"
import { Search } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import TagsBox from "@/components/ui/Tags"
import { Blogs } from "./Data"
import { truncateText } from "@/lib/utils"
import { useRouter } from "next/navigation"

const filters = [
  { label: "All", count: 58 },
  { label: "News", count: 12 },
  { label: "Announcements", count: 10 },
  { label: "Strategy", count: 7 },
  { label: "Operations", count: 15 },
  { label: "Metrics & Performance", count: 16 },
  { label: "Marketing", count: 7 },
  { label: "Automation", count: 4 },
]

export default function BlogPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-6xl font-guzan font-bold">BLOG</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                placeholder="Search"
                className="pl-10 bg-transparent border-gray-700 rounded-lg w-40 md:w-full md:max-w-"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div className="text-sm text-gray-400">FILTERS</div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <TagsBox key={filter.label} text={filter.label} disabled={false} speed={3} className="rounded-full p-2 px-3 text-xs font-bold font-inter  bg-myblack border  border-gray-700 hover:bg-gray-800">

                </TagsBox>
              ))}
            </div>
          </div>

          {/* Search */}

        </header>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Post */}

          {Blogs.map((blog) => (
            <Card key={blog._id} onClick={() => router.push(`/blogs/${blog._id}`)} className="bg-gray-100 rounded-2xl overflow-hidden">
              <CardContent className="p-0 relative">
                <Badge className="absolute top-4 left-4 z-10">LATEST</Badge>
                <Image
                  src={blog.coverImage.url}
                  alt="Featured blog post"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-6 space-y-4 cursor-pointer">
                  <h2 onClick={() => router.push(`/blogs/${blog._id}`)} className="text-2xl hover:text-myYellow font-bold font-guzan text-black">{blog.title}</h2>
                  <p className="text-gray-600 text-sm font-inter">
                  {truncateText(blog.description, 200)}
                  </p>
                  <div className="flex items-center gap-4 text-sm font-inter text-gray-500">
                    <span>{blog.owner}</span>
                    <span>{blog.created_at}</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </div>
  )
}

