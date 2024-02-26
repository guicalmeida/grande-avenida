"use client";

import { Dispatch } from "react";
import ContactForm from "./ContactForm";

export default function ContactModal({
  pageTitle,
  setIsOpen,
}: {
  pageTitle: string;
  setIsOpen: Dispatch<boolean>;
}) {
  return (
    <div
      className="bg-[#00000080] w-screen h-screen fixed top-0 left-0 overflow-hidden flex items-start md:items-center justify-center cursor-zoom-out z-40"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div
        className="bg-white rounded-xl  w-full md:w-[500px] h-[400px] cursor-auto pointer-events-none mt-20 md:mt-0 mx-8 md:mx-0"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ContactForm pageTitle={pageTitle} />
      </div>
    </div>
  );
}
