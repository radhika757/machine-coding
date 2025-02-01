import { Code } from "lucide-react"

const components = [
    {
        id: 1,
        title: "Image Carousel",
        description: "Custom image slider with touch support and automatic playback.",
        tag: {
            text: "Vanilla JS",
            color: "yellow" as const,
        },
    },
    {
        id: 2,
        title: "Image Lightbox",
        description: "Responsive lightbox gallery with zoom functionality.",
        tag: {
            text: "Vanilla JS",
            color: "yellow" as const,
        },
    },
    {
        id: 3,
        title: "Accordion Menu",
        description: "Collapsible accordion with smooth animations.",
        tag: {
            text: "Vanilla JS",
            color: "yellow" as const,
        },
    },
]

export default function JsModule() {
    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto space-y-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">JavaScript Components Library</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {components.map((component) => (
                        <div key={component.id} className="bg-gray-50 rounded-xl p-6 space-y-4 hover:bg-gray-100 transition-colors">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-gray-900">{component.title}</h2>
                                <span className="px-3 py-1 text-sm text-white rounded-full bg-amber-500">{component.tag.text}</span>
                            </div>
                            <p className="text-gray-600">{component.description}</p>
                            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                                <Code className="w-4 h-4 mr-2" />
                                View Code
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

