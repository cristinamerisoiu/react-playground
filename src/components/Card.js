import React from "react";
import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  width: 360px;
  height: 133px;
  color: black;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(10, 10, 10, 0.2);
  background-color: rgba(222, 222, 222, 0.3);
`;

export default function Card() {
  return <CardContainer>Text</CardContainer>;
}
