import React, { lazy } from "react";
import { Route, RouteProps } from "react-router-dom";

import { container } from "app/app.container";

import { UseCase } from "app/core/use_case";

// import { ILogin } from '../domain/entities/ilogin';

const Router: React.FC<RouteProps> = (props: RouteProps) => {
  const OrderPage = lazy(() => import("app/features/order/presentation"));

  // const authUseCase: UseCase<ILogin.Params, ILogin.Response> = container.get('AuthenticationUseCase');

  return (
    <Route
      {...props}
      path="/pedido"
      exact
      render={(props) => <OrderPage />}

      // render={props => (<OrderPage {...props} authUseCase={authUseCase} />)}
    />
  );
};

export default Router;
