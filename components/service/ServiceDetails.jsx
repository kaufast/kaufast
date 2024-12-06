"use client";

import { allFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails({ serviceId }) {
  const serviceItem =
    allFeatures.filter((elm) => elm.id == serviceId)[0] || allFeatures[1];
  return (
    <div className="service-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <div className="service-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src="/assets/img/service/service-details1-1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">{serviceItem.title}</h2>
              <p className="sec-text mt-30">
              En Kaufast, contamos con más de 20 años de experiencia en diseño web y 14 años en estrategias SEO. Ayudamos a empresas a destacar en el competitivo mundo digital con soluciones personalizadas y efectivas.

              </p>
              <p className="sec-text mt-30">
              Hemos trabajado con una amplia variedad de industrias, brindando estrategias adaptadas a cada negocio. Nuestro enfoque combina creatividad e innovación con análisis para lograr resultados que importan.
              </p>
            </div>
            <h3>Nuestros Servicios</h3>
            <p className="sec-text mb-n1">
            En Kaufast, cada proyecto es único. Ofrecemos servicios que van desde SEO local e internacional hasta desarrollo web y marketing digital, siempre enfocados en maximizar tu retorno de inversión.

            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/normal/video_2-2.png)",
                    overflow: "hidden",
                  }}
                ></div>
                <a
                  href="https://www.youtube.com/watch?v=vvNwlRLjLkU"
                  className="play-btn popup-video background-image"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <p className="sec-text mt-n1 mb-40">
            Nuestro objetivo es ayudar a tu negocio a crecer y adaptarse a los desafíos digitales actuales y futuros. Creemos que las relaciones sólidas son la base para el éxito mutuo.

            </p>
            <h3>Soluciones Personalizadas</h3>
            <p className="sec-text mt-30">
            Diseñamos soluciones hechas a medida para tus necesidades específicas. Desde la creación de sitios web impactantes hasta estrategias SEO de alto nivel, hacemos que cada proyecto cuente.
            </p>
            <p className="sec-text mb-40 mt-30">
            A lo largo de los años, hemos transformado la presencia digital de cientos de empresas. Nuestro enfoque combina herramientas avanzadas y un equipo apasionado por ofrecer los mejores resultados.
            </p>
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-3.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                    Estrategias Integrales
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                  Creamos estrategias que combinan análisis y creatividad para impulsar tu negocio.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-6.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                    Resultados Tangibles
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                  Generamos resultados medibles para garantizar el éxito de tus proyectos digitales.
                  </p>
                </div>
              </div>
            </div>
            <p className="sec-text mb-n1 mt-40">
            En Kaufast, te brindamos las herramientas y estrategias necesarias para destacar en el mundo digital. Tu éxito es nuestro éxito, y creemos en construir alianzas basadas en confianza y resultados. Juntos, podemos transformar tu presencia online en un motor de crecimiento para tu negocio.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
