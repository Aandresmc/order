const email = (email: string) => {
  var emailValid = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (!email) return "Campo requerido";

  if (email.length > 60) return "Max 60 caracteres";

  if (!emailValid.test(email)) return "Correo electrónico no valido";

  return "";
};

const required = (value: string) => {
  if (!value) return "Campo requerido";
  return "";
};

export const validators = {
  email,
  required,
};
