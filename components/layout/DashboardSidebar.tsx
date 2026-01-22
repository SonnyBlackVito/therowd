"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCompass,
  FiHome,
  FiTrendingUp,
  FiStar,
  FiBookOpen,
  FiCalendar,
  FiPieChart,
  FiClock,
  FiBarChart2,
  FiBriefcase,
  FiFileText,
  FiRefreshCw,
  FiMenu,
  FiUser,
  FiSmartphone,
  FiUsers,
  FiMessageCircle,
  FiExternalLink,
} from "react-icons/fi";
import GradientButton from "@/components/ui/buttons/GradientButton";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
}

const sections: Array<{
  title: string;
  icon: React.ReactNode;
  items: NavItem[];
}> = [
  {
    title: "Explore",
    icon: <FiCompass className="h-6 w-6 text-white" />,
    items: [
      {
        label: "Home",
        icon: <FiHome className="h-5 w-5" />,
        href: "/dashboard",
      },
      {
        label: "Opportunities",
        icon: <FiTrendingUp className="h-5 w-5" />,
        href: "/dashboard/opportunities",
      },
      {
        label: "News Feed",
        icon: <FiStar className="h-5 w-5" />,
        href: "/dashboard/news",
      },
      {
        label: "How to Invest",
        icon: <FiBookOpen className="h-5 w-5" />,
        href: "/dashboard/how-to-invest",
      },
      {
        label: "Events & Webinars",
        icon: <FiCalendar className="h-5 w-5" />,
        href: "/dashboard/events",
      },
    ],
  },
  {
    title: "My Investments",
    icon: <FiPieChart className="h-6 w-6 text-white" />,
    items: [
      {
        label: "Pending",
        icon: <FiClock className="h-5 w-5" />,
        href: "/dashboard/pending",
      },
      {
        label: "Performance",
        icon: <FiBarChart2 className="h-5 w-5" />,
        href: "/dashboard/performance",
      },
      {
        label: "Holdings",
        icon: <FiBriefcase className="h-5 w-5" />,
        href: "/dashboard/holdings",
      },
      {
        label: "Reports & Tax Docs",
        icon: <FiFileText className="h-5 w-5" />,
        href: "/dashboard/reports",
      },
      {
        label: "Activities",
        icon: <FiRefreshCw className="h-5 w-5" />,
        href: "/dashboard/activities",
      },
    ],
  },
  {
    title: "General",
    icon: <FiMenu className="h-6 w-6 text-white" />,
    items: [
      {
        label: "My Profile",
        icon: <FiUser className="h-5 w-5" />,
        href: "/dashboard/profile",
      },
      {
        label: "Mobile App",
        icon: <FiSmartphone className="h-5 w-5" />,
        href: "/dashboard/mobile-app",
      },
      {
        label: "Refer a Friend",
        icon: <FiUsers className="h-5 w-5" />,
        href: "/dashboard/refer",
      },
      {
        label: "Contact Us",
        icon: <FiMessageCircle className="h-5 w-5" />,
        href: "/contact-us",
      },
      {
        label: "Go to SPECFIN",
        icon: <FiExternalLink className="h-5 w-5" />,
        href: "/",
        external: true,
      },
    ],
  },
];

interface NavItemComponentProps extends NavItem {
  active: boolean;
  onItemClick?: () => void;
}

function NavItemComponent({
  label,
  icon,
  href,
  active,
  external,
  onItemClick,
}: NavItemComponentProps) {
  const className = `flex items-center gap-4 rounded px-3 py-2 text-sm transition ${
    active
      ? "bg-linear-to-r from-[#60A5E0] to-[#36E8CA] text-white font-semibold"
      : "text-[#DEDEDE] hover:bg-[#303030]"
  }`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onItemClick}>
        {icon}
        <span className="flex-1">{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onItemClick}>
      {icon}
      <span className="flex-1">{label}</span>
    </Link>
  );
}

function NavSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-col gap-2 pl-2">{children}</div>
    </div>
  );
}

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function DashboardSidebar({
  isOpen,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen && onClose) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleItemClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const sidebarContent = (
    <aside className="fixed left-0 top-19 bottom-0 w-65 overflow-y-auto border-r border-[#474747] bg-[#0E0810] lg:block dashboard-scroll">
      <div className="flex h-full flex-col gap-8 px-6 py-8">
        {sections.map((section) => (
          <NavSection
            key={section.title}
            icon={section.icon}
            title={section.title}>
            {section.items.map((item) => (
              <NavItemComponent
                key={item.label}
                {...item}
                active={
                  pathname === item.href ||
                  (!!item.href && pathname?.startsWith(item.href))
                }
                onItemClick={handleItemClick}
              />
            ))}
          </NavSection>
        ))}

        <GradientButton
          className="w-full rounded-lg border-2 border-[#60A5E0] text-white shadow-[0_4px_4px_rgba(96,165,224,0.5)]"
          gradient="linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)"
          size="sm">
          Get the SPECFIN App
        </GradientButton>
      </div>
    </aside>
  );

  return (
    <>
      <div className="hidden lg:block">{sidebarContent}</div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={onClose}
            />

            <motion.div
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-19 bottom-0 w-65 overflow-y-auto border-r border-[#474747] bg-[#0E0810] z-50 lg:hidden dashboard-scroll">
              <div className="flex h-full flex-col gap-8 px-6 py-8">
                {sections.map((section) => (
                  <NavSection
                    key={section.title}
                    icon={section.icon}
                    title={section.title}>
                    {section.items.map((item) => (
                      <NavItemComponent
                        key={item.label}
                        {...item}
                        active={
                          pathname === item.href ||
                          (!!item.href && pathname?.startsWith(item.href))
                        }
                        onItemClick={handleItemClick}
                      />
                    ))}
                  </NavSection>
                ))}

                <GradientButton
                  className="w-full rounded-lg border-2 border-[#60A5E0] text-white shadow-[0_4px_4px_rgba(96,165,224,0.5)]"
                  gradient="linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)"
                  size="sm">
                  Get the SPECFIN App
                </GradientButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
