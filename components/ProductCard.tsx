"use client";

import { motion } from "framer-motion";
import { Tag, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import Link from "next/link";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80";

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <Link href={`/catalog/${product.id}`}>
        <div className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white border border-[#B23A28]/20">
          {/* Product Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={imgError ? fallbackImage : product.frontJarImage}
              alt={product.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B23A28]/20 via-transparent to-transparent" />
          </div>

          {/* Product Info */}
          <div className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#B23A28] text-lg mb-1 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-sm text-[#B23A28]/60">{product.weight}</p>
              </div>
              <div className="flex items-center text-[#B23A28] bg-[#B23A28]/10 px-2 py-1 rounded-lg">
                <Tag className="w-4 h-4 mr-1" />
                <span className="text-xs font-semibold">{product.category}</span>
              </div>
            </div>

            <p className="text-sm text-[#B23A28]/70 line-clamp-2 mb-4 h-10">
              {product.description}
            </p>

            {/* Price/MRP */}
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-extrabold text-[#B23A28]">₹{product.price}</span>
              <span className="text-lg text-[#B23A28]/50 line-through ml-2">₹{product.mrp}</span>
            </div>

            {/* Slide-up Button on Hover */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-5 pt-8 bg-gradient-to-t from-white via-white to-transparent"
            >
              <div className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-colors shadow-lg bg-[#B23A28] hover:bg-[#8B2E1F] text-white">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
