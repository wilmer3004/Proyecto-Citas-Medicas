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
            <button @click=${this.mostrarCita}>Son las citas</button>
        </div>
        `
    }
    agregarCita() {
        const idPersona = this.shadowRoot.getElementById('idPer').value;
        const nombrePersona = this.shadowRoot.getElementById('nomDoc').value;
        const nombreDoctor = this.shadowRoot.querySelector('select').value;
        const fechaCita = this.shadowRoot.getElementById('fechaCita').value;
        const horaCita = this.shadowRoot.getElementById('horaCita').value;
    
        const persona = {
            "idPersona": idPersona,
            "nombrePersona": nombrePersona,
            "nombreDoctor": nombreDoctor,
            "fechaCita": fechaCita + ' ' + horaCita
        };
    
        
        
        // Obtener citas del Local Storage (si existen)
        let citasLocalStorage = JSON.parse(localStorage.getItem('CitasMedicas')) || [];
        
        // Agregar la nueva cita al array del Local Storage
        citasLocalStorage.push(persona);
        
        // Guardar el array actualizado en el Local Storage
        localStorage.setItem('CitasMedicas', JSON.stringify(citasLocalStorage));

        // Agregar cita a la base de datos
        this.cita1.dbAdd(localStorage.getItem('CitasMedicas'))||[];
        console.log(this.cita1.getDBCitas());
    }
    mostrarCita(){
        this.cita1.dbAdd(localStorage.getItem('CitasMedicas'))||[];
        console.log(this.cita1.getDBCitas());
    }
}

customElements.define('component-form',ComponentForm)