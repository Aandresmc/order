import React from "react";
import { Form, useForm } from "app/shared/";
import { FormOrderComponent, ProductsOrderComponent } from "./components";
import { UseCase } from "app/core/use_case";
import { IOrden } from "../domain/entities/iorder";
import { Container } from "./styles";
import { validators } from "./validators";
import { initialValuesParams, productsExample } from "./data";

type FormElement = React.FormEvent<HTMLFormElement>;

type Props = {
  orderUseCase: UseCase<IOrden.Params, IOrden.Response>;
};

const OrderPage: React.FC = () => {
  const validate = (fieldValue: IOrden.DatosEnvio = values) => {
    let formErrors = { ...errors } as any;

    Object.entries(fieldValue).forEach(([key, value]) => {
      if (key in fieldValue) {
        formErrors[key] = validators.required(value);
      }
      if ("email" in fieldValue) {
        formErrors[key] = validators.email(value);
      }
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

  const handleSubmit = async (event: FormElement): Promise<void> => {
    event.preventDefault();
    try {
      if (validate()) {
        // await sendRequest();
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
          <ProductsOrderComponent
            isLoading={false}
            products={productsExample}
          />
        </div>
      </Form>
    </>
  );
};

export default OrderPage;
