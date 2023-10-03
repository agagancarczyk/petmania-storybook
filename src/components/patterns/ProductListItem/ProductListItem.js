import React from "react";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import Heading from "../../atoms/Heading/Heading";

const ProductListItem = ({ name, price, imageUrl, onAddToCart, isSoldOut, isOnSale }) => {
  return (
    <Card highlight={isOnSale}>
      <Heading>
        {name}
        {isOnSale && " (On Sale)"}
      </Heading>
      <img height={100} src={imageUrl} alt="product" />
      <Text>{price}</Text>
      <div>
        <Button onClick={onAddToCart} disabled={isSoldOut}>
          {isSoldOut ? "Sold out" : "Add to Cart"}
        </Button>
      </div>
    </Card>
  );
};

export default ProductListItem;
