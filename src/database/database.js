export class DBCitasMedicas {
    
    constructor() {
        this.citas =  [];;
    }

    getDBCitas() {
        return this.citas;
    }

    dbAdd(data) {
        // if(cont === 1){
        //     this.citas.pop()
        // }
        this.citas.push(data);
    }

    personas(idPersona, nombrePersona, nombreDoctor, fechaCita) {
        return {
            "idPersona": idPersona,
            "nombrePersona": nombrePersona,
            "nombreDoctor": nombreDoctor,
            "fechaCita": fechaCita
        };
    }
    
}


