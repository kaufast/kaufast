"use client";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        event.currentTarget.reset();
      } else {
        alert("Algo salió mal. Por favor, inténtalo nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error de conexión. Por favor, inténtalo más tarde.");
    }
  };

  return (
    <div className="contact-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="contact-map shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: 0, bottom: "140px" }}
      >
        <iframe
          src="https://maps.google.com/maps?q=Calle%20Ribera%2014,%2008004,%20Barcelona,%20Spain&t=m&z=13&output=embed&iwloc=near"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <h2 className="sec-title">¿Mejoramos tu visibilidad online?</h2>
                <p>
                  ¡Hablemos! Estamos aquí para ayudarte a atraer más clientes,
                  mejorar tu visibilidad en Google y llevar tu negocio al
                  siguiente nivel.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form ajax-contact">
                <input
                  type="hidden"
                  name="access_key"
                  value="28e80e61-8ca6-4c74-acbd-91e76d825803"
                />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Nombre*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="email"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Correo electrónico*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="website"
                        id="website"
                        placeholder="Enlace de tu sitio web (si cuentas con una)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        required
                        name="message"
                        placeholder="Cuéntanos cómo podemos ayudarte*"
                        id="contactForm"
                        className="form-control style-border"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20">
                    <span className="link-effect">
                      <span className="effect-1">ENVIAR MENSAJE</span>
                      <span className="effect-1">ENVIAR MENSAJE</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
