import { businessInfo } from "@/data/products";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#B23A28] text-[#FDFBF5]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Branding */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">SLYZZY TRADERS</h3>
            <p className="text-sm opacity-90 mb-4">{businessInfo.tagline}</p>
            <p className="text-sm opacity-75">{businessInfo.address}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-2">
              {businessInfo.phone.map((phone) => (
                <li key={phone} className="text-sm opacity-90">
                  {phone}
                </li>
              ))}
              <li className="text-sm opacity-90">{businessInfo.email}</li>
            </ul>
          </div>

          {/* Column 4: Question */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">Help</h4>
            <p className="text-sm opacity-90 mb-4">Do you have a question?</p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border border-[#FDFBF5] text-sm font-semibold hover:bg-[#FDFBF5] hover:text-[#B23A28] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FDFBF5]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75">Est. 2020</p>
          <p className="text-sm opacity-75 mt-4 md:mt-0">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
