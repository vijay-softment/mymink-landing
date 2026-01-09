"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "./components/Button";
import FeatureCard from "./components/FeatureCard";
import ScrollIndicator from "./components/ScrollIndicator";
import { analytics } from "./lib/analytics";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force video to play when component mounts (fixes issue when navigating back)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  }, []);

  return (
    <>
      {/* Full Screen Hero Section with Video Background */}
      <section className="relative w-full h-screen overflow-hidden flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            key="hero-video"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                my MINK
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-3 md:mb-4 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Connect. Create. Share.
              </motion.p>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The social network for connecting with your community, sharing
                your moments, and building meaningful relationships.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button
                  href="https://apps.apple.com"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  trackEvent="download_app_store"
                  trackProps={{ location: "home_hero" }}
                >
                  Download on App Store
                </Button>
                <Button
                  href="https://play.google.com"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  trackEvent="download_google_play"
                  trackProps={{ location: "home_hero" }}
                >
                  Get it on Play Store
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Two Phone Mockups (like HBCUMADE) */}
            <motion.div
              className="flex justify-center lg:justify-end items-center gap-2 sm:gap-4 relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* First Phone (Left, slightly behind) */}
              <motion.div
                className="relative z-0 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[300px] rounded-2xl sm:rounded-3xl border-4 md:border-8 border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden bg-transparent transform rotate-[-6deg] sm:rotate-[-8deg] translate-x-2 sm:translate-x-4 md:translate-x-8 transition-shadow duration-300"
                whileHover={{ scale: 1.02, rotate: -6, y: -5 }}
                transition={{ duration: 0.3 }}
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25))",
                }}
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "1320/2868" }}
                >
                  <Image
                    src="/images/main.png"
                    alt="my MINK app screenshot"
                    width={1320}
                    height={2868}
                    className="w-full h-full object-contain"
                    priority
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </motion.div>

              {/* Second Phone (Right, slightly in front) */}
              <motion.div
                className="relative z-10 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[300px] rounded-2xl sm:rounded-3xl border-4 md:border-8 border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden bg-transparent transform rotate-[6deg] sm:rotate-[8deg] translate-x-[-4px] sm:translate-x-[-6px] md:translate-x-[-8px] transition-shadow duration-300"
                whileHover={{ scale: 1.02, rotate: 6, y: -5 }}
                transition={{ duration: 0.3 }}
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25))",
                }}
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "1320/2868" }}
                >
                  <Image
                    src="/images/one.png"
                    alt="my MINK app screenshot"
                    width={1320}
                    height={2868}
                    className="w-full h-full object-contain"
                    priority
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <ScrollIndicator />
      </section>

      {/* Features Section */}
      <section className="relative w-full bg-gray-50 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-left mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-black mb-3 sm:mb-4">
              Features
            </h2>
            <p className="text-base sm:text-lg text-text-darkGrey max-w-2xl">
              Everything you need to connect and share
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
            <FeatureCard
              title="Posts & Reels"
              description="Share photos, videos, and stories with your community in engaging formats."
              index={0}
            />
            <FeatureCard
              title="Chat"
              description="Connect with friends through instant messaging, group chats, and more."
              index={1}
            />
            <FeatureCard
              title="Calls"
              description="Make high-quality video and audio calls with crystal-clear sound and video."
              index={2}
            />
            <FeatureCard
              title="Live Streaming"
              description="Go live and share moments in real-time with your audience."
              index={3}
            />
            <FeatureCard
              title="Business & Page Profiles"
              description="Create professional profiles for your business or page with advanced features. Manage your business or page with ease."
              index={4}
            />
            <FeatureCard
              title="Safety & Privacy"
              description="Built with your privacy and safety in mind, with advanced moderation and reporting tools."
              index={5}
            />
          </div>
        </div>
      </section>
    </>
  );
}
