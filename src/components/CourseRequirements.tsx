"use client";

import { Course } from "@/models/course.model";
import dayjs from "dayjs";
import Separator from "./Separator";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function CourseRequirements({ curso }: { curso: Course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { formatoDaAula, valor, statusDeInscricao, inicio } = curso;
  const isClosed = dayjs(inicio).isBefore(dayjs()) || !statusDeInscricao;
  return (
    <>
      <div className="uppercase font-azeret font-medium text-sm md:text-lg leading-6 flex flex-col whitespace-pre md:max-w-[450px]">
        {formatoDaAula && (
          <div>
            <Separator />
            <p className="my-4">{formatoDaAula}</p>
          </div>
        )}
        {valor && (
          <div>
            <Separator />
            <p className="my-4">{valor}</p>
          </div>
        )}
        <Separator />
        <div className="mt-4">
          <button
            className="block bg-white px-[18px] md:px-[30px] py-3 md:py-[20px] font-azeret font-medium uppercase leading-[9px] md:leading-[14px] text-[9px] md:text-sm border-solid border-[1px] md:border-2 border-black rounded-[100px] w-[fit-content] hover:bg-primary transition-all"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {isClosed ? "Demonstrar interesse" : "Inscreva-se"}
          </button>
        </div>
      </div>
      {isModalOpen && (<ContactModal setIsOpen={setIsModalOpen} pageTitle={curso.titulo} />)}
    </>
  );
}
