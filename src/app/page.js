import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h6>Hello Next JS in Builder</h6>
      <Heading></Heading>
      <button>Time to Learn</button>
    </div>
  );
}
