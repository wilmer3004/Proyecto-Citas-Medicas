import { LitElement, html } from "lit-element";
import cardStyle from "./cardStyle.js";

export class Card extends LitElement{
    static get styles(){
        [cardStyle]
    }
    render(){
        return html`
        <div class="contenedor-principal">
            <h1>Cita Asignada</h1>
            <div class="contenedor-titulo">
                <h3>La Cita Fue Asignada</h3>
            </div>
            <div class=contenedor-cuerpo>
                <p>Paciente: Vacio</p>
                <p>N-Documento: Vacio</p>
                <p>Doctor: Vacio</p>
                <p>Hora: Vacio</p>
            </div>
        </div>
        `
    }
}

customElements.define('card-cita', Card)