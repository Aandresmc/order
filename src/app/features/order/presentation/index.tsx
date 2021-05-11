import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { Form, useForm } from "app/shared/";
import { FormOrderComponent, ProductsOrderComponent } from "./components";
import { UseCase } from "app/core/use_case";
import { IOrden } from "../domain/entities/iorder";
import { validators } from "./validators";
import { initialValuesParams } from "./data";

type FormElement = React.FormEvent<HTMLFormElement>;

type Props = {
  getProductsUseCase: UseCase<null, IOrden.Producto[]>;
  orderUseCase: UseCase<IOrden.Params, boolean>;
};

const OrderPage: React.FC<Props> = ({
  getProductsUseCase,
  orderUseCase,
}: Props) => {
  const [products, setProducts] = useState<IOrden.Producto[]>([]);

  const validate = (fieldValue: IOrden.DatosEnvio = values) => {
    let formErrors = { ...errors } as any;

    Object.entries(fieldValue).forEach(([key, value]) => {
      if (key in fieldValue) {
        formErrors[key] = validators.required(value);
      }
      // if ("correo" in fieldValue) {
      //   formErrors["correo"] = validators.email(value);
      // }
    });

    setErrors({
      ...formErrors,
    });

    //submit form , set value form to fields
    if (fieldValue === values) {
      let formValid = Object.values(formErrors).every(
        (errorField) => errorField === ""
      );
      return formValid;
    }
  };

  const initialValues = initialValuesParams.datosEnvio;
  const {
    values,
    isLoading,
    setLoading,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm({ initialValues, validateOnChange: true, validate });

  useEffect(() => {
    (async () => {
      const res = await getProductsUseCase.call();
      setProducts(res);
      setLoading(false);
    })();
  }, [getProductsUseCase, setLoading]);

  const sendRequest = async () => {
    const res = await orderUseCase.call(values);
    res
      ? swal(
          "¡Pedido Ordenado!",
          ";) tu solamente relajate, nosotros haremos el resto",
          "success"
        )
      : swal(
          "¡Ohh no!",
          "Hubo un error al intentar realizar la orden",
          "error"
        );
    console.log("respuesta orden", res);
  };

  const handleSubmit = async (event: FormElement): Promise<void> => {
    event.preventDefault();
    try {
      if (validate()) {
        await sendRequest();
        resetForm();
      }
    } catch (error) {
      console.log(error);

      // setState({
      //     ...state,
      //     mainError: error.message,
      //     isLoading: false,
      // });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <FormOrderComponent
            orden={values}
            isLoading={isLoading}
            setValueField={handleInputChange}
            errors={errors}
          />
          <ProductsOrderComponent isLoading={false} products={products} />
        </div>
      </Form>
    </>
  );
};

export default OrderPage;
