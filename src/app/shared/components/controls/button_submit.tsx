import React from "react";

import styled from "styled-components";

type Props = {
  isLoading: boolean;
  label: string;
  type?: "submit" | "button";
};

const StyledButton = styled(({ ...props }) => (
  <button {...props} data-testid="submit" type={props.type || "submit"}>
    {props.disabled ? "Cargando..." : props.label}
  </button>
))`
  cursor: pointer;
  width: max-content;
  margin-block: 0.25rem;
  margin-inline: 0.5rem;
  padding-block: 0.4rem;
  padding-inline: 1.5rem;
  background-color: black;
  color: white;
  border: none;
`;

export const ButtonSubmitComponent: React.FC<Props> = ({
  isLoading,
  label,
  type,
}: Props) => <StyledButton disabled={isLoading} label={label} type={type} />;
