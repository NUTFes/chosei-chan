import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/common"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <button className="btn">Button</button>
      <Footer/>
    </main>
  );
}
