import { ButtonComponent } from "app/shared/components/controls/button";
import { IOrden } from "../../domain/entities/iorder";
import { BgGray, BgBlack, Container, Card } from "../styles";
import { ProductComponent } from "./product";

type Props = {
  products: IOrden.Producto[];
  isLoading: boolean;
};

export const ProductsOrderComponent: React.FC<Props> = ({
  products,
  isLoading,
}: Props) => {
  const subTotal = () => {
    const sum = products.reduce((a, b) => a + (parseInt(b.price) || 0), 0);
    return sum;
  };

  return (
    <Container>
      <Card>
        <BgGray>
          <span style={{ fontWeight: "bolder", margin: "4rem" }}>
            RESUMEN DE LA ORDEN
          </span>
        </BgGray>
        {products.map((product) => (
          <ProductComponent key={product.name} product={product} />
        ))}
        <div className="d-flex justify-content-end">
          <ButtonComponent label={"Editar"} isLoading={false} />
        </div>
        <BgGray>
          <div className="align-items-end">
            <span style={{ fontWeight: "bolder", margin: "4rem" }}>
              SUBTOTAL:
            </span>
            <span style={{ fontWeight: "bolder", margin: "4rem" }}>
              ${subTotal()}
            </span>
          </div>
          <div className="flex-wrap">
            <span style={{ fontWeight: "bolder", margin: "4rem" }}>ENVIO:</span>
            <span style={{ fontWeight: "bolder", margin: "4rem" }}>
              A calcular
            </span>
          </div>
        </BgGray>
        <BgBlack>
          <div className="flex-wrap">
            <span
              style={{ fontWeight: "bolder", margin: "4rem", color: "white" }}
            >
              TOTAL:
            </span>
            <span
              style={{ fontWeight: "bolder", margin: "4rem", color: "white" }}
            >
              ${subTotal()}
            </span>
          </div>
        </BgBlack>
      </Card>
    </Container>
  );
};
