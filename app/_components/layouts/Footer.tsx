"use client"

import { ArrowUp, Github, Twitter } from "lucide-react";
import { useEffect, useState } from "react";


export default function Footer() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
  
      window.addEventListener("scroll", toggleVisibility)
      return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    return (
        <div className="bg-black">
            {/* Your other content here */}
            <footer className="bg-black text-gray-400">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Column */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-white">CodeViewer</h2>
                            <p className="text-gray-400">Explore, learn, and implement React and JavaScript components with ease.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-white transition-colors">
                                    <Github className="h-6 w-6" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    <Twitter className="h-6 w-6" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                            <ul className="space-y-2">
                                {["Features", "React Components", "JavaScript Components"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Resources</h3>
                            <ul className="space-y-2">
                                {["Blog", "Tutorials", "Support", "FAQ"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter Column */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
                            <p>Subscribe to our newsletter for updates and new components.</p>
                            <form className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-gray-700"
                                />
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p>© 2024 CodeViewer. All rights reserved.</p>
                        <div className="flex space-x-6">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                                <a key={item} href="#" className="hover:text-white transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-6 w-6" />
                </button>
            </footer>

        </div>
    )
}