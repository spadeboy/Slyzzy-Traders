"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { featuredProducts } from "@/data/products";
import { useState, useEffect } from "react";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundTextY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const backgroundTextX = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Custom cursor state
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringJar, setIsHoveringJar] = useState(false);

  // Section 1 transforms - X-axis, Y-axis, and rotation
  const mabroomBgJar1X = useTransform(scrollYProgress, [0, 0.5], [-200, 100]);
  const mabroomBgJar1Y = useTransform(scrollYProgress, [0, 0.5], [50, -200]);
  const mabroomBgJar1Rotate = useTransform(scrollYProgress, [0, 0.5], [-15, 25]);

  const mabroomBgJar2X = useTransform(scrollYProgress, [0, 0.5], [200, -100]);
  const mabroomBgJar2Y = useTransform(scrollYProgress, [0, 0.5], [100, -250]);
  const mabroomBgJar2Rotate = useTransform(scrollYProgress, [0, 0.5], [15, -20]);

  const mabroomMainJarY = useTransform(scrollYProgress, [0, 0.5], [100, -100]);
  const mabroomMainJarRotate = useTransform(scrollYProgress, [0, 0.5], [-5, 10]);

  // Section 2 transforms
  const medjoolBgJar1X = useTransform(scrollYProgress, [0.5, 1], [-200, 100]);
  const medjoolBgJar1Y = useTransform(scrollYProgress, [0.5, 1], [50, -200]);
  const medjoolBgJar1Rotate = useTransform(scrollYProgress, [0.5, 1], [-15, 25]);

  const medjoolBgJar2X = useTransform(scrollYProgress, [0.5, 1], [200, -100]);
  const medjoolBgJar2Y = useTransform(scrollYProgress, [0.5, 1], [100, -250]);
  const medjoolBgJar2Rotate = useTransform(scrollYProgress, [0.5, 1], [15, -20]);

  const medjoolMainJarY = useTransform(scrollYProgress, [0.5, 1], [100, -100]);
  const medjoolMainJarRotate = useTransform(scrollYProgress, [0.5, 1], [-5, 10]);

  const product1 = featuredProducts[0];
  const product2 = featuredProducts[1];

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-[#FDFBF5]">
      {/* Custom Cursor */}
      <motion.div
        style={{ x: cursorPosition.x, y: cursorPosition.y }}
        animate={{ opacity: isHoveringJar ? 1 : 0 }}
        className="fixed z-[100] pointer-events-none transition-opacity duration-300 bg-[#B23A28] text-white px-4 py-2 rounded-full text-sm font-semibold -translate-x-1/2 -translate-y-1/2"
      >
        DISCOVER THE PRODUCT
      </motion.div>

      {/* Massive Background Text - Scroll Linked */}
      <motion.div
        style={{ y: backgroundTextY, x: backgroundTextX }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h1 className="font-serif text-[18vw] leading-none text-[#B23A28]/10 whitespace-nowrap">
          SLYZZY TRADERS
        </h1>
      </motion.div>

      {/* Section 1: Mabroom Dates - 3D Parallax with X-axis & Rotation */}
      <section className="h-screen relative flex items-center justify-center overflow-x-hidden">
        {/* Background Lifestyle Image */}
        <img
          src={product1?.bgLifestyleImage}
          alt={product1?.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Background Blurred Jars (Depth of Field with X-axis motion) */}
        <motion.div
          style={{ x: mabroomBgJar1X, y: mabroomBgJar1Y, rotate: mabroomBgJar1Rotate }}
          className="absolute left-10 top-1/4 z-10"
        >
          <img
            src={product1?.frontJarImage}
            alt=""
            className="w-48 h-auto object-contain opacity-40 filter blur-[8px]"
          />
        </motion.div>

        <motion.div
          style={{ x: mabroomBgJar2X, y: mabroomBgJar2Y, rotate: mabroomBgJar2Rotate }}
          className="absolute right-10 top-1/3 z-10"
        >
          <img
            src={product1?.frontJarImage}
            alt=""
            className="w-40 h-auto object-contain opacity-30 filter blur-[12px]"
          />
        </motion.div>

        {/* Central Focused Jar with rotation */}
        <motion.div
          style={{ y: mabroomMainJarY, rotate: mabroomMainJarRotate }}
          className="relative z-50"
          onMouseEnter={() => setIsHoveringJar(true)}
          onMouseLeave={() => setIsHoveringJar(false)}
        >
          <img
            src={product1?.frontJarImage}
            alt={product1?.title}
            className="w-[400px] h-auto object-contain drop-shadow-2xl cursor-pointer"
          />
        </motion.div>

        {/* Product Info */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center z-50">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#B23A28] mb-3">
            {product1?.title}
          </h2>
          <p className="text-[#B23A28]/70 text-lg mb-4 max-w-xl mx-auto">
            {product1?.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl font-bold text-[#B23A28]">₹{product1?.price}</span>
            <span className="text-lg text-[#B23A28]/50 line-through">₹{product1?.mrp}</span>
            <span className="text-base text-[#B23A28] font-semibold">
              ({product1?.discount}% OFF)
            </span>
          </div>
          <Link
            href={`/catalog/${product1?.id}`}
            className="inline-block px-8 py-3 bg-[#B23A28] hover:bg-[#8B2E1F] text-white font-semibold rounded-full transition-colors"
          >
            View Details
          </Link>
        </div>
      </section>

      {/* Section 2: Medjool Dates - 3D Parallax with X-axis & Rotation */}
      <section className="h-screen relative flex items-center justify-center overflow-x-hidden">
        {/* Background Lifestyle Image */}
        <img
          src={product2?.bgLifestyleImage}
          alt={product2?.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Background Blurred Jars (Depth of Field with X-axis motion) */}
        <motion.div
          style={{ x: medjoolBgJar1X, y: medjoolBgJar1Y, rotate: medjoolBgJar1Rotate }}
          className="absolute left-20 top-1/4 z-10"
        >
          <img
            src={product2?.frontJarImage}
            alt=""
            className="w-52 h-auto object-contain opacity-40 filter blur-[8px]"
          />
        </motion.div>

        <motion.div
          style={{ x: medjoolBgJar2X, y: medjoolBgJar2Y, rotate: medjoolBgJar2Rotate }}
          className="absolute right-20 top-1/3 z-10"
        >
          <img
            src={product2?.frontJarImage}
            alt=""
            className="w-36 h-auto object-contain opacity-30 filter blur-[12px]"
          />
        </motion.div>

        {/* Central Focused Jar with rotation */}
        <motion.div
          style={{ y: medjoolMainJarY, rotate: medjoolMainJarRotate }}
          className="relative z-50"
          onMouseEnter={() => setIsHoveringJar(true)}
          onMouseLeave={() => setIsHoveringJar(false)}
        >
          <img
            src={product2?.frontJarImage}
            alt={product2?.title}
            className="w-[400px] h-auto object-contain drop-shadow-2xl cursor-pointer"
          />
        </motion.div>

        {/* Product Info */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center z-50">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#B23A28] mb-3">
            {product2?.title}
          </h2>
          <p className="text-[#B23A28]/70 text-lg mb-4 max-w-xl mx-auto">
            {product2?.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl font-bold text-[#B23A28]">₹{product2?.price}</span>
            <span className="text-lg text-[#B23A28]/50 line-through">₹{product2?.mrp}</span>
            <span className="text-base text-[#B23A28] font-semibold">
              ({product2?.discount}% OFF)
            </span>
          </div>
          <Link
            href={`/catalog/${product2?.id}`}
            className="inline-block px-8 py-3 bg-[#B23A28] hover:bg-[#8B2E1F] text-white font-semibold rounded-full transition-colors"
          >
            View Details
          </Link>
        </div>
      </section>
    </main>
  );
}
