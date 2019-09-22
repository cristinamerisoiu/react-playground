import React from "react";
import ActiveIconButton from "../components/ActiveIconButtons";
import Walk from "../icons/Walk";
import { Star } from "../icons/Star";
import { Euro } from "../icons/Euro";
import { Restaurant } from "../icons/Restaurant";

export const WalkIcon = () => (
  <ActiveIconButton>
    <Walk />
  </ActiveIconButton>
);

export const EuroIcon = () => (
  <ActiveIconButton>
    <Euro />
  </ActiveIconButton>
);

export const RestaurantIcon = () => (
  <ActiveIconButton>
    <Restaurant />
  </ActiveIconButton>
);

export const StarIcon = () => (
  <ActiveIconButton>
    <Star />
  </ActiveIconButton>
);
export default {
  title: "ActiveIconButton"
};

// export function ActiveWalkButton() {
//   return <ActiveIconButton active={true}></ActiveIconButton>;
// }

// export function ActiveStarButton() {
//   return <ActiveIconButton active={true}></ActiveIconButton>;
// }

// export function ActiveEuroButton() {
//   return <ActiveIconButton active={true}></ActiveIconButton>;
// }

// export function ActivFoodButton() {
//   return <ActiveIconButton active={true}></ActiveIconButton>;
// }
