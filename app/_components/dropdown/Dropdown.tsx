import { ChevronDown, Monitor } from 'lucide-react'
import React, { useState } from 'react'


interface Option {
    value: string
    label: string
}

const options: Option[] = [
    { value: "component", label: "component" },
    { value: "code", label: "code" },
]

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = React.useState<Option>(options[0])
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSelect = (option: Option) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    return (
        <div className="relative w-full max-w-[600px]" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between gap-2 rounded-md bg-[#1c1c1c] px-3 py-2 text-sm text-white transition-colors hover:bg-[#2c2c2c]"
            >
                <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-white/70" />
                    <span className="text-white/70">Current repository:</span>
                    <span>{selectedOption.label}</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute mt-1 w-full rounded-md border border-[#2c2c2c] bg-[#1c1c1c] py-1">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className={`flex w-full items-center px-3 py-1.5 text-sm text-white transition-colors hover:bg-[#2c2c2c] ${selectedOption.value === option.value ? "bg-[#2c2c2c]" : ""
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
