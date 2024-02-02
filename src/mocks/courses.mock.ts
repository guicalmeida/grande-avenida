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
      html: "<p>Course content 1</p>",
    },
    fim: "2024-03-01",
    formatoDaAula: "Online",
    id: "course1",
    inicio: "2024-02-01",
    professores: {
      id: "prof1",
      nome: "John Doe",
      sobre: {
        html: "<p>Professor bio 1</p>",
      },
      perfil: {
        id: "profile1",
        url: "https://media.graphassets.com/Fl6wVSA3R7WDNDuefx1S",
        width: 500,
        height: 500,
      },
    },
    statusDeInscricao: true,
    titulo: "Course Title 1",
    valor: "$100",
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
    professores: {
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
    professores: {
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
    professores: {
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
    professores: {
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
    statusDeInscricao: true,
    titulo: "Course Title 5",
    valor: "$90",
  },
];
