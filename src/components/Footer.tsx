import Image from "next/image";
import green_ball from "../../public/green_ball.svg";
import title from "../../public/title.svg";
import footer_stamp from "../../public/footer_stamp.svg";

export default function Footer() {
  return (
    <footer className="bg-black h-[596px] text-white px-5 py-8 mt-5">
      <div className="container mx-auto h-[100%] flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="font-azeret uppercase scale-y-110 text-xl ">
            AGrandeAvenida.com
            <br />
            @AGrandeAvenida
          </p>
          <p className="font-azeret uppercase scale-y-110 text-xl ">
            AGrandeAvenida.com
            <br />
            @AGrandeAvenida
          </p>
          <p className="font-azeret text-justify uppercase scale-y-110 text-xl ">
            R. Da Consolação 222 <br /> Sala 127 - Consolação <br /> São Paulo -
            SP, 01302-000
          </p>
          <Image
            src={footer_stamp}
            alt="AGA São Paulo, SP ©2024"
            className="max-w-[100%] w-auto h-auto max-h-[100%]"
          />
        </div>
        <div className="flex gap-9 items-center">
          <div className="object-contain">
            <Image
              src={green_ball}
              alt="circulo verde"
              className="max-w-[100%] w-auto h-auto max-h-[100%]"
            />
          </div>
          <div className="object-contain">
            <Image
              src={title}
              alt="Logotipo escrito A Grande Avenida"
              className="invert max-w-[100%] w-auto h-auto max-h-[100%]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
