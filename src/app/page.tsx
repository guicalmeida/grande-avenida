import Classes from "@/components/Classes";
import Header from "@/components/Header";
import MainSlider from "@/components/MainSlider";
import TextIntro from "@/components/TextIntro";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <div className="mt-14">
        <MainSlider />
      </div>
      <div className="mt-11">
        <TextIntro />
      </div>
      <div className="mt-[200px]">
        <Classes />
      </div>
    </main>
  );
}
