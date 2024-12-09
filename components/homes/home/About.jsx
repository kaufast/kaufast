import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="about-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup img-custom-anim-left wow animated "
        style={{
          top: "-100px",
          left: "0px",
          bottom: "140px",
          visibility: "visible",
        }}
        data-left="0"
        data-top="-100px"
        data-bottom="140px"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
      >
        <Image
          width={838}
          height={730}
          src="/assets/img/normal/about_1-1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="about-content-wrap ">
                <div className="title-area mb-0">
                    <h2 className="sec-title crossed-title">
                         Te damos el superpoder de la <span class="crossed-text">in</span>visibilidad
                    </h2>
                    <p className="sec-text mt-35">
                      En un mundo donde la competencia está a un clic, la visibilidad es clave.
                      Ayudamos a que tus clientes te encuentren antes que a tus competidores.
                      Con nuestras estrategias, tu sitio será visible e invencible.
                    </p>
                    <p className="sec-text mt-30">
                      Convertimos tu presencia online en una ventaja competitiva. Con estrategias
                      de SEO y optimización constante, hacemos que tu negocio gane terreno frente
                      a la competencia. Visibilidad e impacto garantizados.
                    </p>

                  <div className="btn-wrap mt-50">
                    <Link scroll={false} href="/about" className="link-btn">
                      <span className="link-effect">
                        <span className="effect-1">CÓNOCENOS</span>
                        <span className="effect-1">CÓNOCENOS</span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
