import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-evenly;
  margin: 1rem; 
`;

export const BgGray = styled.div`
  padding: 0.5rem;
  text-align: center;
  background-color: #ececef;
  color: black;
`;

export const BgBlack = styled.div`
  padding: 0.5rem;
  text-align: center;
  background-color: black;
  color: #ececef;
`;

export const Card = styled.div`
  min-width: 0;
  max-width: fit-content;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const ContentBorder = styled.div`
  position: relative;
  padding: 1rem;
  border: solid #f7f7f9;
  border-width: 0.15rem 0 0;
`;
