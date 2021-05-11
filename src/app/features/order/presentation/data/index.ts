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
    esDireccionFacturacion: false,
  },
  productos: [],
  orden: {
    Total: 0,
    costoEnvio: null,
    subTotal: 0,
  },
};

export const productsExample: IOrden.Producto[] = [
  {
    nombre: "SECADORA GAS 220W TAPA CIEGA CARGA FRONTAL LINEA XPERT",
    precio: "10599",
    imagen: "https://i.imgur.com/hjHC7Ye.jpg",
  },
  {
    nombre: "COFRE LADY EMBLEM 75 ML EDP + 7,5 ML EDP + 100 ML B",
    precio: "1890",
    imagen: "https://i.imgur.com/uMOPx1T.jpg",
  },
  {
    nombre: "COFRE LADY EMBLEM 75 ML EDP + 7,5 ML EDP + 100 ML B",
    precio: "1890",
    imagen: "https://i.imgur.com/uMOPx1T.jpg",
  },
];
