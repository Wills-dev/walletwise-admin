"use client";

import { useState } from "react";

import Container from "@/components/atoms/Container/Container";
import Navbar from "@/components/organisms/Navbar/Navbar";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";

const DashboardLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 w-full">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="lg:ml-24">
        <Navbar
          title={title}
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <main className="py-20">
          <Container className="xl:px-6">{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
