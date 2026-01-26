"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type TabTypes = "organize" | "hired" | "boards";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabTypes>("organize");

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto py-32 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track job applications
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize and manage your job search in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="h-12 px-8 text-lg font-medium cursor-pointer"
                >
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free forever. No credit card required.
              </p>
            </div>
          </div>
        </section>
        {/* Hero images section */}
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* Tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button
                  className="cursor-pointer"
                  onClick={() => setActiveTab("organize")}
                >
                  Organize Applications
                </Button>
                <Button
                  className="cursor-pointer"
                  onClick={() => setActiveTab("hired")}
                >
                  Get Hired 
                </Button>
                <Button
                  className="cursor-pointer"
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
      </main>
    </div>
  );
}
