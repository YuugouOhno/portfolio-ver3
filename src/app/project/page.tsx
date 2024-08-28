import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "YuugouOhno's Project",
  description: "YuugouOhno's Project",
};

export default function Project() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-6xl">
      Project
      </p>
    </main>
  );
}
