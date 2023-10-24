export class DBCitasMedicas {
    constructor() {
        this.citas = [
            { idPersona: 1016951062, nombrePersona: 'Juan Salinas', nombreDoctor: 'Dr. Angel', fechaCita: '2023-10-12 13:00' },
            { idPersona: 1016951062, nombrePersona: 'Andrea Peña', nombreDoctor: 'Dra. Giselle', fechaCita: '2023-10-15 15:00' },
            { idPersona: 1016951062, nombrePersona: 'Wilmer Capera', nombreDoctor: 'Dr. David', fechaCita: '2023-10-18 12:00' },
            { idPersona: 1016951062, nombrePersona: 'Wilmer Capera', nombreDoctor: 'David Salinas', fechaCita: '2023-10-23 12:00' },

        ];
    }

    getDBCitas() {
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
