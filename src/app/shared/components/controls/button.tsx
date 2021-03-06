import React from "react";

import styled from "styled-components";

type Props = {
  isLoading: boolean;
  label: string;
};

const StyledButton = styled(({ ...props }) => (
  <button {...props} data-testid="button" type="button">
    {props.disabled ? "Cargando..." : props.label}
  </button>
))`
  cursor: pointer;
  width: max-content;
  margin-block: 0.25rem;
  margin-inline: 0.5rem;
  padding-block: 0.4rem;
  padding-inline: 1.5rem;
  background-color: #a00037;
  color: white;
  border: none;
`;

export const ButtonComponent: React.FC<Props> = ({
  isLoading,
  label,
}: Props) => <StyledButton disabled={isLoading} label={label} />;
