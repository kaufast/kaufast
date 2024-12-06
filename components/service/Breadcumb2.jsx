import Link from "next/link";
import React from "react";

export default function Breadcumb2() {
  return (
    <div className="breadcumb-wrapper style2 bg-smoke">
      <div className="container-fluid">
        <div className="breadcumb-content">
          <ul className="breadcumb-menu">
            <li>
              <Link scroll={false} href="/">
                KauFast
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/service">
                Servicios
              </Link>
            </li>
            <li>Diseño Web</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
