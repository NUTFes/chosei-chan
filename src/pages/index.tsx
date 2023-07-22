import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <button className="btn">Button</button>
    </main>
  );
}
