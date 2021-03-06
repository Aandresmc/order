import "reflect-metadata";

import { Container } from "inversify";

import { CoreModule } from "./core/providers";
import { OrderModule } from "./features/order";

const container = new Container({
  defaultScope: "Singleton",
});

const containerBuilder = async (): Promise<Container> => {
  console.log("containerBuilder");

  await container.loadAsync(CoreModule.providers());
  await container.loadAsync(OrderModule.providers());

  console.log("container", container);

  return container;
};

export { container, containerBuilder };
