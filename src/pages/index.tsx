import { Inter } from "next/font/google";
import { MainLayout } from "@/components/layout/MainLayout";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return <MainLayout>hello</MainLayout>;
};
