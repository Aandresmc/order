import React, { ChangeEventHandler } from "react";
import "./checkbox.css";

type Props = {
  isChecked?: boolean;
  name: string;
  label: string;
  onChange: ChangeEventHandler;
};
export const CheckBoxComponent: React.FC<Props> = ({
  isChecked,
  name,
  label,
  onChange,
}: Props) => {
  return (
    <div className="checkbox">
      <input
        name={name}
        placeholder={label}
        onChange={onChange}
        type="checkbox"
        // checked={status == "on"}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
