import Link from "next/link"
import type React from "react" // Import React

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              CodeViewer
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className="text-lg">Home</Link>
              <Link href="/features" className="text-lg">Features</Link>
              <Link href="/components" className="text-lg">Components</Link>
              <Link href="/search" className="text-lg">Search</Link>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu (you can replace this with an SVG icon if preferred) */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

