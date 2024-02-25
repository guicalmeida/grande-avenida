import BigSlider from "./BigSlider";
import Title from "./Title";
import { Galeria } from "@/models/home.model";

export default function Gallery({ images }: { images: Galeria[] }) {
  return (
    <>
      <div className="flex justify-between mb-3 md:mb-12 items-center">
        <Title heading="h2">Galeria</Title>
      </div>
      <BigSlider slides={images} />
    </>
  );
}
