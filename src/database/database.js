class DBCitasMedicas {
    citas = []
    constructor() {
    }

    getDBCitas() {
        return this.citas;
    }

    dbAdd(persona) {
        this.citas.pop();
        this.citas.push(persona);
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
export { DBCitasMedicas };


