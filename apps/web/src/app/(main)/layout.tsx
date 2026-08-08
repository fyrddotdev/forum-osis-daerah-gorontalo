
import Navbar from "@/components/modules/layout/navbar";
import Footer from "@/components/modules/layout/footer";


import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
