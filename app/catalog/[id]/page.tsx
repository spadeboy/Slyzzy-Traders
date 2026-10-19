"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Star, Check, Diamond } from "lucide-react";

export default function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FDFBF5] flex items-center justify-center">
        <p className="text-2xl text-[#B23A28]">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF5]">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-6 bg-[#FDFBF5]/80 backdrop-blur-md"
      >
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-[#B23A28] hover:text-[#8B2E1F] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="text-lg font-semibold">Back</span>
        </Link>
      </motion.div>

      {/* Hero Section with Massive Title */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Massive Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10vw] font-serif text-[#B23A28] leading-none text-center mb-16"
          >
            {product.title.toUpperCase()}
          </motion.h1>

          {/* Overlapping Jar with Floating Labels */}
          <div className="relative max-w-4xl mx-auto mb-16">
            {/* Left Floating Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#B23A28]/60 text-sm tracking-wider"
            >
              Premium Quality
            </motion.div>

            {/* Center Jar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 flex justify-center"
            >
              <img
                src={product.frontJarImage}
                alt={product.title}
                className="max-w-[400px] w-full h-auto object-contain drop-shadow-2xl rotate-3"
              />
            </motion.div>

            {/* Right Floating Label */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#B23A28]/60 text-sm tracking-wider text-right"
            >
              Product of Saudi Arabia
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xl text-[#B23A28]/70 max-w-2xl mx-auto mb-12"
          >
            {product.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Diamond Divider */}
      <div className="flex justify-center mb-12">
        <Diamond className="w-6 h-6 text-[#B23A28] rotate-45" />
      </div>

      {/* Description & Features */}
      <section className="px-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center text-lg text-[#B23A28]/80 mb-12 leading-relaxed"
          >
            {product.description}
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-4"
          >
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 text-[#B23A28]/90">
                <Check className="w-5 h-5 text-[#B23A28] flex-shrink-0 mt-1" />
                <span className="text-base leading-relaxed">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diamond Divider */}
      <div className="flex justify-center mb-12">
        <Diamond className="w-6 h-6 text-[#B23A28] rotate-45" />
      </div>

      {/* Spec Grid */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#B23A28]">
            {/* Weight */}
            <div className="p-6 border-r border-b border-[#B23A28]">
              <div className="text-[#B23A28]/60 text-xs uppercase tracking-wider mb-2">Weight</div>
              <div className="text-[#B23A28] text-xl font-semibold">{product.weight}</div>
            </div>
            {/* Origin */}
            <div className="p-6 border-r border-b border-[#B23A28]">
              <div className="text-[#B23A28]/60 text-xs uppercase tracking-wider mb-2">Origin</div>
              <div className="text-[#B23A28] text-xl font-semibold">{product.origin}</div>
            </div>
            {/* Price */}
            <div className="p-6 border-r border-b border-[#B23A28]">
              <div className="text-[#B23A28]/60 text-xs uppercase tracking-wider mb-2">Price</div>
              <div className="text-[#B23A28] text-xl font-semibold">₹{product.price}</div>
            </div>
            {/* Rating */}
            <div className="p-6 border-b border-[#B23A28]">
              <div className="text-[#B23A28]/60 text-xs uppercase tracking-wider mb-2">Rating</div>
              <div className="text-[#B23A28] text-xl font-semibold">{product.rating}</div>
            </div>
            {/* Brand */}
            <div className="p-6 border-r border-[#B23A28]">
              <div className="text-[#B23A28]/60 text-xs uppercase tracking-wider mb-2">Brand</div>
              <div className="text-[#B23A28] text-xl font-semibold">Slyzzy Dates</div>
            </div>
            {/* MRP */}
            <div className="p-6 border-r border-[#B23A28]">
              <div className="text-[#B23A28]/60 text-xs uppercase tracking-wider mb-2">MRP</div>
              <div className="text-[#B23A28]/50 text-xl line-through">₹{product.mrp}</div>
            </div>
            {/* Discount */}
            <div className="p-6 border-r border-[#B23A28]">
              <div className="text-[#B23A28]/60 text-xs uppercase tracking-wider mb-2">Discount</div>
              <div className="text-[#B23A28] text-xl font-semibold">{product.discount}</div>
            </div>
            {/* Category */}
            <div className="p-6">
              <div className="text-[#B23A28]/60 text-xs uppercase tracking-wider mb-2">Category</div>
              <div className="text-[#B23A28] text-xl font-semibold">{product.category}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diamond Divider */}
      <div className="flex justify-center mb-12">
        <Diamond className="w-6 h-6 text-[#B23A28] rotate-45" />
      </div>

      {/* Lifestyle Gallery */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-[#B23A28] mb-8 text-center">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.images.map((img, index) => (
              <motion.img
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                src={img}
                alt={`${product.title} - Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B23A28] hover:bg-[#8B2E1F] text-white text-lg font-bold rounded-full transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Inquire for Bulk Pricing</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
