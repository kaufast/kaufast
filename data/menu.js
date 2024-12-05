export const menuItems = [
  {
    id: 1,
    title: "EN",
    isActive: true,
    subMenuItems: [
      { id: 11, label: "ESPAÑOL", link: "/" },
      { id: 12, label: "ENGLISH", link: "/home-2" },
      { id: 13, label: "GERMAN", link: "/home-3" },
      { id: 14, label: "PORTUGUÊS", link: "/home-4" },
      { id: 15, label: "ITALINO", link: "/home-5" },
      { id: 16, label: "SRBIJA", link: "/home-6" },
    ],
  },
  {
    id: 2,
    title: "SERVICIOS",
    subMenuItems: [
      { id: 21, label: "About Page", link: "/about" },
      { id: 22, label: "Servicios", link:"/service"},
      { id: 26, label: "Preguntas Frequentes - FAQ ", link: "/faq" },
    ],
  },
  {
    id: 3,
    title: "CASOS DE ÉXITO",
    subMenuItems: [
      // { id: 31, label: "Portfolio Masonary", link: "/project" },
      { id: 32, label: "Portfolio Pinterest", link: "/project-2" },
    ],
  },
  {
    id: 4,
    title: "BLOG",
    link: "/blog",
  },
  {
    id: 5,
    title: "CONTACTO",
    link: "/contact",
  },
];
