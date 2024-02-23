import HomeCoursesSection from "@/components/HomeCoursesSection";
import Header from "@/components/Header";
import BigSlider, { SlideProps } from "@/components/BigSlider";
import TextIntro from "@/components/TextIntro";
import slide1 from "../../public/tmp/slide1.webp";
import Gallery from "@/components/Gallery";
import HomeBlogSection from "@/components/HomeBlogSection/HomeBlogSection";
import HomeBalls from "@/components/HomeBalls";
import { getHome } from "@/services/home";

const homeSlides: SlideProps[] = [
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder1",
  },
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
    imgAltText: "imagem placeholder2",
  },
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder3",
  },
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder4",
  },
];

export default async function Home() {
  const {blogs,carrosseis,cursos,galerias} = await getHome()
  return (
    <main className="container mx-auto px-3 md:px-5 my-[72px] ">
      <Header />
      <div className="mt-6 md:mt-14">
        <BigSlider slides={homeSlides} />
      </div>
      <div className="mt-6 md:mt-11" id="sobre">
        <TextIntro />
      </div>
      <div className="mt-16 md:mt-[200px]">
        <HomeCoursesSection courses={cursos} />
      </div>
      <div className="mt-16 md:mt-[170px]">
        <Gallery />
      </div>
      <div className="mt-[170px]">
        <HomeBlogSection posts={blogs} />
      </div>
      <HomeBalls />
    </main>
  );
}
