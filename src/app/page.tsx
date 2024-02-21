import Courses from "@/components/Courses";
import Header from "@/components/Header";
import BigSlider, { SlideProps } from "@/components/BigSlider";
import TextIntro from "@/components/TextIntro";
import slide1 from "../../public/tmp/slide1.webp";
import Gallery from "@/components/Gallery";
import Blog, { PostProps } from "@/components/Blog/Blog";

const homeSlides: SlideProps[] = [
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder",
  },
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder",
  },
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder",
  },
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder",
  },
];

const posts: PostProps[] = [
  {
    title: "A era de ouro das performances artísticas 1",
    coverUrl: slide1,
    path: "/texto",
    author: "Arlindo Christiam",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis nisi sem, non dignissim nulla commodo nec. In commodo lectus vel odio sodales, vitae tristique sapien facilisis. Pellentesque eget mauris tellus. Sed sed ipsum in ante rhoncus cursus quis ut ipsum. Aliquam eget dignissim erat. Mauris molestie gravida blandit. Duis aliquet cursus ipsum. Praesent auctor nibh a varius dignissim. Sed consequat neque non quam rutrum pulvinar. Cras posuere enim eros, consectetur blandit libero condimentum non. Morbi malesuada sollicitudin lobortis. Aenean dignissim consectetur massa id venenatis. Praesent rhoncus massa sed tellus elementum tristique.
        
        Morbi pellentesque laoreet eros quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed molestie aliquet lorem vel efficitur. Praesent sem purus, iaculis id imperdiet vitae, pulvinar vel nulla. Proin venenatis et orci vel interdum. Nulla facilisi. Aenean viverra fringilla lacus nec commodo. Duis non nibh vel dolor ullamcorper varius pulvinar id purus. Vestibulum pharetra nisl id ligula accumsan, nec luctus felis cursus. Vestibulum vitae mauris ante. Nunc vitae mauris ut felis iaculis consequat. Sed fringilla dictum erat ac congue. Vivamus pharetra at ligula sit amet varius.
        
        Sed a eleifend felis. Integer sed nulla sollicitudin, suscipit metus eleifend, volutpat dui. Donec at nunc pretium, facilisis mauris quis, feugiat urna. Nunc cursus varius nunc, id ultrices ante lobortis vitae. Phasellus semper euismod odio, eu ultrices tortor consectetur et. Donec non consequat metus, at porta nibh. Integer hendrerit ligula eros, ut euismod orci consequat luctus. Aliquam imperdiet porta eros id aliquam. Vivamus vel nisi ut diam maximus ultricies. Pellentesque elementum porttitor faucibus. Duis rutrum, nulla quis placerat egestas, dolor nibh finibus lacus, vitae finibus erat mi eget est. Nullam consequat odio ut vulputate porta. Proin auctor ac diam ac vestibulum. In viverra molestie quam a luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        
        Suspendisse vitae diam ac est feugiat egestas. Nunc vitae mauris vel nulla ultrices efficitur. Phasellus non orci a orci pulvinar dignissim ut sit amet lorem. Phasellus pulvinar venenatis urna sed sollicitudin. Sed pharetra massa vitae blandit luctus. Nam tincidunt gravida lorem. Aenean ipsum mauris, interdum quis libero eget, ornare venenatis felis. Donec vitae augue eleifend, facilisis urna nec, tempor erat. Vivamus eleifend ac magna sed porta. Mauris tincidunt, magna id dictum tempus, diam augue ultrices nulla, eget lacinia neque tortor et diam. Pellentesque non egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur non mattis ipsum, facilisis rhoncus dui. Morbi eget mauris quis orci rhoncus hendrerit ac id diam. Etiam ut volutpat quam, et tincidunt lacus. Fusce a fermentum lorem, id interdum urna.
        
        Phasellus in lectus at nisi pellentesque auctor lacinia in libero. Suspendisse potenti. Nulla id turpis quis dui convallis vulputate. Aliquam eu condimentum risus. Aliquam finibus ornare sapien, vel aliquet dui facilisis ut. Integer vitae quam purus. Fusce pharetra euismod fermentum. Sed a rhoncus libero, a mattis nisi. Mauris porttitor auctor congue. Sed ac ipsum odio. In justo turpis, finibus quis malesuada at, consequat quis mauris.`,
  },
  {
    title: "A era de ouro das performances artísticas 2",
    coverUrl: slide1,
    path: "/texto",
    author: "Arlindo Christiam",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis nisi sem, non dignissim nulla commodo nec. In commodo lectus vel odio sodales, vitae tristique sapien facilisis. Pellentesque eget mauris tellus. Sed sed ipsum in ante rhoncus cursus quis ut ipsum. Aliquam eget dignissim erat. Mauris molestie gravida blandit. Duis aliquet cursus ipsum. Praesent auctor nibh a varius dignissim. Sed consequat neque non quam rutrum pulvinar. Cras posuere enim eros, consectetur blandit libero condimentum non. Morbi malesuada sollicitudin lobortis. Aenean dignissim consectetur massa id venenatis. Praesent rhoncus massa sed tellus elementum tristique.
        
        Morbi pellentesque laoreet eros quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed molestie aliquet lorem vel efficitur. Praesent sem purus, iaculis id imperdiet vitae, pulvinar vel nulla. Proin venenatis et orci vel interdum. Nulla facilisi. Aenean viverra fringilla lacus nec commodo. Duis non nibh vel dolor ullamcorper varius pulvinar id purus. Vestibulum pharetra nisl id ligula accumsan, nec luctus felis cursus. Vestibulum vitae mauris ante. Nunc vitae mauris ut felis iaculis consequat. Sed fringilla dictum erat ac congue. Vivamus pharetra at ligula sit amet varius.
        
        Sed a eleifend felis. Integer sed nulla sollicitudin, suscipit metus eleifend, volutpat dui. Donec at nunc pretium, facilisis mauris quis, feugiat urna. Nunc cursus varius nunc, id ultrices ante lobortis vitae. Phasellus semper euismod odio, eu ultrices tortor consectetur et. Donec non consequat metus, at porta nibh. Integer hendrerit ligula eros, ut euismod orci consequat luctus. Aliquam imperdiet porta eros id aliquam. Vivamus vel nisi ut diam maximus ultricies. Pellentesque elementum porttitor faucibus. Duis rutrum, nulla quis placerat egestas, dolor nibh finibus lacus, vitae finibus erat mi eget est. Nullam consequat odio ut vulputate porta. Proin auctor ac diam ac vestibulum. In viverra molestie quam a luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        
        Suspendisse vitae diam ac est feugiat egestas. Nunc vitae mauris vel nulla ultrices efficitur. Phasellus non orci a orci pulvinar dignissim ut sit amet lorem. Phasellus pulvinar venenatis urna sed sollicitudin. Sed pharetra massa vitae blandit luctus. Nam tincidunt gravida lorem. Aenean ipsum mauris, interdum quis libero eget, ornare venenatis felis. Donec vitae augue eleifend, facilisis urna nec, tempor erat. Vivamus eleifend ac magna sed porta. Mauris tincidunt, magna id dictum tempus, diam augue ultrices nulla, eget lacinia neque tortor et diam. Pellentesque non egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur non mattis ipsum, facilisis rhoncus dui. Morbi eget mauris quis orci rhoncus hendrerit ac id diam. Etiam ut volutpat quam, et tincidunt lacus. Fusce a fermentum lorem, id interdum urna.
        
        Phasellus in lectus at nisi pellentesque auctor lacinia in libero. Suspendisse potenti. Nulla id turpis quis dui convallis vulputate. Aliquam eu condimentum risus. Aliquam finibus ornare sapien, vel aliquet dui facilisis ut. Integer vitae quam purus. Fusce pharetra euismod fermentum. Sed a rhoncus libero, a mattis nisi. Mauris porttitor auctor congue. Sed ac ipsum odio. In justo turpis, finibus quis malesuada at, consequat quis mauris.`,
  },
  {
    title: "A era de ouro das performances artísticas 3",
    coverUrl: slide1,
    path: "/texto",
    author: "Arlindo Christiam",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis nisi sem, non dignissim nulla commodo nec. In commodo lectus vel odio sodales, vitae tristique sapien facilisis. Pellentesque eget mauris tellus. Sed sed ipsum in ante rhoncus cursus quis ut ipsum. Aliquam eget dignissim erat. Mauris molestie gravida blandit. Duis aliquet cursus ipsum. Praesent auctor nibh a varius dignissim. Sed consequat neque non quam rutrum pulvinar. Cras posuere enim eros, consectetur blandit libero condimentum non. Morbi malesuada sollicitudin lobortis. Aenean dignissim consectetur massa id venenatis. Praesent rhoncus massa sed tellus elementum tristique.
        
        Morbi pellentesque laoreet eros quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed molestie aliquet lorem vel efficitur. Praesent sem purus, iaculis id imperdiet vitae, pulvinar vel nulla. Proin venenatis et orci vel interdum. Nulla facilisi. Aenean viverra fringilla lacus nec commodo. Duis non nibh vel dolor ullamcorper varius pulvinar id purus. Vestibulum pharetra nisl id ligula accumsan, nec luctus felis cursus. Vestibulum vitae mauris ante. Nunc vitae mauris ut felis iaculis consequat. Sed fringilla dictum erat ac congue. Vivamus pharetra at ligula sit amet varius.
        
        Sed a eleifend felis. Integer sed nulla sollicitudin, suscipit metus eleifend, volutpat dui. Donec at nunc pretium, facilisis mauris quis, feugiat urna. Nunc cursus varius nunc, id ultrices ante lobortis vitae. Phasellus semper euismod odio, eu ultrices tortor consectetur et. Donec non consequat metus, at porta nibh. Integer hendrerit ligula eros, ut euismod orci consequat luctus. Aliquam imperdiet porta eros id aliquam. Vivamus vel nisi ut diam maximus ultricies. Pellentesque elementum porttitor faucibus. Duis rutrum, nulla quis placerat egestas, dolor nibh finibus lacus, vitae finibus erat mi eget est. Nullam consequat odio ut vulputate porta. Proin auctor ac diam ac vestibulum. In viverra molestie quam a luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        
        Suspendisse vitae diam ac est feugiat egestas. Nunc vitae mauris vel nulla ultrices efficitur. Phasellus non orci a orci pulvinar dignissim ut sit amet lorem. Phasellus pulvinar venenatis urna sed sollicitudin. Sed pharetra massa vitae blandit luctus. Nam tincidunt gravida lorem. Aenean ipsum mauris, interdum quis libero eget, ornare venenatis felis. Donec vitae augue eleifend, facilisis urna nec, tempor erat. Vivamus eleifend ac magna sed porta. Mauris tincidunt, magna id dictum tempus, diam augue ultrices nulla, eget lacinia neque tortor et diam. Pellentesque non egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur non mattis ipsum, facilisis rhoncus dui. Morbi eget mauris quis orci rhoncus hendrerit ac id diam. Etiam ut volutpat quam, et tincidunt lacus. Fusce a fermentum lorem, id interdum urna.
        
        Phasellus in lectus at nisi pellentesque auctor lacinia in libero. Suspendisse potenti. Nulla id turpis quis dui convallis vulputate. Aliquam eu condimentum risus. Aliquam finibus ornare sapien, vel aliquet dui facilisis ut. Integer vitae quam purus. Fusce pharetra euismod fermentum. Sed a rhoncus libero, a mattis nisi. Mauris porttitor auctor congue. Sed ac ipsum odio. In justo turpis, finibus quis malesuada at, consequat quis mauris.`,
  },
  {
    title: "A era de ouro das performances artísticas",
    coverUrl: slide1,
    path: "/texto",
    author: "Arlindo Christiam",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis nisi sem, non dignissim nulla commodo nec. In commodo lectus vel odio sodales, vitae tristique sapien facilisis. Pellentesque eget mauris tellus. Sed sed ipsum in ante rhoncus cursus quis ut ipsum. Aliquam eget dignissim erat. Mauris molestie gravida blandit. Duis aliquet cursus ipsum. Praesent auctor nibh a varius dignissim. Sed consequat neque non quam rutrum pulvinar. Cras posuere enim eros, consectetur blandit libero condimentum non. Morbi malesuada sollicitudin lobortis. Aenean dignissim consectetur massa id venenatis. Praesent rhoncus massa sed tellus elementum tristique.
        
        Morbi pellentesque laoreet eros quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed molestie aliquet lorem vel efficitur. Praesent sem purus, iaculis id imperdiet vitae, pulvinar vel nulla. Proin venenatis et orci vel interdum. Nulla facilisi. Aenean viverra fringilla lacus nec commodo. Duis non nibh vel dolor ullamcorper varius pulvinar id purus. Vestibulum pharetra nisl id ligula accumsan, nec luctus felis cursus. Vestibulum vitae mauris ante. Nunc vitae mauris ut felis iaculis consequat. Sed fringilla dictum erat ac congue. Vivamus pharetra at ligula sit amet varius.
        
        Sed a eleifend felis. Integer sed nulla sollicitudin, suscipit metus eleifend, volutpat dui. Donec at nunc pretium, facilisis mauris quis, feugiat urna. Nunc cursus varius nunc, id ultrices ante lobortis vitae. Phasellus semper euismod odio, eu ultrices tortor consectetur et. Donec non consequat metus, at porta nibh. Integer hendrerit ligula eros, ut euismod orci consequat luctus. Aliquam imperdiet porta eros id aliquam. Vivamus vel nisi ut diam maximus ultricies. Pellentesque elementum porttitor faucibus. Duis rutrum, nulla quis placerat egestas, dolor nibh finibus lacus, vitae finibus erat mi eget est. Nullam consequat odio ut vulputate porta. Proin auctor ac diam ac vestibulum. In viverra molestie quam a luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        
        Suspendisse vitae diam ac est feugiat egestas. Nunc vitae mauris vel nulla ultrices efficitur. Phasellus non orci a orci pulvinar dignissim ut sit amet lorem. Phasellus pulvinar venenatis urna sed sollicitudin. Sed pharetra massa vitae blandit luctus. Nam tincidunt gravida lorem. Aenean ipsum mauris, interdum quis libero eget, ornare venenatis felis. Donec vitae augue eleifend, facilisis urna nec, tempor erat. Vivamus eleifend ac magna sed porta. Mauris tincidunt, magna id dictum tempus, diam augue ultrices nulla, eget lacinia neque tortor et diam. Pellentesque non egestas magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur non mattis ipsum, facilisis rhoncus dui. Morbi eget mauris quis orci rhoncus hendrerit ac id diam. Etiam ut volutpat quam, et tincidunt lacus. Fusce a fermentum lorem, id interdum urna.
        
        Phasellus in lectus at nisi pellentesque auctor lacinia in libero. Suspendisse potenti. Nulla id turpis quis dui convallis vulputate. Aliquam eu condimentum risus. Aliquam finibus ornare sapien, vel aliquet dui facilisis ut. Integer vitae quam purus. Fusce pharetra euismod fermentum. Sed a rhoncus libero, a mattis nisi. Mauris porttitor auctor congue. Sed ac ipsum odio. In justo turpis, finibus quis malesuada at, consequat quis mauris.`,
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-5 my-[72px] ">
      <Header />
      <div className="mt-14">
        <BigSlider slides={homeSlides} />
      </div>
      <div className="mt-11" id="sobre">
        <TextIntro />
      </div>
      <div className="mt-[200px]">
        <Courses />
      </div>
      <div className="mt-[170px]">
        <Gallery />
      </div>
      <div className="mt-[170px]">
        <Blog posts={posts} />
      </div>
    </main>
  );
}
