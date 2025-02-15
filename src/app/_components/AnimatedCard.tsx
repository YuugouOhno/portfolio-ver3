'use client';
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaTwitter } from "react-icons/fa"
import { SiWantedly } from "react-icons/si"
import { useTilt } from "@/app/hooks/useTilt"
import Image from "next/image"

interface AnimatedCardProps {
  image: string
  name_ja: string
  name_en?: string
  affiliation: string
  twitter: string
  wantedly: string
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ image, name_ja,name_en, affiliation, twitter, wantedly }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { tiltX, tiltY, mouseX, mouseY } = useTilt(cardRef)

  const gradientStyle = isHovered
    ? {
        background: `
          radial-gradient(
            circle at ${mouseX * 100}% ${mouseY * 100}%,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 50%
          )
        `,
      }
    : {}

  return (
    <motion.div
      ref={cardRef}
      className="w-80 h-96 rounded-xl shadow-lg overflow-hidden relative"
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: tiltX,
        rotateY: tiltY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm" />
      <div className="absolute inset-0" style={gradientStyle} />
      <div className="relative p-6 flex flex-col h-full justify-between z-10">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <Image src={image || "/placeholder.svg"} alt={name_ja} width={128} height={128} className="object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 text-center font-jp">{name_ja}</h1>
          {name_en&&<h2 className="text-2xl font-bold text-white mb-2 text-center">{name_en}</h2>}
          <p className="text-gray-200 mb-4 text-center">{affiliation}</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-300 hover:underline"
          >
            <FaTwitter className="mr-2" />@{twitter}
          </a>
          <a
            href={`https://www.wantedly.com/id/${wantedly}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-300 hover:underline"
          >
            <SiWantedly className="mr-2" />
            Wantedly Profile
          </a>
        </div>
      </div>
    </motion.div>
  )
}

