import { PathUri } from "./path";

const PORT = "";
const { REACT_APP_API_HOST } = process.env;

const products: PathUri = {
  baseUrl: REACT_APP_API_HOST,
  port: PORT,
  context: "/",
  service: "products",
};

export const enviroments = {
  products,
};
