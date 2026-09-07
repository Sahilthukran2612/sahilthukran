"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"


const LINKS = () => {

    const pathname = usePathname()

    const isActive = (path:string) => {
        return path === pathname
    }

    return (
     <div className="flex items-center justify-between gap-12">
                <Link href="/" className={`${isActive('/') ? "text-blue font-semibold decoration-1":"text-gray-700 decoration-none"} transition-colors duration-300 `}>Home</Link>
                <Link href="/about" className={`${isActive('/about') ? "text-blue font-semibold decoration-1":"text-gray-700 decoration-none"} transition-colors duration-300 `}>About</Link>
                <Link href="/projects" className={`${isActive('/projects') ? "text-blue font-semibold decoration-1":"text-gray-700 decoration-none"} transition-colors duration-300 `}>Projects</Link>
                <Link href="/contact" className={`${isActive('/contact') ? "text-blue font-semibold decoration-1":"text-gray-700 decoration-none"} transition-colors duration-300 `}>Contact</Link>
            </div>
  )
}

export default LINKS