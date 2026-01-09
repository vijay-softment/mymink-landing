'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { trackEvent } from '../lib/analytics'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  trackEvent?: string // Event name to track when clicked
  trackProps?: Record<string, string | number> // Additional properties for tracking
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  trackEvent: eventName,
  trackProps,
}: ButtonProps) {
  const handleClick = () => {
    if (eventName) {
      trackEvent(eventName, trackProps);
    }
    if (onClick) {
      onClick();
    }
  };
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary-red text-white hover:bg-red-700 focus:ring-primary-red',
    secondary: 'bg-white text-primary-red border border-primary-red hover:bg-red-50 focus:ring-primary-red',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={classes}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <Link 
        href={href} 
        className="inline-block"
        onClick={handleClick}
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <button type={type} onClick={handleClick} className="inline-block">
      {buttonContent}
    </button>
  )
}

