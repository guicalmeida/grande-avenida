'use client'

import { useState } from "react";

export default function ContactForm({ pageTitle }: { pageTitle: string }) {
    const [phoneWithMask, setPhoneWithMask] = useState("");
  
    return (
      <form
        className="font-azeret p-6 flex flex-col gap-6 uppercase"
        name="interesse"
        method="post"
        data-netlify={true}
        encType="application/x-www-form-urlencoded"
      >
        <input type="hidden" name="form-name" value="interesse" />
        <div className="flex flex-col gap-2">
          <label className="ml-4 text-base" htmlFor="nome">
            Nome
          </label>
          <input
            className="appearance-none border border-black rounded-3xl w-full py-3 px-5 leading-tight focus:outline-none"
            name="nome"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="ml-4 text-base" htmlFor="email">
            E-mail
          </label>
          <input
            className="appearance-none border border-black rounded-3xl w-full py-3 px-5 leading-tight focus:outline-none"
            name="email"
            required
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="ml-4 text-base" htmlFor="celular">
            Celular
          </label>
          <input
            required
            className="appearance-none border border-black rounded-3xl w-full py-3 px-5 leading-tight focus:outline-none"
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
        </div>
        <input type="hidden" name="curso interessado" value={pageTitle} />
        <button
          type="submit"
          className="block bg-white px-[18px] md:px-[30px] py-3 md:py-[20px] font-azeret font-medium uppercase leading-[9px] md:leading-[14px] text-[9px] md:text-sm border-solid border-[1px] md:border-2 border-black rounded-[100px] w-[fit-content] hover:bg-primary transition-all"
        >
          Enviar
        </button>
      </form>
    );
  }
  