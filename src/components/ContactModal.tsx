import ContactForm from "./ContactForm";

export default function ContactModal({ pageTitle }: { pageTitle: string }) {
  return (
    <div className="bg-[#00000080] w-screen h-screen fixed top-0 left-0 overflow-hidden flex items-center justify-center">
      <div className="bg-white rounded-xl min-w-[500px] min-h-[400px]">
        <ContactForm pageTitle={pageTitle} />
      </div>
    </div>
  );
}

