import { IOrden } from "../../domain/entities/iorder";
import { ContentBorder } from "../styles";

type Props = {
  product: IOrden.Producto;
};

export const ProductComponent: React.FC<Props> = ({ product }: Props) => {
  return (
    <ContentBorder>
      <div
        style={{ width: "100%" }}
        className="d-flex flex-wrap justify-content-center"
      >
        <img
          style={{ margin: "1rem", width: "120px" }}
          src={product.imagen}
          alt={product.nombre}
        />
        <p style={{ width: "55%", color: "darkgray" }}>{product.nombre}</p>
        <b style={{ fontWeight: "bolder", marginTop: "15px" }}>
          ${product.precio}
        </b>
      </div>
    </ContentBorder>
  );
};
