'use client'

import { motion } from 'framer-motion'

export default function LoadingSkeleton() {
  return (
    <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: 'linear',
        }}
        style={{
          width: '50%',
        }}
      />
    </div>
  )
}

