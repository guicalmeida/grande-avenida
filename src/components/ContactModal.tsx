'use client'

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
      className="bg-[#00000080] w-screen h-screen fixed top-0 left-0 overflow-hidden flex items-center justify-center cursor-zoom-out"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div
        className="bg-white rounded-xl min-w-[500px] min-h-[400px] cursor-auto"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ContactForm pageTitle={pageTitle} />
      </div>
    </div>
  );
}
