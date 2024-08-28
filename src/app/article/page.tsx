import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "YuugouOhno's Article",
  description: "YuugouOhno's Article",
};


export default function Article() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-6xl">
      Article
      </p>
    </main>
  );
}
