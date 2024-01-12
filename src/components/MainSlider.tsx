"use client";

import Glider from "react-glider";
import Image from "next/image";
import slide1 from "../../public/tmp/slide1.webp";

export default function MainSlider() {
  return (
    <div className="relative">
      <Glider
        draggable
        hasDots
        dots="#dots"
        slidesToShow={1}
        slidesToScroll={1}
      >
        <div>
          <Image
            className="object-cover w-[100%] mx-auto h-[720px] rounded-[60px]"
            alt="placeholder"
            src={slide1}
          />
        </div>
        <div>
          <Image
            className="object-cover w-[100%] mx-auto h-[720px] rounded-[60px]"
            alt="placeholder"
            src={slide1}
          />
        </div>
        <div>
          <Image
            className="object-cover w-[100%] mx-auto h-[720px] rounded-[60px]"
            alt="placeholder"
            src={slide1}
          />
        </div>
        <div>
          <Image
            className="object-cover w-[100%] mx-auto h-[720px] rounded-[60px]"
            alt="placeholder"
            src={slide1}
          />
        </div>
        <div>
          <Image
            className="object-cover w-[100%] mx-auto h-[720px] rounded-[60px]"
            alt="placeholder"
            src={slide1}
          />
        </div>
      </Glider>
      <div className="absolute bottom-[40px] right-0 left-0" id="dots"></div>
    </div>
  );
}
