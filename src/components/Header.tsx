import Image from "next/image";
import title from "../../public/title.svg";

export default function Header() {
  return (
    <header className="w-[fit-content]">
      <Image
        src={title}
        alt="Logotipo escrito A Grande Avenida"
        className="mb-4"
      />
      <div className="font-azeret font-semibold uppercase grid-cols-3	grid text-xs md:text-[28px] leading-5">
        <p className="">©2024</p>
        <p className="text-end">excursões</p>
        <p className="text-end">fora de curso</p>
      </div>
    </header>
  );
}
