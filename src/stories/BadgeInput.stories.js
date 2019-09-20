import React from "react";
import DefaultBadge from "../components/Badge";

export default {
  title: "BadgeInput"
};

export const BadgeInput = () => <DefaultBadge>Asiatisch</DefaultBadge>;

export const BorderBadge = () => (
  <DefaultBadge active={false}>Asiatisch</DefaultBadge>
);

// export default - you can name it whatever
// export a named function should have the same name as the called function
