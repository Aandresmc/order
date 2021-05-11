import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { OrderModule } from "app/features/order";

const OrderModuleRoutes = OrderModule.routes;

export function AppRouter() {
  const LoadingMessage = () => <div>Cargando...</div>;

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/order" />} />
          <OrderModuleRoutes />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
