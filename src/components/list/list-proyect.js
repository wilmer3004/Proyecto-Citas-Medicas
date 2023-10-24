import { LitElement, html } from "lit-element";
import listStyle from "./list-style.js";
import {DBCitasMedicas} from "../../database/database";

export class ListProyect extends LitElement {

    static get styles() {
        return [listStyle];
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
        <div class="container">
        ${this.citas1.map(
            cita => html`
            <div class="list-div">

                <div class="left-rectangle"></div>

                <div class="data-container">
                    <div class="date-div"><h2>Fecha: ${cita.fechaCita}</h2></div>
                    <div class="information-div">
                        <div><p><strong>Identificación: </strong> ${cita.idPersona} <p></div>
                        <div><p><strong>Nombre Afiliado: </strong> ${cita.nombrePersona}<p></div>
                        <div><p><strong>Nombre Doctor: </strong> ${cita.nombreDoctor} <p></div>
                    </div>
                </div>
            </div>
            `
        )}
        </div>`
    }
}

customElements.define("list-proyect", ListProyect);