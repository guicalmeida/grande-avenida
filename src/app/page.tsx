import Image from "next/image";
import title from "../../public/title.svg";
import { azeret_mono } from "./fonts";

export default function Home() {
  return (
    <main className="container mx-auto">
      <header className="w-[fit-content]">
        <Image src={title} alt="Logotipo escrito A Grande Avenida" className="mb-4" />
        <div
          className={`${azeret_mono.className} font-semibold uppercase grid-cols-3	grid text-[28px] leading-5`}
        >
          <p className="">©2024</p>
          <p className="text-end">excursões</p>
          <p className="text-end">fora de curso</p>
        </div>
      </header>
    </main>
  );
}
