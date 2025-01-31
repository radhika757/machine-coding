
import { Code, MoveUpRight } from "lucide-react"



const components = [
    {
        id: 1,
        title: "Modal Component",
        description: "A reusable modal component with customizable content and animations.",
        tag: {
            text: "Hooks",
            color: "blue" as const,
        },
    },
    {
        id: 2,
        title: "Form Validator",
        description: "Form validation with custom hooks and error handling.",
        tag: {
            text: "Custom Hook",
            color: "purple" as const,
        },
    },
    {
        id: 3,
        title: "Data Table",
        description: "Sortable and filterable data table with pagination.",
        tag: {
            text: "Complex",
            color: "green" as const,
        },
    },
]

const tagColors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    green: "bg-emerald-600 hover:bg-emerald-700",
}


export default function ReactModule() {
    return (
        <div className="min-h-screen bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto space-y-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white">React Components Library</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {components.map((component) => (
                        <div key={component.id} className="bg-[#1a1a1a] rounded-xl p-6 space-y-4 hover:bg-[#222] transition-colors">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-white">{component.title}</h2>
                                <span className={`px-3 py-1 text-sm text-white rounded-full ${tagColors[component.tag.color]}`}>{component.tag.text}</span>
                            </div>
                            <p className="text-gray-400">{component.description}</p>
                            <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                                <Code className="w-4 h-4 mr-2" />
                                View Code
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                <button className="text-xl font-semibold text-white flex gap-2">View More <MoveUpRight /></button>
                </div>
                
            </div>
        </div>
    )
}

