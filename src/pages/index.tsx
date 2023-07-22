import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/common"
import { Button } from "@/components/common";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main>
      <Button>Button</Button>
    </main>
  );
}
