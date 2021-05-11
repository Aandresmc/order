import { injectable } from "inversify";

import { HttpClient } from "../../../../core/http/http-client";
import { RemoteDataSource } from "../datasources/remote_data_source";

import generateUri, { PathUri } from "../../../../../environments/path";

import { IOrdenRepository } from "../../domain/repositories/iorder_repository";
import { IOrden } from "../../domain/entities/iorder";

@injectable()
export class OrdenRepository implements IOrdenRepository {
  constructor(
    private readonly url: PathUri,
    private readonly httpClient: HttpClient
  ) {}

  async getProducts(): Promise<IOrden.Producto[]> {
    let response;

    try {
      const remote = new RemoteDataSource(this.httpClient);
      const url = generateUri(this.url);
      response = await remote.request(url, "get");
    } catch (error) {
      console.log("error " + error);

      //TODO: call LocalDataSource
    }
    return response;
  }

  async order(params: IOrden.Params): Promise<boolean> {
    let response;

    try {
      const remote = new RemoteDataSource(this.httpClient);
      const url = generateUri(this.url);
      response = await remote.request(url, "post", params);
    } catch (error) {
      console.log("error " + error);

      //TODO: call LocalDataSource
    }
    return response;
  }
}
