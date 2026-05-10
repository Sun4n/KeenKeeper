import Banner from "@/component/Banner/Banner";
import Image from "next/image";
import Friend from "./friend/page";

export default function Home() {
  return (
    <div>
      <main className="mx-auto max-w-[1100px]  ">
        <Banner></Banner>
        <Friend></Friend>
      </main>
    </div>
  );
}
