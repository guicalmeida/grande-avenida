import { Course } from "@/models/course.model";

export const coursesMock: Course[] = [
  {
    capa: {
      id: "1",
      url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
      width: 1554,
      height: 1085,
    },
    corpo: {
      html: `<p>
      Est mus venenatis congue rhoncus? Purus mi montes senectus! Laoreet senectus penatibus auctor libero praesent hac ac hendrerit commodo nibh pulvinar. Et mattis magna, sem vehicula tempus diam sociosqu dictum eleifend integer natoque. Fringilla ultricies ultrices suscipit eget dictumst a! Nisl blandit, ante vel adipiscing purus mi nostra. Dis curae; a euismod quisque purus ac nullam euismod turpis curabitur ornare tempus. Pulvinar orci tempus aliquet placerat amet sociis erat pretium libero inceptos? Accumsan faucibus gravida adipiscing fames sagittis nec posuere congue mauris consectetur. Blandit elementum luctus pharetra pretium facilisi. Nam eros ornare habitasse, tristique ante?
      </p>
      <p>
      Eleifend arcu suscipit rutrum montes nascetur rhoncus vel ante ridiculus. Hac eros integer ipsum aliquet sagittis cursus nisi quis per. Tortor elementum sagittis condimentum pretium tortor aptent nostra a diam natoque diam. Fermentum urna, curae; fames platea ullamcorper elementum condimentum fermentum nullam elit. Dictum mauris lectus nullam tempor. Laoreet ad purus velit mus. Convallis diam donec sodales pretium leo. Vulputate lectus egestas ultrices sed porttitor id bibendum euismod himenaeos hendrerit hendrerit. Sodales sodales.
      </p>
      <p>
      Sollicitudin pharetra, urna blandit ac diam aenean senectus vel sociosqu vel magna. Augue vivamus praesent pharetra tempor est cursus et nascetur montes taciti. Montes lobortis, velit sed! Consequat condimentum egestas ad nibh, litora vehicula eget egestas dictum consequat bibendum. Eu sodales diam primis urna aptent sit phasellus, non aliquam! Neque commodo habitasse porttitor sociosqu pharetra massa aptent elementum accumsan a pulvinar. Magna metus purus.
      </p>
      <p>
      Cras aliquet elementum, tristique laoreet semper hac hendrerit pretium eget. Sociosqu lacinia eros urna litora! Proin auctor, taciti senectus fames felis adipiscing quis mus aliquam varius. Lectus aptent arcu sit integer proin adipiscing adipiscing pharetra? Nibh tristique montes fringilla sodales mattis netus a amet id condimentum. Etiam iaculis quis consequat adipiscing litora ultrices facilisi. Porta nec tempus potenti dui gravida euismod phasellus nec cum. Semper quisque aptent nec. Posuere sem dolor ipsum convallis consequat dictumst dapibus suspendisse. Porttitor nullam blandit habitasse lacinia pulvinar?
      </p>
      <p>
      Eros congue sagittis aenean. Ullamcorper ridiculus feugiat parturient sociis a maecenas blandit interdum nam blandit. Urna elementum tincidunt elementum consequat dignissim at interdum netus, proin mus augue! Torquent suscipit cras amet. Duis turpis rhoncus pulvinar leo nam ad. Duis nostra augue lectus pellentesque dictumst id sed. Sapien ullamcorper neque imperdiet eu netus libero adipiscing tellus ultricies magna aenean ligula. Nullam viverra quisque volutpat.
      </p>`,
    },
    fim: "2024-03-01",
    formatoDaAula: "Curso presencial\n8 aulas",
    id: "course1",
    inicio: "2024-02-01",
    professores: [
      {
        id: "prof1",
        nome: "John Doe",
        sobre: {
          html: `      <p>
          Eros congue sagittis aenean. Ullamcorper ridiculus feugiat parturient sociis a maecenas blandit interdum nam blandit. Urna elementum tincidunt elementum consequat dignissim at interdum netus, proin mus augue! Torquent suscipit cras amet. Duis turpis rhoncus pulvinar leo nam ad. Duis nostra augue lectus pellentesque dictumst id sed. Sapien ullamcorper neque imperdiet eu netus libero adipiscing tellus ultricies magna aenean ligula. Nullam viverra quisque volutpat.
          </p>`,
        }, 
        perfil: {
          id: "profile1",
          url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
          width: 500,
          height: 500,
        },
      },
    ],
    statusDeInscricao: true,
    titulo: "Course Title 1",
    valor: "R$800,00\nAté 10x no cartão",
  },
  {
    capa: {
      id: "2",
      url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
      width: 1554,
      height: 1085,
    },
    corpo: {
      html: "<p>Course content 2</p>",
    },
    formatoDaAula: "Presencial",
    id: "course2",
    inicio: "2024-02-15",
    professores: [
      {
        id: "prof2",
        nome: "Jane Smith",
        sobre: {
          html: "<p>Professor bio 2</p>",
        },
        perfil: {
          id: "profile2",
          url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
          width: 500,
          height: 500,
        },
      },
    ],
    statusDeInscricao: false,
    titulo: "Course Title 2",
  },
  {
    capa: {
      id: "3",
      url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
      width: 1554,
      height: 1085,
    },
    corpo: {
      html: "<p>Course content 3</p>",
    },
    formatoDaAula: "Online",
    id: "course3",
    inicio: "2024-03-01",
    professores: [
      {
        id: "prof3",
        nome: "Alice Johnson",
        sobre: {
          html: "<p>Professor bio 3</p>",
        },
        perfil: {
          id: "profile3",
          url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
          width: 500,
          height: 500,
        },
      },
    ],
    statusDeInscricao: true,
    titulo: "Course Title 3",
    valor: "$120",
  },
  {
    capa: {
      id: "4",
      url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
      width: 1554,
      height: 1085,
    },
    corpo: {
      html: "<p>Course content 4</p>",
    },
    formatoDaAula: "Presencial",
    id: "course4",
    inicio: "2024-03-15",
    professores: [
      {
        id: "prof4",
        nome: "David Brown",
        sobre: {
          html: "<p>Professor bio 4</p>",
        },
        perfil: {
          id: "profile4",
          url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
          width: 500,
          height: 500,
        },
      },
    ],
    statusDeInscricao: false,
    titulo: "Course Title 4",
  },
  {
    capa: {
      id: "5",
      url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
      width: 1554,
      height: 1085,
    },
    corpo: {
      html: "<p>Course content 5</p>",
    },
    formatoDaAula: "Online",
    id: "course5",
    inicio: "2024-04-01",
    professores: [
      {
        id: "prof5",
        nome: "Emily Wilson",
        sobre: {
          html: "<p>Professor bio 5</p>",
        },
        perfil: {
          id: "profile5",
          url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
          width: 500,
          height: 500,
        },
      },
    ],
    statusDeInscricao: true,
    titulo: "Course Title 5",
    valor: "$90",
  },
];
