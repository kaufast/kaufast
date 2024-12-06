"use client";
import Image from "next/image";
import MobileMenuSocials from "./MobileMenuSocials";
import Link from "next/link";
import addGsap from "@/utils/addGsap";
import { useEffect } from "react";

export default function SideMenu({ isOpen, setIsOpen }) {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className={`sidemenu-wrapper  ${isOpen ? "show" : ""}`}>
      <div className="sidemenu-content">
        <button
          className="closeButton sideMenuCls"
          onClick={() => setIsOpen(false)}
        >
          <Image
            width={24}
            height={24}
            src="/assets/img/icon/close.svg"
            alt="icon"
          />
        </button>
        <div className="widget footer-widget">
          <div className="widget-about">
            <div className="footer-logo">
              <Link scroll={false} href="/">
                <Image
                  width={200}
                  height={50}
                  src="/assets/img/kaufast-white.svg"
                  alt="Ovation"
                />
              </Link>
            </div>
            <p className="about-text">
              Somos una agencia digital que impulsa la visibilidad en buscadores, conectandote con tu audiencia.
            </p>
            <div className="sidebar-wrap">
              <h6>C. de la Ribera 14, 08003,</h6>
              <h6>Barcelona, España</h6>
            </div>
            <div className="sidebar-wrap">
              <h6>
                <a href="tel:1800123654987">+1 800 123 654 987 </a>
              </h6>
              <h6>
                <a href="mailto:kaufast@gmail.com">info@kaufast.com</a>
              </h6>
            </div>
            <div className="social-btn style2">
              <MobileMenuSocials />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link
            scroll={false}
            href="/contact"
            className="chat-btn gsap-magnetic"
          >
            ¡Conectemos ahora!
          </Link>
        </div>
      </div>
    </div>
  );
}
