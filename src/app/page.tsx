import HomeCoursesSection from "@/components/HomeCoursesSection";
import Header from "@/components/Header";
import BigSlider from "@/components/BigSlider";
import TextIntro from "@/components/TextIntro";
import Gallery from "@/components/Gallery";
import HomeBlogSection from "@/components/HomeBlogSection/HomeBlogSection";
import HomeBalls from "@/components/HomeBalls";
import { getHome } from "@/services/home";

export default async function Home() {
  const {blogs,carrosseis,cursos,galerias} = await getHome()
  return (
    <main className="container mx-auto px-3 md:px-5 my-[72px] ">
      <Header />
      <div className="mt-6 md:mt-14">
        <BigSlider slides={carrosseis} />
      </div>
      <div className="mt-6 md:mt-11" id="sobre">
        <TextIntro />
      </div>
      <div className="mt-16 md:mt-[200px]">
        <HomeCoursesSection courses={cursos} />
      </div>
      <div className="mt-16 md:mt-[170px]">
        <Gallery images={galerias} />
      </div>
      <div className="mt-[170px]">
        <HomeBlogSection posts={blogs} />
      </div>
      <HomeBalls />
    </main>
  );
}
