"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

type TabTypes = "organize" | "hired" | "boards";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState<TabTypes>("organize");

  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex gap-2 justify-center mb-8">
            <Button
              className={`cursor-pointer rounded-lg px-6 py-3text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setActiveTab("organize")}
            >
              Organize Applications
            </Button>
            <Button
              className={`cursor-pointer rounded-lg px-6 py-3text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setActiveTab("hired")}
            >
              Get Hired
            </Button>
            <Button
              className={`cursor-pointer rounded-lg px-6 py-3text-sm font-medium transition-colors ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setActiveTab("boards")}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            {/* Images */}
            {activeTab === "organize" && (
              <Image
                src="/hero-images/hero1.png"
                width={1200}
                height={800}
                alt="Organize Applications"
              />
            )}
            {activeTab === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                width={1200}
                height={800}
                alt="Get Hired"
              />
            )}
            {activeTab === "boards" && (
              <Image
                src="/hero-images/hero3.png"
                width={1200}
                height={800}
                alt="Manage Boards"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
