export namespace IOrden {
  export type Params = {
    datosEnvio: DatosEnvio;
    productos: Producto[];
    orden: {
      esDireccionFacturacion?: boolean;
      subTotal: number;
      costoEnvio: number | null;
      Total: number;
    };
  };

  export type Response = {
    pedidoRealizado: boolean;
  };

  export interface DatosEnvio {
    nombre: string;
    correo: string;
    codigoPostal: string;
    region: string;
    municipio: string;
    apellidos: string;
    numeroTelefono: string;
    colonia: string;
    ciudad: string;
    calle: string;
  }

  export interface Producto {
    image: string;
    name: string;
    price: string;
  }
}
