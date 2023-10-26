import { LitElement, html } from "lit-element";
import cardStyle from "./cardStyle";



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
        this.citas = JSON.parse(localStorage.getItem('CitasMedicas')) || [];;
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
                    <p>Paciente: ${this.citas[this.citas.citas.length - 1].nombrePersona}</p>
                    <p>N-Documento: ${this.citas[this.citas.length - 1].idPersona}</p>
                    <p>Doctor: ${this.citas[this.citas.length -1].nombreDoctor}</p>
                    <p>Fecha/Hora: ${this.citas[this.citas.length -1].fechaCita}</p>
                </div>
            </div>
        </div>
        `
    }
    
}

customElements.define('card-cita', CardC)