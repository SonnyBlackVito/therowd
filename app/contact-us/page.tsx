// app/contact/page.tsx
"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Gửi request đến API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage(
          "✓ Message sent successfully! We'll get back to you soon.",
        );
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitMessage("✗ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("✗ An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      id: 1,
      title: "Need a consultant for TheROWD?",
      email: "solutions@therowd.io",
      gradient:
        "bg-[linear-gradient(90deg,rgba(213,224,245,1)_0%,rgba(206,237,242,1)_100%)]",
      border: "border-blue-400/30",
    },
    {
      id: 2,
      title: "Need a support for TheROWD?",
      email: "support@therowd.io",
      gradient:
        "bg-[linear-gradient(90deg,rgba(213,245,223,1)_0%,rgba(206,209,242,1)_100%)]",
      border: "border-green-400/30",
    },
    {
      id: 3,
      title: "Want to invest in TheROWD?",
      email: "solutions@therowd.io",
      gradient:
        "bg-[linear-gradient(90deg,rgba(245,235,255,1)_0%,rgba(255,242,227,1)_100%)]",
      border: "border-orange-400/30",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0E0810] px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Header */}
        <div className="lg:col-span-2">
          <h1
            className="text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            Contact Us:
          </h1>
          <p className="text-2xl text-white italic mb-8">
            Have a question or need guidance?
          </p>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            Whether you're reaching out after a Privacy Scan or just want to
            explore how TheROWD can support your business, leave your details
            below and we'll be in touch shortly.
          </p>
          {/* Left Column - Contact Options */}
          <div className="lg:col-span-1 space-y-6">
            {contactOptions.map((option) => (
              <a
                key={option.id}
                href={`mailto:${option.email}`}
                className={`block p-6 rounded-2xl border ${option.border} ${option.gradient}
        hover:shadow-xl transition-all group cursor-pointer`}>
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-[#4F4F4F] group-hover:text-[#36E8CA] transition">
                    {option.title}
                  </h3>

                  <FiArrowRight className="w-6 h-6 text-[#4F4F4F] group-hover:text-[#36E8CA] transition mt-1" />
                </div>

                <p className="text-sm text-[#4F4F4F]/70 mt-2">{option.email}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-2">
          {/* Glass Card Wrapper */}
          <div
            className="
  relative
  rounded-xl
  border border-[#D5E0F5]
  bg-[radial-gradient(107.32%_141.42%_at_100%_5%,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.00)_100%)]
  backdrop-blur-[15px]
  p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Your Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="
            w-full px-4 py-3
            bg-white/10
            border border-white/20
            rounded-lg
            text-white
            placeholder-white/50
            focus:outline-none
            focus:border-[#60A5E0]
            transition
          "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Your Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                  className="
            w-full px-4 py-3
            bg-white/10
            border border-white/20
            rounded-lg
            text-white
            placeholder-white/50
            focus:outline-none
            focus:border-[#60A5E0]
            transition
          "
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                  className="
            w-full px-4 py-3
            bg-white/10
            border border-white/20
            rounded-lg
            text-white
            placeholder-white/50
            focus:outline-none
            focus:border-[#60A5E0]
            transition
          "
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Company <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your company name"
                  className="
            w-full px-4 py-3
            bg-white/10
            border border-white/20
            rounded-lg
            text-white
            placeholder-white/50
            focus:outline-none
            focus:border-[#60A5E0]
            transition
          "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  How can our team help you?{" "}
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="
            w-full px-4 py-3
            bg-white/10
            border border-white/20
            rounded-lg
            text-white
            placeholder-white/50
            focus:outline-none
            focus:border-[#60A5E0]
            transition
            resize-none
          "
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
            px-8 py-3
            bg-gradient-to-r from-[#60A5E0] to-[#36E8CA]
            text-white font-semibold
            rounded-lg
            hover:opacity-90
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          ">
                  {isSubmitting ? "Sending..." : "Send inquiry"}
                </button>

                {submitMessage && (
                  <p
                    className={`text-sm ${
                      submitMessage.includes("✓")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}>
                    {submitMessage}
                  </p>
                )}

                <p className="text-sm text-white/60">
                  Powered by{" "}
                  <span className="font-semibold text-white">SPECFIN</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
