import { IOrden } from "../entities/iorder";

export interface IOrdenRepository {
  getProducts(): Promise<IOrden.Producto[]>;
  order(params: IOrden.Params): Promise<boolean>;
}
