import { LitElement, html } from "lit-element";
import formStyle from "./form-style.js";
import {DBCitasMedicas} from "../../database/database";

export class FormProyect extends LitElement {

  static get styles() {
    return [formStyle];
  }

  // Properties 
  static get properties() {
    return {
      idPersona: { type: Number },
      nombrePersona: { type: String },
      nombreDoctor: { type: String },
      fechaCita: { type: String },
      horaCita: { type: String }

    }
  }
  // Constructor
  constructor() {
    super();
    this.idPersona = 0;
    this.nombrePersona = '';
    this.nombreDoctor = '';
    this.fechaCita = '';

    this.cita1 = new DBCitasMedicas();

  }

  /* Función para que la fecha mínima seleccionable sea la actual, 
  no se podrán seleccionar dias anteriores*/

  fechaMinima() {
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const dia = fecha.getDate();
    let _mes = fecha.getMonth();

    //si el mes va de 1-9 se le agrega un 0 para que concuerde con el formato de fecha
    _mes = _mes + 1;
    let mes = 0;
    if (_mes < 10) {
      mes = "0" + _mes;
    } else {
      mes = _mes.toString();
    }

    const fecha_minima = anio + '-' + mes + '-' + dia;
    console.log(fecha_minima);

    return fecha_minima;
  }

  render() {
    return html` 
    <div class="container">
      <div class="container-form">
        <div class="header-form">
          <h2>Formulario de citas</h2>
        </div>
        <div class="form-user">
          <div class="user-data">
            <div class="header-user-data">
              <h3>Información del afiliado</h3>
            </div>
            <div class="user-data-content">
              <label for="username">Nombre de Afiliado</label>
              <input type="text" placeholder="Ingrese su nombre" />
              <label for="identificatio">Número de Identificacion</label>
              <input
                type="number"
                placeholder="Ingrese el número de identificación"
                id="idPer"
              />
              <label for="doctor">Seleccione un Doctor </label>
              <select id='nomDoc'>
                <option>Wilmer Capera</option>
                <option>Angel Barrera</option>
                <option>David Salinas</option>
                <option>Andrea Peña</option>
              </select>
            </div>
          </div>
          <div class="appointment-data">
            <div class="header-appointmet-data">
              <h3>Información De la cita</h3>
            </div>
            <div class="appointment-data-content">
              <label for="date">Ingrese la fecha</label>
              <input type="date" class="fecha" min="${this.fechaMinima()}" id="fechaCita"/>
              <label for="date">Seleccione la hora</label>
              <select id="horaCita">
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
              </select>
              <button @click=${this.agregarCita} type="submit">Enviar Datos</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mensaje" id="mensaje"></div>
    </div>`;
  }

  mostrarMensaje(mensaje) {
    const mensajeElement = this.shadowRoot.getElementById('mensaje');
    mensajeElement.textContent = mensaje;
    setTimeout(() => {
        mensajeElement.textContent = '';
    }, 10000); // Borra el mensaje después de 5 segundos
}

  agregarCita() {
    const idPersona = this.shadowRoot.getElementById('idPer').value;
    const nombrePersona = this.shadowRoot.querySelector('input[type="text"]').value;
    const nombreDoctorSelect = this.shadowRoot.getElementById('nomDoc');
    const nombreDoctor = nombreDoctorSelect.options[nombreDoctorSelect.selectedIndex].text;
    const fechaCita = this.shadowRoot.getElementById('fechaCita').value;
    const horaCita = this.shadowRoot.getElementById('horaCita').value;

    const fechaHoraCita = fechaCita + ' ' + horaCita;

     // Verificar si ya existe una cita con la misma fecha y hora
     let citaExistente = false;
     for (const cita of this.cita1.getDBCitas()) {
         if (cita.fechaCita === fechaHoraCita && cita.nombreDoctor === nombreDoctor) {
             citaExistente = true;
             break;
         }
     }
 
     if (citaExistente) {
      const mensaje = `El doctor ${nombreDoctor} ya tiene una cita programada a esa hora.`;
      this.mostrarMensaje(mensaje);
         return; // Abortar la operación si ya existe una cita
     }
 
    const persona = {
      "idPersona": idPersona,
      "nombrePersona": nombrePersona,
      "nombreDoctor": nombreDoctor,
      "fechaCita": fechaHoraCita 
    };

    // Agregar cita a la base de datos
    this.cita1.dbAdd(persona);
    console.log(this.cita1.getDBCitas())
  }

}

customElements.define("form-proyect", FormProyect);