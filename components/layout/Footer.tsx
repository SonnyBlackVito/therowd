"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const exploreLinks = [
    { label: "Opportunities", href: "/opportunities" },
    { label: "Investment Themes", href: "/investment-themes" },
    { label: "Funded Portfolio", href: "/funded-portfolio" },
    { label: "Incubators", href: "/incubators" },
    { label: "For Corporations", href: "/for-corporations" },
  ];

  const discoverLinks = [
    { label: "How to Invest", href: "/how-to-invest" },
    { label: "Learn", href: "/learn" },
    { label: "About OurCrowd", href: "/about" },
    { label: "Our Co-Investors", href: "/co-investors" },
    { label: "Social Impact", href: "/social-impact" },
    { label: "FAQ", href: "/faq" },
    { label: "Startup News", href: "/startup-news" },
  ];

  const connectLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "Startup Application", href: "/startup-application" },
    { label: "OurCrowd Jobs", href: "/jobs" },
    { label: "Events Calendar", href: "/events" },
    { label: "Delegations", href: "/delegations" },
    { label: "Media Toolkit", href: "/media-toolkit" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", href: "https://facebook.com" },
    { name: "Instagram", icon: "instagram", href: "https://instagram.com" },
    { name: "YouTube", icon: "youtube", href: "https://youtube.com" },
    { name: "Twitter", icon: "twitter", href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-neutral-900 text-gray-400">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/logo/logo-white.png"
                alt="THEROWD Logo"
                width={180}
                height={48}
                className="w-32 sm:w-40 lg:w-44 h-auto"
                priority
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Explore
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {exploreLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base hover:text-white transition-colors duration-200 block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Discover
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {discoverLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base hover:text-white transition-colors duration-200 block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Connect
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {connectLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base hover:text-white transition-colors duration-200 block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Subscribe
            </h3>
            <div className="mb-4 sm:mb-6">
              <form className="w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full bg-neutral-700 rounded-full px-4 py-2.5 sm:py-2 outline-none text-white placeholder-gray-400 text-sm sm:text-base focus:ring-2 focus:ring-[#36E8CA] focus:bg-neutral-600 transition-all duration-200"
                />
              </form>
            </div>

            <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-neutral-700 rounded-lg hover:bg-gradient-to-r hover:from-[#60A5E0] hover:to-[#36E8CA] transition-all duration-200"
                  aria-label={social.name}>
                  {social.icon === "facebook" && (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.icon === "youtube" && (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-neutral-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              2025 TheROWD©All right reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors duration-200">
                Cookies Settings
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
