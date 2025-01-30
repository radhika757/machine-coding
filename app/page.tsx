
export default function Home() {
  const sampleCode = `{// Example Component
function Button() {
  return (

    Click me!

  );
}

// Click to view full code
// and explanation}`.trim()

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Interactive
              <br />
              Component Library
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Explore, learn, and implement React and JavaScript components with live code previews and detailed
            explanations.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              React Components
            </button>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              JavaScript Components
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="absolute inset-0 blur-[20px] opacity-50 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <pre className="relative bg-[#1a1a1a] text-gray-300 p-6 rounded-xl overflow-auto min-h-[300px] font-mono text-sm">
              <code>{sampleCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

