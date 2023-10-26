import { LitElement, html } from "lit-element";
import cardStyle from "./cardStyle";
import {DBCitasMedicas} from "../../database/database";

export class CardC extends LitElement{
    static get styles(){
        return [cardStyle]
    }
    static get properties() {
        return {
          citas: { type: Array },
        };
    }
    constructor(){
        super();
        this.citas =new DBCitasMedicas();
        this.citas1 = this.citas.getDBCitas();
    }
    render(){
        return html`
        <div class="contenedor">
            <img src="../../../templates/Doctor.png">
            <div class="contenedor-principal">
                <div class="contenedor-titulo">
                    <h1>Cita Asignada</h1>
                </div>
                <div class="contenedor-subtitulo">
                    <h3>Datos De La Cita</h3>
                </div>
                <div class=contenedor-cuerpo>
                    <p>Paciente: ${this.citas.citas[this.citas.citas.length - 1].nombrePersona}</p>
                    <p>N-Documento: ${this.citas.citas[this.citas.citas.length - 1].idPersona}</p>
                    <p>Doctor: ${this.citas.citas[this.citas.citas.length -1].nombreDoctor}</p>
                    <p>Fecha/Hora: ${this.citas.citas[this.citas.citas.length -1].fechaCita}</p>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('card-cita', CardC)