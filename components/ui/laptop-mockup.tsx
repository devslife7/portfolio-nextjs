"use client"

import { ReactNode } from "react"

interface LaptopMockupProps {
  children: ReactNode
  className?: string
}

export default function LaptopMockup({ children, className = "" }: LaptopMockupProps) {
  return (
    <div className={`relative inline-block w-full ${className}`}>
      {/* Laptop Container */}
      <div className="relative">
        {/* Screen Section */}
        <div className="bg-black rounded-t-lg p-2 sm:p-3 shadow-xl">
          {/* Screen Area */}
          <div className="bg-white rounded-md overflow-hidden aspect-video relative w-full">
            {children}
          </div>
        </div>
        
        {/* Base/Keyboard Area - wider than screen */}
        <div className="relative -mx-[7%] sm:-mx-[8%] mt-1 sm:mt-2">
          {/* Base */}
          <div className="bg-black rounded-b-2xl sm:rounded-b-3xl h-4 sm:h-5 shadow-xl">
            {/* Simple trackpad indicator */}
            <div className="w-[25%] h-1 sm:h-1.5 bg-gray-700 rounded-full mx-auto mt-2 sm:mt-2.5"></div>
          </div>
        </div>
        
        {/* Clean shadow */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[96%] h-3 bg-black/15 blur-xl rounded-full"></div>
      </div>
    </div>
  )
}
