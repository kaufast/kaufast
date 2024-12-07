"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";

export default function ProjectDetails({ portfolioSlug }) {
  const portfolioItem =
    allPortfolio.find((elm) => elm.slug === portfolioSlug) || allPortfolio[0];
  const itemsImages = [
    "/assets/img/portfolio/portfolio_inner_1.png",
    "/assets/img/portfolio/portfolio_inner_2.png",
  ];
  const slideroptions = {
    arrows: true,
    autoplay: true,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };

  return (
    <div className="project-details-page-area space">
      <div className="container">
        <Slider className="row global-carousel default" {...slideroptions}>
          {itemsImages.map((elm, i) => (
            <div key={i} className="col-xl-12">
              <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
                <Image
                  width={1296}
                  height={700}
                  className="w-100"
                  src={elm}
                  alt="img"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40">
              <ul className="list-wrap">
                <li>
                  <span>Categoria:</span>{portfolioItem.category || "Development"}
                </li>
                <li>
                  <span>Cliente:</span>{portfolioItem.client || "K. Melchor"}
                </li>
                <li>
                  <span>Fecha:</span>{portfolioItem.projectDate || "November 6, 2024"}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">{portfolioItem.title}</h2>
              <p className="sec-text mt-30">{portfolioItem.description || "No description available."}</p>
            </div>
            <h3>Challenge & Solution</h3>
            <p className="sec-text mb-n1">
                {portfolioItem.challengeAndSolution.challenge}
            </p>
            <h3 className="mt-35">Final Result</h3>
            <p className="sec-text mb-n1">
             {portfolioItem.finalResult}
            </p>
          </div>
          <div className="col-lg-12">
            <div className="inner__page-nav space-top mt-n1 mb-n1">
              <a href="#" className="nav-btn">
                <i className="fa fa-arrow-left"></i>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Post Anterior</span>
                    <span className="effect-1">Post Anterior</span>
                  </span>
                </span>
              </a>
              <a href="#" className="nav-btn">
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Post Siguiente</span>
                    <span className="effect-1">Post Siguiente</span>
                  </span>
                </span>
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
