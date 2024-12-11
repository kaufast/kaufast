// app>privacy/policy.jsx
import "./privacy-policy.scss";

export const metadata = {
  title: "Política de Cookies || KauFast",
  description: "Consulta nuestra política de cookies para obtener más información sobre el uso de rastreadores en nuestro sitio web.",
};

export default function CookiePolicy() {
  return (
    <section className="cookie-policy space">
      <div className="container">
        <h1>Política de Cookies de kaufast.com</h1>
        <p>
          El presente documento informa a los Usuarios sobre las tecnologías que ayudan a esta Aplicación a lograr los fines descritos a continuación. Dichas tecnologías permiten al Titular acceder a información y almacenarla (por ejemplo, utilizando una Cookie) o emplear recursos (por ejemplo, ejecutando un script) en el dispositivo de un Usuario mientras este interactúa con esta Aplicación.
        </p>
        <p>
          Para simplificar, en el presente documento toda esta clase de tecnologías se define como "Rastreadores", salvo que exista un motivo para diferenciarlas.
        </p>
        <p>
          Es posible que algunas de las finalidades para las que se utilizan Rastreadores exijan el consentimiento del Usuario. Siempre que se otorgue el consentimiento, este podrá revocarse libremente en cualquier momento siguiendo las instrucciones facilitadas en el presente documento.
        </p>
        <h2>Cómo esta Aplicación utiliza Rastreadores</h2>
        <p>
          <strong>Necesarios:</strong> Esta Aplicación utiliza Cookies denominadas “técnicas” y otros Rastreadores similares para llevar a cabo actividades que son estrictamente necesarias para el funcionamiento o la prestación del Servicio.
        </p>
        <h2>Titular y Responsable de Tratamiento</h2>
        <p>
          c. de la Ribera 14, 08003, Barcelona, España
          <br />
          Correo electrónico de contacto del Titular:{" "}
          <a href="mailto:info@kaufast.com">info@kaufast.com</a>
        </p>
        <h2>Definiciones y referencias legales</h2>
        <h3>Datos Personales (o Datos)</h3>
        <p>
          Constituye un dato personal cualquier información que, directa, indirectamente o en relación con otra información – incluyendo un número de identificación personal – permita identificar a una persona física.
        </p>
        <h3>Datos de Uso</h3>
        <p>
          Las informaciones recogidas de forma automática por esta Aplicación (o por servicios de terceros utilizados por esta Aplicación), podrán incluir: las direcciones IP o nombres de dominio de los ordenadores utilizados por el Usuario que se conecte a esta Aplicación, las direcciones URI (Uniform Resource Identifier), la hora de la solicitud, el método utilizado para realizar la solicitud al servidor, las dimensiones del archivo obtenido en respuesta, el código numérico indicando el estado de la respuesta del servidor (resultado satisfactorio, error, etc.), el país de origen, las características del navegador y del sistema operativo utilizados por el visitante, y otros datos relevantes.
        </p>
        <h2>Información legal</h2>
        <p>
          Esta política de cookies se ha redactado sobre la base de lo dispuesto en múltiples legislaciones y se refiere únicamente a esta Aplicación, a menos que se indique lo contrario en el presente documento.
        </p>
        <p>Última revisión: 11 diciembre 2024</p>
      </div>
    </section>
  );
}