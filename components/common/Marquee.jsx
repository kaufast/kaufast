"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "SEO para PYMEs que Funciona",
      icon: "fas fa-chart-line",
    },
    {
      id: 2,
      href: "#",
      text: "Optimización Web Rápida y Eficaz",
      icon: "fas fa-laptop-code",
    },
    {
      id: 3,
      href: "#",
      text: "Aumenta tu Presencia en Google",
      icon: "fas fa-search",
    },
    {
      id: 4,
      href: "#",
      text: "Conecta con Clientes Locales",
      icon: "fas fa-map-marker-alt",
    },
    {
      id: 5,
      href: "#",
      text: "Diseño Web que Convierte",
      icon: "fas fa-paint-brush",
    },
    {
      id: 6,
      href: "#",
      text: "Auditoría SEO Gratuita",
      icon: "fas fa-analytics",
    },
  ];
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeItems.map((elm, i) => (
              <h6 key={i} className="item m-item">
                <a href={elm.href}>
                  <i className={elm.icon}></i> {elm.text}
                </a>
              </h6>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
