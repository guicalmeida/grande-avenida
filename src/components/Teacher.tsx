import { Teacher } from "@/models/common.model";
import Image from "next/image";
import HTMLText from "./HTMLText";

export default function Teacher({ teacher }: { teacher: Teacher }) {
  return (
    <div className="flex gap-9">
      <Image
        className="object-cover h-[105px] md:h-[312px] w-[105px] md:w-[312px] rounded-[60px]"
        src={teacher.perfil.url}
        alt={`foto de perfil de ${teacher.nome}`}
        width={teacher.perfil.width}
        height={teacher.perfil.height}
      />
      <div className="font-azeret">
        <h3 className="uppercase font-semibold text-lg mb-2 md:mb-9">O Professor</h3>
        <HTMLText text={teacher.sobre.html} />
      </div>
    </div>
  );
}
