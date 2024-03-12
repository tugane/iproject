import Image from "next/image";
import ServiceForm from "@/components/forms/ServiceForm";

export default function Home() {
  return (
    <main className={'bg-white w-full h-screen px-16 py-8'}>
      <ServiceForm/>
    </main>
  );
}
