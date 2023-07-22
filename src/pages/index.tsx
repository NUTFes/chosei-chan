import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <button className="btn">Button</button>
      <textarea className="textarea" placeholder="hello"></textarea>
    </main>
  );
}
