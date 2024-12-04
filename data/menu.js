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
      {
        id: 22,
        title: "Service Page",

        subMenuItems: [
          { id: 221, label: "Service Version 1", link: "/service" },
          { id: 222, label: "Service Version 2", link: "/service-2" },
          { id: 223, label: "Service Version 3", link: "/service-3" },
          {
            id: 224,
            label: "Service Details Page",
            link: "/service-details/2",
          },
        ],
      },
      { id: 23, label: "Team Page", link: "/team" },
      { id: 24, label: "Team Details Page", link: "/team-details/2" },
      { id: 25, label: "Pricing Page", link: "/pricing" },
      { id: 26, label: "FAQ Page", link: "/faq" },
      { id: 27, label: "Error Page", link: "/error" },
    ],
  },
  {
    id: 3,
    title: "CASOS DE ÉXITO",
    subMenuItems: [
      { id: 31, label: "Portfolio Masonary", link: "/project" },
      { id: 32, label: "Portfolio Pinterest", link: "/project-2" },
      { id: 33, label: "Portfolio Gallery", link: "/project-3" },
      { id: 34, label: "Portfolio Full Width", link: "/project-4" },
      { id: 35, label: "Portfolio Slider", link: "/project-5" },
      { id: 36, label: "Portfolio Interactive", link: "/project-6" },
      { id: 37, label: "Portfolio Details", link: "/project-details/2" },
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
