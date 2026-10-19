"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Diamond } from "lucide-react";
import { businessInfo } from "@/data/products";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FDFBF5] pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-serif text-[#B23A28] leading-none mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-[#B23A28]/70 max-w-2xl mx-auto">
            Get in touch for bulk orders and inquiries
          </p>
        </motion.div>

        {/* Diamond Divider */}
        <div className="flex justify-center mb-12">
          <Diamond className="w-6 h-6 text-[#B23A28] rotate-45" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#B23A28]/20">
              <h2 className="text-2xl font-serif text-[#B23A28] mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#B23A28] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[#B23A28]/30 focus:border-[#B23A28] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#B23A28] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-[#B23A28]/30 focus:border-[#B23A28] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#B23A28] mb-2">Inquiry</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#B23A28]/30 focus:border-[#B23A28] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your bulk order inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#B23A28] hover:bg-[#8B2E1F] text-white font-semibold rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-serif text-[#B23A28] mb-6">Get in touch</h2>
              <p className="text-[#B23A28]/70 mb-8">
                {businessInfo.tagline}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B23A28]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#B23A28]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#B23A28] mb-1">Address</h3>
                  <p className="text-[#B23A28]/70">{businessInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B23A28]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#B23A28]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#B23A28] mb-1">Phone</h3>
                  {businessInfo.phone.map((phone) => (
                    <p key={phone} className="text-[#B23A28]/70">
                      {phone}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B23A28]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#B23A28]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#B23A28] mb-1">Email</h3>
                  <p className="text-[#B23A28]/70">{businessInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#B23A28]/20">
              <p className="text-sm text-[#B23A28]/60">
                Authorized Distributor, Est. 2020
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
