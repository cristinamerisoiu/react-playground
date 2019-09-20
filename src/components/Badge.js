import React from "react";
import styled from "styled-components";

const Badge = styled.div`
  display: inline-block;
  border-radius: 5px;
  background-color: ${props => (props.clickedIcon ? "#547FB3" : "white")};
  padding: 3px 10px 3px 10px;
  border: ${props => (props.clickedIcon ? "" : "#547FB3 solid 2px")};
  color: ${props => (props.clickedIcon ? "white" : "#547FB3")};
`;

export default function DefaultBadge({ active = true, children }) {
  return <Badge clickedIcon={active}>{children}</Badge>;
}
