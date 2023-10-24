import { LitElement, html } from "lit-element";
import navStyle from "./navStyle";
import { FormProyect } from "../form/form-proyect";
import { ListProyect } from "../list/list-proyect";
import { CardC } from "../card/card";

export class Nav extends LitElement{
    static get styles(){
        return [navStyle]
    }
    static get properties(){
        return {valor:{type : String}}
    }
    static get scopedElements(){
        return{"form-proyect":FormProyect, "list-proyect":ListProyect, "card":Card}
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
            case 'card':
                this.valor = html`<card-cita></card-cita>`
            default:
                break;
        }
        return this.valor;
    }
    render(){
        return html`
        <div class="contenedor-principal">
            <div class="menu">
                <ul>
                    <li><a href="#" @click=${() =>this.renderComp('agendar')}>Agendar Cita</a></li>
                    <li><a href="#" @click=${() =>this.renderComp('agendadas')}>Citas Agendadas</a></li>
                    <li><a href="#" @click=${() =>this.renderComp('card')}>Card Confirmacion</a></li>
                </ul>
            </div>
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