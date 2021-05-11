import { IOrden } from "../../domain/entities/iorder";

export const initialValuesParams: IOrden.Params = {
  datosEnvio: {
    nombre: "",
    apellidos: "",
    numeroTelefono: "",
    correo: "",
    ciudad: "",
    codigoPostal: "",
    municipio: "",
    colonia: "",
    region: "",
    calle: "",
  },
  productos: [],
  orden: {
    Total: 0,
    costoEnvio: null,
    subTotal: 0,
  },
};