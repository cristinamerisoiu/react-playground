import React from "react";
import styled from "styled-components";

const DetailsDiv = styled.div`
  display: flex;
  margin: 2px;
  align-items: center;
  height: 24px;
  fill: #547fb3;
  color: black;
  background-color: white;
  border: none;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Details({ children }) {
  return <DetailsDiv>{children}</DetailsDiv>;
}
