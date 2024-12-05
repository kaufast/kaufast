import React from "react";
import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      cookieName="userConsent"
      style={{ background: "#2B373B", color: "white" }}
      buttonStyle={{
        background: "#4CAF50",
        color: "white",
        fontSize: "13px",
        padding: "10px 15px",
        borderRadius: "5px",
      }}
      declineButtonStyle={{
        background: "#f44336",
        color: "white",
        fontSize: "13px",
        padding: "10px 15px",
        borderRadius: "5px",
      }}
      expires={150} // Expires in 150 days
    >
      Este sitio utiliza cookies para mejorar tu experiencia.{" "}
      <a href="/privacy-policy" style={{ color: "#4CAF50", textDecoration: "underline" }}>
        Leer más
      </a>
    </CookieConsent>
  );
}
