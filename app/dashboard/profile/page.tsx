// app/dashboard/profile/page.tsx
"use client";

import { useState } from "react";
import { useAppSelector } from "@/store/store";
import { FiEdit2 } from "react-icons/fi";

type TabType =
  | "my-information"
  | "manage-feed"
  | "investment-preferences"
  | "communication-preferences";

export default function ProfilePage() {
  const user = useAppSelector((state) => state.auth.user);
  const isConnected = useAppSelector((state) => state.auth.isConnected);
  const [activeTab, setActiveTab] = useState<TabType>("my-information");
  const [formData, setFormData] = useState({
    firstName: "Name in here",
    lastName: "Name in here",
    loginEmail: user?.email || "test@gmail.com",
    preferredEmail: "",
    phoneNumber: "010 1234 5678",
    countryOfResidence: "Korea",
    city: "",
    streetAddress: "",
    linkedin: "",
  });

  const [profileClassification, setProfileClassification] = useState({
    startup: false,
    corporate: false,
    funding: false,
    learn: true,
  });

  if (!isConnected || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold mb-4">
            Please login first
          </h1>
          <p className="text-gray-400">
            You need to connect your wallet to access your profile.
          </p>
        </div>
      </div>
    );
  }

  const tabs: Array<{ id: TabType; label: string }> = [
    { id: "my-information", label: "My Information" },
    { id: "manage-feed", label: "Manage Feed" },
    { id: "investment-preferences", label: "Investment Preferences" },
    { id: "communication-preferences", label: "Communication Preferences" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof profileClassification,
  ) => {
    setProfileClassification((prev) => ({
      ...prev,
      [key]: e.target.checked,
    }));
  };

  return (
    <div className="w-full min-h-screen bg-[#0E0810] px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">My Profile</h1>
        </div>

        {/* Main Card */}
        <div className="border border-[#474747] rounded-2xl bg-[#1E1E1E] p-8">
          {/* Tabs */}
          <div className="flex gap-8 border-b border-[#474747] mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-white border-b-2 border-[#60A5E0]"
                    : "text-gray-500 hover:text-gray-300"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "my-information" && (
            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Personal Information
                  </h2>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#60A5E0] rounded-lg text-[#60A5E0] hover:bg-[#60A5E0]/10 transition">
                    <FiEdit2 className="w-4 h-4" />
                    Edit
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Name Row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled
                        className="mt-2 w-full bg-transparent text-white text-lg focus:outline-none disabled:cursor-default"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled
                        className="mt-2 w-full bg-transparent text-white text-lg focus:outline-none disabled:cursor-default"
                      />
                    </div>
                  </div>

                  {/* Email Row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        Login Email
                      </label>
                      <input
                        type="email"
                        name="loginEmail"
                        value={formData.loginEmail}
                        onChange={handleInputChange}
                        disabled
                        className="mt-2 w-full bg-transparent text-white text-lg focus:outline-none disabled:cursor-default"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        Preferred Email
                      </label>
                      <input
                        type="email"
                        name="preferredEmail"
                        value={formData.preferredEmail}
                        onChange={handleInputChange}
                        disabled
                        className="mt-2 w-full bg-transparent text-white text-lg focus:outline-none disabled:cursor-default"
                      />
                    </div>
                  </div>

                  {/* Phone & Country Row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        disabled
                        className="mt-2 w-full bg-transparent text-white text-lg focus:outline-none disabled:cursor-default"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        name="countryOfResidence"
                        value={formData.countryOfResidence}
                        onChange={handleInputChange}
                        disabled
                        className="mt-2 w-full bg-transparent text-white text-lg focus:outline-none disabled:cursor-default"
                      />
                    </div>
                  </div>

                  {/* City & Street Row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        disabled
                        className="mt-2 w-full bg-transparent text-white text-lg focus:outline-none disabled:cursor-default"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        disabled
                        className="mt-2 w-full bg-transparent text-white text-lg focus:outline-none disabled:cursor-default"
                      />
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      disabled
                      className="mt-2 w-full bg-transparent text-white text-lg focus:outline-none disabled:cursor-default"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#474747]" />

              {/* Password Section */}
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Personal Information
                    </h3>
                    <p className="text-gray-400">
                      It's highly recommended you use a unique and strong
                      password
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#60A5E0] rounded-lg text-[#60A5E0] hover:bg-[#60A5E0]/10 transition whitespace-nowrap">
                    <FiEdit2 className="w-4 h-4" />
                    Change Password
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#474747]" />

              {/* NDA Section */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  NDA Information
                </h3>
                <div className="border border-[#474747] rounded-lg p-6 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">General NDA</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Sign our General NDA for access to exclusive opportunities
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#36E8CA] rounded-lg text-[#36E8CA] hover:bg-[#36E8CA]/10 transition whitespace-nowrap">
                    <FiEdit2 className="w-4 h-4" />
                    Sign NDA
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#474747]" />

              {/* Profile Classification */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">
                    Profile Classification
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#60A5E0] rounded-lg text-[#60A5E0] hover:bg-[#60A5E0]/10 transition">
                    <FiEdit2 className="w-4 h-4" />
                    Edit
                  </button>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={profileClassification.startup}
                      onChange={(e) => handleCheckboxChange(e, "startup")}
                      disabled
                      className="w-5 h-5 rounded bg-[#2A2A2A] border border-[#474747] cursor-default"
                    />
                    <span className="text-gray-500">
                      Looking to invest in startups, venture funds, and
                      alternative investments?
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={profileClassification.corporate}
                      onChange={(e) => handleCheckboxChange(e, "corporate")}
                      disabled
                      className="w-5 h-5 rounded bg-[#2A2A2A] border border-[#474747] cursor-default"
                    />
                    <span className="text-gray-500">
                      A corporate executive looking to invest in and/or source
                      relevant technologies?
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={profileClassification.funding}
                      onChange={(e) => handleCheckboxChange(e, "funding")}
                      disabled
                      className="w-5 h-5 rounded bg-[#2A2A2A] border border-[#474747] cursor-default"
                    />
                    <span className="text-gray-500">
                      Seeking funding for your startup?
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={profileClassification.learn}
                      onChange={(e) => handleCheckboxChange(e, "learn")}
                      disabled
                      className="w-5 h-5 rounded bg-[#2A2A2A] border border-[#474747] cursor-default accent-[#36E8CA]"
                    />
                    <span className="text-gray-400">
                      Seeking to learn more about the startup ecosystem?
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Other Tabs */}
          {activeTab !== "my-information" && (
            <div className="text-center py-12">
              <p className="text-gray-400">Coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
