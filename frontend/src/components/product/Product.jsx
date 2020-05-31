import React from "react";
import { ProductStyled } from './Product.styles'
import ProductParts from "./productParts/ProductParts";

const Product = () => {
  return <ProductStyled>
      <ProductParts type="icing"></ProductParts>
      <ProductParts type="base"></ProductParts>
  </ProductStyled>;
};

export default Product;
