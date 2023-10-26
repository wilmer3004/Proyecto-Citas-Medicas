import { LitElement, html } from "lit-element";
import navStyle from "./navStyle";
import { FormProyect } from "../form/form-proyect";
import { ListProyect } from "../list/list-proyect";

export class Nav extends LitElement{
    static get styles(){
        return [navStyle]
    }
    static get properties(){
        return {valor:{type : String}}
    }
    static get scopedElements(){
        return{"form-proyect":FormProyect, "list-proyect":ListProyect}
    }
    constructor(){
        super()
        this.valor = ''
    }
    renderComp(componente){
        switch (componente) {
            case 'agendar':
                this.valor = html`<form-proyect></form-proyect>`;
                break;
            case 'agendadas':
                this.valor = html`<list-proyect></list-proyect>`;
                break;
            default:
                break;
        }
        return this.valor;
    }
    render(){
        return html`
        <div class="contenedor-principal">
            <nav>
                <ul>
                    <li><a href="#" @click=${() =>this.renderComp('agendar')}>Agendar Cita</a></li>
                    <li><a href="#" @click=${() =>this.renderComp('agendadas')}>Citas Agendadas</a></li>
                </ul>
            </nav>
        </div>
        <main>
            <div class="contenedor-comp">
                ${this.renderComp()}
            </div>
        </main>
        `
    }
}

customElements.define('my-nav', Nav)