import React from "react";
import Loading from "../../atoms/Loading/Loading";
import Error from "../../atoms/Error/Error";

export const statusType = {
  isLoading: "loading",
  hasError: "errored",
  isLoaded: "loaded",
};

const ProductList = ({ status, ...otherPros }) => {
  if (status === statusType.isLoading) {
    return <Loading />;
  }
  if (status === status.hasError) {
    return <Error message="Failed to load data" />;
  }
  return;
};

export default ProductList;
