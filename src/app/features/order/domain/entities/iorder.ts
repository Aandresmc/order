export namespace IOrden {
  export type Params = {
    datosEnvio: DatosEnvio;
    productos: Producto[];
    orden: {
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
    esDireccionFacturacion: boolean;
  }

  export interface Producto {
    nombre: string;
    precio: string;
    imagen: string;
  }
}
