// app>privacy/policy.jsx
import "./privacy-policy.scss";

export const metadata = {
    title: "Política de Privacidad || KauFast",
    description: "Consulta nuestra política de privacidad para obtener más información sobre cómo gestionamos tus datos.",
  };
  
  export default function PrivacyPolicy() {
    return (
      <section className="privacy-policy space">
        <div className="container">
          <h1>Política de Privacidad</h1>
          <p>
            En KauFast, nos tomamos muy en serio tu privacidad. Esta política de privacidad describe cómo recopilamos, usamos y protegemos tus datos.
          </p>
          <h2>¿Qué datos recopilamos?</h2>
          <p>
            Podemos recopilar información personal, como tu nombre, dirección de correo electrónico y cualquier otra información que proporciones al utilizar nuestro sitio web.
          </p>
          <h2>¿Cómo usamos tus datos?</h2>
          <p>
            Usamos tus datos para:
            <ul>
              <li>Ofrecer servicios personalizados</li>
              <li>Mejorar nuestro sitio web</li>
              <li>Enviar actualizaciones y promociones (si lo autorizas)</li>
            </ul>
          </p>
          <h2>Cookies</h2>
          <p>
            Este sitio utiliza cookies para mejorar tu experiencia. Puedes aceptar o rechazar el uso de cookies a través del banner de consentimiento.
          </p>
          <h2>Tus derechos</h2>
          <p>
            Tienes derecho a acceder, corregir o eliminar cualquier información personal que tengamos sobre ti. Para ejercer estos derechos, contáctanos en <a href="mailto:info@kaufast.com">info@kaufast.com</a>.
          </p>
          <h2>Contáctanos</h2>
          <p>
            Si tienes alguna pregunta sobre esta política de privacidad, no dudes en contactarnos.
          </p>
        </div>
      </section>
    );
  }
  

  