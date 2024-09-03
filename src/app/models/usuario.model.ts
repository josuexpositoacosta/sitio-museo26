

export class Usuario{
    constructor(
      public  nombre: string,
      public  email: string,
      public  password: string,
      public  img?: string | any,
      public  dia?: number|any,
      public role?: string,
      public google?: string,
      public _id?: string | any   
    ){
    } 
}
 