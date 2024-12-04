import { useState } from "react";

const Form = () => {
  const [paciente, setPaciente] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })
  const [mensajeOk, setMensajeOk] = useState(false)
  const [mensajeError, setMensajeError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const regexEmail = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (
      paciente.nombre.trim().length > 5 &&
      paciente.mensaje &&
      regexEmail.test(paciente.email)
    ) {
      setMensajeOk(true)
      setMensajeError(false)
      
    } else {
      setMensajeOk(false)
      setMensajeError(true)
    }
  }
  
  return (
    <div>
      {
        mensajeOk ? (<h3 className="form-ok">Gracias {paciente.nombre}, te contactaremos cuanto antes vía mail.</h3>) :
        (
          <>
          <h2>Contáctanos!</h2>
          <p>Deja tus preguntas o comentarios y nos pondremos en contacto contigo lo antes posible.</p>
          <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={(event) =>
              setPaciente({ ...paciente, nombre: event.target.value })
            }
          />
          <label>email: </label>
          <input
            type="email"
            onChange={(event) =>
              setPaciente({ ...paciente, email: event.target.value })
            }
          />
          <label>Mensaje: </label>
          <textarea rows={8} onChange={(event) => setPaciente({...paciente, mensaje: event.target.value})} />
          <button type="submit">Enviar</button>
          <p className="form-error">{mensajeError ? "Por favor verifique su información nuevamente" : null}</p>
         
        </form>
        </>
        )
      }
    </div>
  );
};

export default Form;
