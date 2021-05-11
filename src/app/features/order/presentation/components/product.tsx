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
        className="d-flex justify-content-center"
      >
        <img
          style={{ margin: "1rem", width: "85px" }}
          src={product.image}
          alt={product.name}
        />
        <p style={{ color: "darkgray" }}>{product.name}</p>
        <b style={{ fontWeight: "bolder", marginTop: "15px", marginInline:"15px" }}>
          ${product.price}
        </b>
      </div>
    </ContentBorder>
  );
};
