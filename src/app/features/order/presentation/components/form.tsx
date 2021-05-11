import { ChangeEventHandler } from "react";

import { ControlsComponent } from "app/shared/components";
import { IOrden } from "../../domain/entities/iorder";

import { Container, Card } from "../styles";

type Props = {
  orden: IOrden.DatosEnvio;
  isLoading: boolean;
  errors?: any;
  setValueField: ChangeEventHandler;
};

const { InputComponent, ButtonSubmitComponent, CheckBoxComponent } =
  ControlsComponent;

export const FormOrderComponent: React.FC<Props> = ({
  orden,
  isLoading,
  errors,
  setValueField,
}: Props) => {
  return (
    <Card style={{ marginBlock: "1rem" }}>
      <span
        style={{
          fontWeight: "bolder",
          paddingBlock: "1rem",
          paddingInline: "1.5rem",
          borderBottomStyle: "groove",
        }}
      >
        DIRECCIÓN DE ENVIO
      </span>
      <Container>
        <div className="d-flex">
          <div className="flex-column">
            <InputComponent
              label="Nombre"
              name="nombre"
              icon="fas fa-user"
              onChange={setValueField}
              type="text"
              value={orden.nombre}
              error={errors?.nombre}
            />
            <InputComponent
              label="Correo Electrónico"
              name="correo"
              icon="fas fa-envelope"
              onChange={setValueField}
              type="email"
              value={orden.correo}
              error={errors?.correo}
            />

            <InputComponent
              label="Código postal"
              name="codigoPostal"
              icon="fas fa-map-marker-alt"
              onChange={setValueField}
              type="text"
              value={orden.codigoPostal}
              error={errors?.codigoPostal}
            />
            <InputComponent
              label="Estado/Región"
              name="estado"
              icon="fas fa-map-marker-alt"
              onChange={setValueField}
              type="text"
              value={orden.region}
              error={errors?.region}
            />
            <InputComponent
              label="Delegación o municipio"
              name="estado"
              icon="fas fa-map-marker-alt"
              onChange={setValueField}
              type="text"
              value={orden.municipio}
              error={errors?.municipio}
            />
          </div>

          <div className="flex-column">
            <InputComponent
              label="Apellidos"
              name="apellidos"
              icon="fas fa-user"
              onChange={setValueField}
              type="text"
              value={orden.apellidos}
              error={errors?.apellidos}
            />

            <InputComponent
              label="Número de teléfono"
              name="numeroTelefono"
              icon="fas fa-phone-alt"
              onChange={setValueField}
              type="text"
              value={orden.numeroTelefono}
              error={errors?.numeroTelefono}
            />

            <InputComponent
              label="Colonia"
              name="colonia"
              icon="fas fa-map-marker-alt"
              onChange={setValueField}
              type="text"
              value={orden.colonia}
              error={errors?.colonia}
            />

            <InputComponent
              label="Ciudad"
              name="ciudad"
              icon="fas fa-map-marker-alt"
              onChange={setValueField}
              type="text"
              value={orden.ciudad}
              error={errors?.ciudad}
            />

            <InputComponent
              label="Calle"
              name="calle"
              icon="fas fa-map-marked-alt"
              onChange={setValueField}
              type="text"
              value={orden.calle}
              error={errors?.calle}
            />
          </div>
        </div>

        <div className="flex-wrap">
          <ButtonSubmitComponent
            isLoading={isLoading}
            label="Libreta de direcciones"
          />
          <ButtonSubmitComponent isLoading={isLoading} label="Guardar" />
        </div>

        <CheckBoxComponent
          name="esDireccionFacturacion"
          label="Utilizar como dirección de facturación"
          isChecked={orden.esDireccionFacturacion}
          onChange={setValueField}
        />
      </Container>
    </Card>
  );
};
