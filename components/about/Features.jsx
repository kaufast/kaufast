import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", right: "0px", bottom: "140px" }}
      >
        <Image
          width={838}
          height={778}
          src="/assets/img/normal/why_3-1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-45">
            <h2 className="sec-title">
              Apasionados por Crear Diseños de Calidad y Visibilidad Online
            </h2>
            </div>
            <h4>Amamos lo que hacemos</h4>
            <p>
              Somos una agencia creativa especializada en diseño web y optimización SEO. Ayudamos a las marcas a
              destacar en los motores de búsqueda mediante estrategias efectivas y diseños únicos que conectan con su
              audiencia.
            </p>
            <h4 className="mt-35">¿Por qué trabajar con nosotros?</h4>
            <p className="mb-n1">
              Nuestros clientes destacan nuestra dedicación a su éxito. Nos enfocamos en construir sitios web
              optimizados para buscadores, con diseños atractivos que mejoran el rendimiento en línea. Para nosotros,
              las relaciones genuinas son la clave de los resultados reales, creando marcas visibles y memorables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
