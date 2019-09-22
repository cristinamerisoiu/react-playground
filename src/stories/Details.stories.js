import React from "react";
import Euro from "../icons/EuroPrice";
import Pricing from "../components/Pricing";
import Distance from "../components/Distance";
import Rate from "../components/Rate";

export default {
  title: "DetailsDiv"
};
export const DistanceShort = () => <Distance value={3} />;
export const DistanceLong = () => <Distance value={6} />;

export const RateHigh = () => <Rate value={4.8} />;
export const RateLow = () => <Rate value={2.8} />;

export const PriceLow = () => (
  <Pricing>
    <Euro />
    <Euro isGrey={true} />
    <Euro isGrey={true} />
  </Pricing>
);

export const PriceMedium = () => (
  <Pricing>
    <Euro />
    <Euro />
    <Euro isGrey={true} />
  </Pricing>
);

export const PriceHigh = () => (
  <Pricing>
    <Euro />
    <Euro />
    <Euro />
  </Pricing>
);
