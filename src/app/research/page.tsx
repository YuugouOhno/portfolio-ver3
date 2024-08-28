import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "YuugouOhno's Research",
  description: "YuugouOhno's Research",
};

export default function Research() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-6xl">
      Research
      </p>
    </main>
  );
}
