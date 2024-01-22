"use client";
import { BarChart, Compass, Layout, List } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  { label: "Dashboard", href: "/", icon: Layout },
  { label: "Browse", href: "/search", icon: Compass },
];

const teacherRoutes = [
  { label: "Courses", href: "/teacher/courses", icon: List },
  { label: "Analytics", href: "/teacher/analytics", icon: BarChart },
];
const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
