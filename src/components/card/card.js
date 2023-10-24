import { LitElement, html } from "lit-element";
import cardStyle from "./cardStyle";

export class CardC extends LitElement{

    static get styles(){
        return [cardStyle]
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
                    <p>Paciente: Vacio</p>
                    <p>N-Documento: Vacio</p>
                    <p>Doctor: Vacio</p>
                    <p>Hora: Vacio</p>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('card-cita', CardC)