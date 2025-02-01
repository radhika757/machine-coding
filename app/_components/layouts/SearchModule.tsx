"use client"

import { ChevronRight, Search } from "lucide-react"
import { useState } from "react"

const filters = ["All", "React", "JavaScript", "UI Components", "Forms"]

const components = [
    {
        id:1,
        title: "Modal",
        description: "Customizable modal component with animations",
        tag: {
            text: "React",
            color: "blue" as const,
        },
    },
    {
        id:2,
        title: "Form Validator",
        description: "Form validation utility",
        tag: {
            text: "JavaScript",
            color: "purple" as const,
        },
    },
    {
        id:3,
        title: "Carousel",
        description: "Image carousel with touch support",
        tag: {
            text: "React",
            color: "blue" as const,
        },
    },
]

const tagColors = {
    blue: "bg-blue-600",
    purple: "bg-purple-600",
  }

export default function SearchModule() {
    const [activeFilter, setActiveFilter] = useState("All")

    return (
        <div className="bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto space-y-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Search Components</h1>

                <div className="relative w-full max-w-4xl mx-auto">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search for components..."
                        className="w-full bg-[#1a1a1a] text-gray-200 pl-12 pr-4 py-4 rounded-xl border border-gray-800 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700"
                    />
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm transition-colors ${activeFilter ? "bg-blue-600 text-white" : "text-gray-400 hover:text-gray-300"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {components.map((component) => (
                        <div key={component.id} className="bg-[#1a1a1a] rounded-xl p-6 space-y-4 hover:bg-[#222] transition-colors">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-white">{component.title}</h2>
                                <span className={`px-3 py-1 text-sm text-white rounded-full ${tagColors[component.tag.color]}`}>{component.tag.text}</span>
                            </div>
                            <p className="text-gray-400">{component.description}</p>
                            <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                                View Component
                                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

