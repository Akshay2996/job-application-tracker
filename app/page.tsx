import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto py-32 px-4">
          <div>
            <h1 className="text-black">
              A better way to track job applications.
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
