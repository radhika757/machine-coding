import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

type ToggleKey = "react" | "javascript";

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState({
        react: false,
        javascript: false
    })

    const handleToggle = (key: ToggleKey) => {
        setIsOpen(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <div className='w-full max-w-64'>
            <button
                onClick={() => handleToggle('react')}
                className="flex w-full items-center justify-between gap-2 rounded-md bg-[#1c1c1c] px-3 py-2 text-sm text-white transition-colors hover:bg-[#2c2c2c]"
            >
                React Components
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen.react ? "rotate-180" : ""}`} />
            </button>
            <button
                onClick={() => handleToggle('javascript')}
                className=" mt-4 flex w-full items-center justify-between gap-2 rounded-md bg-[#1c1c1c] px-3 py-2 text-sm text-white transition-colors hover:bg-[#2c2c2c]"
            >
                JavaScript Components
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen.javascript ? "rotate-180" : ""}`} />
            </button>
        </div>
    )
}

export default SideMenu
