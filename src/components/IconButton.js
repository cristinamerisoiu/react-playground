// width:60px, height:60px, background-color:white, border-radius:10px, padding:7px, color. box-shadow:#00000 16%, flexbox

//active: color und background-color inverted

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  padding: 14px;
  fill: #547fb3;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

export default function IconButton({ children }) {
  return <Button>{children}</Button>;
}
