import { UseCase } from "app/core/use_case";
import { injectable } from "inversify";
import { IOrden } from "../entities/iorder";
import { IOrdenRepository } from "../repositories/iorder_repository";

@injectable()
export class OrderUseCase implements UseCase<IOrden.Params, boolean> {
  private readonly _repository: IOrdenRepository;

  constructor(repository: IOrdenRepository) {
    this._repository = repository;
  }

  call(params: IOrden.Params): Promise<boolean> {
    return this._repository.order(params);
  }
}
