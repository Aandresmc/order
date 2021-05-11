import React, { lazy } from "react";
import { Route, RouteProps } from "react-router-dom";

import { container } from "app/app.container";

import { UseCase } from "app/core/use_case";

import { IOrden } from "../domain/entities/iorder";

const Router: React.FC<RouteProps> = (props: RouteProps) => {
  const OrderPage = lazy(() => import("app/features/order/presentation"));

  const getProductsUseCase: UseCase<null, IOrden.Producto[]> =
    container.get("GetProductsUseCase");

  const orderUseCase: UseCase<IOrden.Params, boolean> =
    container.get("OrderUseCase");

  return (
    <Route
      {...props}
      path="/pedido"
      exact
      render={(props) => (
        <OrderPage {...props} getProductsUseCase={getProductsUseCase} orderUseCase={orderUseCase} />
      )}
    />
  );
};

export default Router;
