"use client";

import { Dispatch, ReactNode, useState } from "react";
import close_btn from "../../public/close_btn.svg";
import Image from "next/image";

export default function ContactModal({
  pageTitle,
  setIsOpen,
  children = "Entre em contato",
}: {
  pageTitle: string;
  setIsOpen: Dispatch<boolean>;
  children: ReactNode;
}) {
  const [phoneWithMask, setPhoneWithMask] = useState("");

  const inputStyling =
    "text-xs md:text-lg appearance-none border-0 w-full border-b-[1.22px] md:border-b-[3px] pl-[2px] pb-1 uppercase border-dotted bg-white border-black color-[#838383] focus:outline-none mb-10 font-medium";

  return (
    <div
      className="bg-[#00000080] w-screen h-screen fixed top-0 left-0 overflow-hidden flex items-center justify-center cursor-zoom-out z-40"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div
        className="bg-white rounded-[34px] md:rounded-[60px] relative w-full md:w-[900px] md:min-w-[500px] h-fit cursor-auto mt-20 md:mt-0 mx-3 md:mx-0"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          aria-label="fechar"
          className="absolute -top-[75px] left-0 right-0 w-fit md:top-10 md:right-10 md:left-auto mx-auto"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Image src={close_btn} alt="circulo com X no centro" />
        </button>
        <div className="px-7 py-5 md:p-10">
          <div>
            <h1 className="leading-10 md:leading-normal text-[40px] md:text-[90px] mb-12 md:mb-16">
              {children}
            </h1>
          </div>
          <form
            className="font-azeret flex flex-col gap-6 uppercase"
            name="interesse"
            method="POST"
            data-netlify="true"
            encType="application/x-www-form-urlencoded"
          >
            <input type="hidden" name="form-name" value="interesse" />
            <input
              className={inputStyling}
              name="nome"
              type="text"
              required
              placeholder="seu nome"
            />
            <input
              placeholder="e-mail"
              className={inputStyling}
              name="email"
              required
              type="email"
            />
            <input
              required
              placeholder="celular"
              className={inputStyling}
              name="celular"
              type="tel"
              maxLength={15}
              value={phoneWithMask}
              onChange={(e) => {
                const input = e.target.value.replace(/\D/g, "");
                let formattedNumber = "";

                if (input.length > 0) {
                  formattedNumber += "(";
                  formattedNumber += input.slice(0, 2);
                  if (input.length > 2) {
                    formattedNumber += ") " + input.slice(2, 7);
                  }
                  if (input.length > 7) {
                    formattedNumber += "-" + input.slice(7);
                  }
                }
                setPhoneWithMask(formattedNumber);
              }}
            />
            <input type="hidden" name="curso interessado" value={pageTitle} />
            <button
              type="submit"
              className="block bg-white px-8 md:px-12 py-3 md:py-5 font-azeret font-medium uppercase leading-[9px] md:leading-[14px] text-[9px] md:text-sm border-solid border-[1px] md:border-2 border-black rounded-[100px] w-[fit-content] hover:bg-primary transition-all ml-auto md:mr-0 mr-auto"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
