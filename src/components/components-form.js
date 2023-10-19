import { LitElement,html } from "lit-element";
import {DBCitasMedicas} from "../database/database";

export class ComponentForm extends LitElement{
    // Properties 
    static get properties(){
        return{
            idPersona:{type:Number},
            nombrePersona:{type:String},
            nombreDoctor:{type:String},
            fechaCita:{type:String},
            horaCita:{type:String}

        }
    }
    // Constructor
    constructor(){
        super();
        this.idPersona=0;
        this.nombrePersona='';
        this.nombreDoctor='';
        this.fechaCita='';

        this.cita1 = new DBCitasMedicas();

    }
    
    render(){
        return html`
        <div>
            <label>Numero de identificacion</label>
            <input type='number' id='idPer'>
            <label>Nombre Persona</label>
            <input type='text' id='nomDoc'>
            <label>Nombre Doctor</label>
            <select>
                <option value='David'>David Salinas</option>
                <option value='Angel'>Angel Barrera</option>
                <option value='Wilmer'>Wilmer Capera</option>
                <option value='Andrea'>Andrea Peña</option>
            </select>
            <label>Fecha Cita</label>
            <input type='date' id='fechaCita'>
            <label>Fecha Cita</label>
            <input type='time' id='horaCita'>
            <button @click=${this.agregarCita}>Agregar Cita</button>
        </div>
        `
    }
    agregarCita() {
        const idPersona = this.shadowRoot.getElementById('idPer').value;
        const nombrePersona = this.shadowRoot.getElementById('nomDoc').value;
        const nombreDoctor = this.shadowRoot.querySelector('select').value;
        const fechaCita = this.shadowRoot.getElementById('fechaCita').value;
        const horaCita = this.shadowRoot.getElementById('horaCita').value;
    
        // Validación de valores (puedes hacer la validación aquí)
    
        const persona = {
            "idPersona": idPersona,
            "nombrePersona": nombrePersona,
            "nombreDoctor": nombreDoctor,
            "fechaCita": fechaCita + ' ' + horaCita  // Combina la fecha y la hora
        };
    
        // Agregar cita a la base de datos
        this.cita1.dbAdd(persona);
        console.log(this.cita1.getDBCitas())
    }

}

customElements.define('component-form',ComponentForm)