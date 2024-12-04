import React from "react";
import Socials from "./component/Socials";
import Link from "next/link";
import FooterLinks1 from "./component/FooterLinks1";
import FooterLinks2 from "./component/FooterLinks2";

export default function Footer1() {
  return (
    <footer className="footer-wrapper footer-layout1 overflow-hidden bg-smoke">
      <div className="container">
        <div className="footer-top space">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h2 className="footer-top-title">Hazte Visible</h2>
            </div>
            <div className="col-lg-5">
              <div className="footer-top-wrap">
                <p className="mb-30">
                Unimos fuerzas para darte el superpoder de destacar online y crecer sin límites.
                </p>
                <Link scroll={false} href="/contact" className="btn">
                  <span className="link-effect">
                  <span className="effect-1">CONTÁCTANOS</span>
                  <span className="effect-1">AGENDEMOS LLAMADA</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu-area">
          <div className="row gy-3 justify-content-between">
            <div className="col-xxl-6 col-lg-7">
              <ul className="footer-menu-list">
                <FooterLinks1 />
              </ul>
            </div>
            <div className="col-xxl-6 col-lg-5 text-lg-end">
              <ul className="footer-menu-list">
                <FooterLinks2 />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="social-btn style3">
                <Socials />
              </div>
            </div>
            <div className="col-md-6 align-self-center text-lg-end">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="https://kaufast.com">
                  KauFast
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
