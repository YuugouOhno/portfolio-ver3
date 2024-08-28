import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "YuugouOhno's Achievement",
  description: "YuugouOhno's Achievement",
};

export default function Achievement() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-6xl">
      Achievement
      </p>
    </main>
  );
}
