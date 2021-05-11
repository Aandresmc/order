import React, { ChangeEventHandler } from "react";
import "./input.css";

type Props = {
  icon: string;
  name: string;
  label: string;
  type: inputsType;
  value: string;
  error?: string;
  onChange: ChangeEventHandler;
};

type inputsType = "text" | "email" | "password" | "number";

export const InputComponent: React.FC<Props> = (_props: Props) => {
  const { name, label, type, value, icon, error = null, onChange } = _props;

  return (
    <div className="d-flex flex-column">
      {/* <label className="label">{label}</label> */}
      <div className="d-flex flex-wrap dense">
        <em className={"icon " + icon}></em>
        <input
          className="field"
          type={type}
          name={name}
          value={value}
          placeholder={label}
          onChange={onChange}
        />
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
};
