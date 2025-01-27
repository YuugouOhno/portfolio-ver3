"use client"

import { motion } from "framer-motion"
import { Twitter, Briefcase, User, Building } from "lucide-react"
import Image from "next/image"

interface CardProps {
    icon: string
    name: string
    affiliation: string
    twitter: string
    wantedly: string
  }

export default function TiltCard({ icon, name, affiliation, twitter, wantedly }: CardProps) {
  return (
    <motion.div
      className="w-64 h-96 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
      whileHover={{
        rotateX: 5,
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        <Image
          src={icon || "/placeholder.svg"}
          alt={`${name}'s icon`}
          width={80}
          height={80}
          className="rounded-full border-2 border-white"
        />
        <h2 className="text-xl font-bold text-white">{name}</h2>
        <div className="flex items-center text-gray-300">
          <Building size={16} className="mr-2" />
          <span>{affiliation}</span>
        </div>
        <div className="w-full border-t border-gray-600 my-2" />
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Twitter size={20} className="mr-2" />
          <span>@{twitter}</span>
        </a>
        <a
          href={wantedly}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-400 hover:text-green-300 transition-colors"
        >
          <Briefcase size={20} className="mr-2" />
          <span>Wantedly</span>
        </a>
      </div>
    </motion.div>
  )
}

