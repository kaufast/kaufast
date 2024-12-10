import React from "react";
import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      cookieName="userConsent"
      enableDeclineButton
      style={{
        background: "black",
        color: "white",
        width: "60%", // 1/4 width for larger screens
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px", // Space below the entire banner
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        zIndex: 1000,
      }}
      contentStyle={{
        margin: "0 0 10px 0", // Add space below the text
      }}
      buttonWrapperClasses="cookie-button-wrapper" // Custom wrapper for buttons
      buttonStyle={{
        background: "#e3ff04",
        color: "black",
        fontSize: "12px",
        fontWeight: "600", // Subtle boldness
        padding: "6px 15px",
        borderRadius: "5px",
        margin: "0 5px", // Add spacing between buttons
        flex: "1", // Equal button width
      }}
      declineButtonStyle={{
        background: "#e3ff04",
        color: "#444",
        fontSize: "12px",
        fontWeight: "500", // Subtle boldness
        padding: "6px 15px",
        borderRadius: "5px",
        margin: "0 5px", // Add spacing between buttons
        flex: "1", // Equal button width
      }}
      expires={150}
    >
      Elige acpetar cookies para mejorar tu experiencia{" "}
      <a
        href="/privacy-policy"
        style={{ color: "#e3ff04", textDecoration: "underline" }}
      >
        Leer...
      </a>
    </CookieConsent>
  );
}
