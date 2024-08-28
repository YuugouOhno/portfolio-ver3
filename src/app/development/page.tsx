import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "YuugouOhno's Development",
  description: "YuugouOhno's Development",
};

export default function Development() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-6xl">
      Development
      </p>
    </main>
  );
}
