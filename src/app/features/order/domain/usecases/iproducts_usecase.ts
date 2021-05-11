import { UseCase } from "app/core/use_case";
import { injectable } from "inversify";
import { IOrden } from "../entities/iorder";
import { IOrdenRepository } from "../repositories/iorder_repository";

@injectable()
export class GetProductsUseCase implements UseCase<null, IOrden.Producto[]> {
  private readonly _repository: IOrdenRepository;

  constructor(repository: IOrdenRepository) {
    this._repository = repository;
  }

  call(): Promise<IOrden.Producto[]> {
    return this._repository.getProducts();
  }
}
