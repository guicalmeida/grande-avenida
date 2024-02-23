"use client";

import Image from "next/image";
import aga_icon from "../../public/aga_icon.svg";
import green_ball from "../../public/green_ball.svg";
import close from "../../public/close.svg";
import { Dispatch, useState } from "react";
import Link from "next/link";

function TopMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}) {
  return (
    <div className="flex items-center justify-between fixed top-5 left-0 w-[100%]  px-3 md:px-5 z-50">
      <Link href="/">
        <Image
          src={aga_icon}
          alt="logotipo reduzido da Grande Avenida, escrito A G A"
          className={`max-w-[75px] md:max-w-[130px] object-contain  ${
            isOpen && "invert"
          }`}
        />
      </Link>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex gap-3 items-center"
        aria-label={isOpen ? "fechar menu" : "abrir menu"}
      >
        <div className="relative">
          <Image
            src={close}
            alt={isOpen ? "x" : "+"}
            className={`block md:hidden w-3 absolute right-[6px] bottom-[6px] ${
              isOpen ? "rotate-0" : "rotate-45"
            } transition-all duration-300`}
          />
          <Image
            src={green_ball}
            alt="circulo verde"
            className="w-6 h-6 object-contain md:pb-1"
          />
        </div>
        <span
          className={`hidden md:block font-azeret font-semibold text-[28px] uppercase ${
            isOpen && "text-white"
          }`}
        >
          {isOpen ? "Fechar" : "Menu"}
        </span>
      </button>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <TopMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && (
        <div className="fixed left-0 top-0 w-screen h-screen bg-black">
          <nav className="mt-36 ml-5">
            <ul className="flex flex-col font-timesNow text-6xl md:text-9xl text-white">
              <li className="w-fit" onClick={() => setIsOpen(false)}>
                <Link href="/">Home</Link>
              </li>
              <li className="w-fit" onClick={() => setIsOpen(false)}>
                <Link href="/cursos">Cursos</Link>
              </li>
              <li className="w-fit" onClick={() => setIsOpen(false)}>
                <Link href="/#sobre">Sobre</Link>
              </li>
              <li className="w-fit" onClick={() => setIsOpen(false)}>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
