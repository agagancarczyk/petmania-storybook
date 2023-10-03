import React from "react";
import { action } from "@storybook/addon-actions";
import ProductListItem from "./ProductListItem";
import { text, withKnobs } from "@storybook/addon-knobs";

export default { title: "ProductListItem", decorators: [withKnobs] };

export const standard = () => (
  <ProductListItem
    name={text("name", "Royal Canin")}
    price={text("price", "80")}
    onAddToCart={action("Clicked!")}
    imageUrl={text("imageUrl", "https://placehold.co/400")}
    isSoldOut={true}
    isOnSale={true}
  />
);
