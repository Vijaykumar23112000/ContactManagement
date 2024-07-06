import HomeClient from "@/components/home/HomeClient";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="flex justify-center items-center gap-1 h-screen w-screen bg-red-300">
          <Link href="/contacts">Lets Get Started</Link>
      </div>
    </>
  );
}
