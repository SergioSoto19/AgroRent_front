export class User{
    constructor(
        public nombre : string,
        public apellido : string,
        public tipo_documento : string,
        public numero_documento : string,
        public correoElectronico: string,
        public estado? : string,
    ){}
}