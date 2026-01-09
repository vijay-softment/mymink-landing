"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ScreenshotGrid() {
  const screenshots = [
    { name: "one.png", alt: "my MINK screenshot 1" },
    { name: "two.png", alt: "my MINK screenshot 2" },
    { name: "three.png", alt: "my MINK screenshot 3" },
    { name: "four.png", alt: "my MINK screenshot 4" },
    { name: "five.png", alt: "my MINK screenshot 5" },
    { name: "six.png", alt: "my MINK screenshot 6" },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.1 }}
    >
      {screenshots.map((screenshot, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg"
        >
          <div className="relative w-full" style={{ aspectRatio: "1320/2868" }}>
            <Image
              src={`/images/${screenshot.name}`}
              alt={screenshot.alt}
              width={1320}
              height={2868}
              className="w-full h-full object-contain"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
