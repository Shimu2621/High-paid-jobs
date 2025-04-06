import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Star } from "lucide-react";
import Container from "@/utils/container/Container";
import logo2 from "../../../../public/images/logo2.webp";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] text-white">
      <Container>
        <div className="px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center pb-3">
                <Image src={logo2} alt="Logo" width={130} height={130} />
                <p className="text-gray-200 font-semibold text-sm">
                  Reach the top 1%
                </p>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg text-text-white font-medium mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How it works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg text-text-white font-medium mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Term and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-lg text-text-white font-medium mb-4">
                  Contact Info
                </h3>
                <Star className="h-5 w-5 text-text-white" />
              </div>
              <p className="text-gray-400 mb-2">highpaidjobs.us@gmail.com</p>
              <p className="text-gray-400 mb-4">WhatsApp: +1 586-665-3331</p>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2023 All rights reserved by HighPaidJobs
          </div>
        </div>
      </Container>
    </footer>
  );
}
