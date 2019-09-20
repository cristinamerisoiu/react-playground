import React from "react";
import styled from "styled-components";

// div element, background-color:#

const Badge = styled.div`
  display: inline-block;
  color: white;
  border-radius: 5px;
  background-color: #547fb3;
  padding: 3px 10px 3px 10px;
`;

export default function defaultBadge() {
  return <Badge>Asiatisch</Badge>;
}
