import React from "react";
import Ratings from "../components/Ratings";
import Rating from "../icons/Rating";

export default function Rate({ value }) {
  return (
    <Ratings>
      <Rating />
      &nbsp; {value}
    </Ratings>
  );
}
