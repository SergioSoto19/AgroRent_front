export class machinery{
    constructor(
        public documento_usuario: string,
        public nombre_maquina: string,
        public descripcion_maquina : string,
        public categoria:string,
        public placa_maquina: string,
        public modelo_maquina: string,
        public precio_hora : string,
        public path: string[]
    ){}
}