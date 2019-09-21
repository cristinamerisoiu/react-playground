import React from "react";
import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  width: 360px;
  height: 133px;
  color: black;
  border-radius: 3px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

export default function Card() {
  return <CardContainer>Text</CardContainer>;
}
