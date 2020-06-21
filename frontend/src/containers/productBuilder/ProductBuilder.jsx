import React from "react";
import { useSelector } from "react-redux";
import { PStyled } from "../../shared/common.styles";
import ProductCardList from "../../shared/productCardList/ProductCardList";

const ProductBuilder = () => {
  const delivery = useSelector((state) => state.delivery);
  return (
    <div data-testid="productBuilder">
      {delivery && (
        <PStyled>
          Warning! Showing only delivery options. More varities are available
          for pickup.
        </PStyled>
      )}
      <ProductCardList/>
      <ProductCardList/>
      <ProductCardList/>
      <ProductCardList/>
    </div>
  );
};

export default ProductBuilder;
