import React from "react";
import ActionButton from "../components/ActiveIconButtons";
import Done from "../icons/Done";
import Cancel from "../icons/Cancel";
import Add from "../icons/Add";
import ActionStar from "../icons/ActionStar";

export default {
  title: "ActionButton"
};
export function SubmitButton() {
  return (
    <ActionButton>
      <Done />
    </ActionButton>
  );
}
export function CancelButton() {
  return (
    <ActionButton>
      <Cancel />
    </ActionButton>
  );
}
export function AddButton() {
  return (
    <ActionButton>
      <Add value="1" />
    </ActionButton>
  );
}

export function StarButton() {
  return (
    <ActionButton>
      <ActionStar />
    </ActionButton>
  );
}
