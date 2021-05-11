import { AsyncContainerModule, interfaces } from "inversify";

import { enviroments } from "environments/enviroment";
import { HttpClient } from "app/core/http/http-client";

import { UseCase } from "app/core/use_case";

import { IOrdenRepository } from "../domain/repositories/iorder_repository";

import { IOrden } from "../domain/entities/iorder";
import { GetProductsUseCase } from "../domain/usecases/iproducts_usecase";
import { OrdenRepository } from "../data/repositories/order_repository";
import { OrderUseCase } from "../domain/usecases/iorder_usecase";

const providers = (): AsyncContainerModule => {
  const module = new AsyncContainerModule(async (bind: interfaces.Bind) => {
    // //repository
    bind<IOrdenRepository>("IOrdenRepository").toDynamicValue((context) => {
      return new OrdenRepository(
        enviroments.products,
        context.container.get<HttpClient>("HttpClient")
      );
    });

    //usecases

    //getProducts
    bind<UseCase<null, IOrden.Producto[]>>("GetProductsUseCase").toDynamicValue(
      (context) => {
        return new GetProductsUseCase(
          context.container.get<IOrdenRepository>("IOrdenRepository")
        );
      }
    );

    //order
    bind<UseCase<IOrden.Params, boolean>>("OrderUseCase").toDynamicValue(
      (context) => {
        return new OrderUseCase(
          context.container.get<IOrdenRepository>("IOrdenRepository")
        );
      }
    );
  });

  return module;
};

export default providers;
