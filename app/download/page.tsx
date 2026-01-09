"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { analytics } from "../lib/analytics";

export default function Download() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const qrVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* App Icon and Name Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/images/icons.png"
                alt="my MINK logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                priority
              />
              <span className="text-lg font-bold text-text-black">my MINK</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-red/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 md:mb-10"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text-black mb-3 md:mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Download <span className="text-primary-red">my MINK</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-text-darkGrey max-w-2xl mx-auto leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Download <strong>my MINK</strong> and join a global community to
              share posts, reels, chat, and discover creators.
            </motion.p>
          </motion.div>

          {/* Download Buttons Section */}
          <motion.div variants={itemVariants} className="mb-10 md:mb-12">
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-text-black mb-4 md:mb-5 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get the app
            </motion.h2>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="w-full sm:w-auto flex justify-center"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  href="https://apps.apple.com"
                  variant="primary"
                  size="lg"
                  className="w-[280px] sm:w-auto min-w-[200px] sm:min-w-0"
                  trackEvent="download_app_store"
                  trackProps={{ location: "download_page" }}
                >
                  Download on App Store
                </Button>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto flex justify-center"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  href="https://play.google.com"
                  variant="secondary"
                  size="lg"
                  className="w-[280px] sm:w-auto min-w-[200px] sm:min-w-0"
                  trackEvent="download_google_play"
                  trackProps={{ location: "download_page" }}
                >
                  Get it on Play Store
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* QR Code Section */}
          <motion.div variants={itemVariants} className="mb-10 md:mb-12">
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-text-black mb-3 md:mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Prefer a QR code?
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-text-darkGrey mb-6 text-center font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Scan the QR code below to download instantly.
            </motion.p>
            <motion.div
              className="flex justify-center"
              variants={qrVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border-2 border-gray-300/50 overflow-hidden"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.1))",
                }}
              >
                {/* Premium border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-transparent to-primary-red/5 rounded-2xl pointer-events-none"></div>

                {/* Inner padding with subtle border */}
                <div className="relative p-4 md:p-6 border border-gray-200/50 rounded-xl m-2 bg-white/50 backdrop-blur-sm">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto">
                    <Image
                      src="/images/qrcode.png"
                      alt="Download my MINK QR Code"
                      fill
                      className="object-contain rounded-lg"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary-red/30"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Corner accent dots */}
                <div className="absolute top-3 left-3 w-2 h-2 bg-primary-red rounded-full"></div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-primary-red rounded-full"></div>
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-primary-red rounded-full"></div>
                <div className="absolute bottom-3 right-3 w-2 h-2 bg-primary-red rounded-full"></div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Troubleshooting Section */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-10">
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-text-black mb-3 md:mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Having trouble installing?
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-text-darkGrey text-center max-w-2xl mx-auto font-normal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              If you're facing issues downloading or signing in, contact us:
            </motion.p>
            <motion.div
              className="text-center mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a
                href="mailto:support@mymink.com.au"
                className="text-primary-red hover:underline text-base md:text-lg font-medium"
              >
                support@mymink.com.au
              </a>
            </motion.div>
          </motion.div>

          {/* Compatibility Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-text-black mb-6 md:mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Compatibility
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-text-darkGrey text-center max-w-2xl mx-auto font-normal leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              my MINK is available on{" "}
              <strong className="font-semibold text-text-black">iOS</strong> and{" "}
              <strong className="font-semibold text-text-black">Android</strong>{" "}
              devices.
            </motion.p>
            <motion.p
              className="text-sm md:text-base text-text-darkGrey text-center max-w-2xl mx-auto mt-3 font-normal leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Make sure your device is updated to the latest software for the
              best experience.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
