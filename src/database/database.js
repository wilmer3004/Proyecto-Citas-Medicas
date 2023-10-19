class DBCitasMedicas {
    citas = []
    constructor() {
    }

    dbCitas() {
        return this.citas;
    }

    dbAdd(persona) {
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


