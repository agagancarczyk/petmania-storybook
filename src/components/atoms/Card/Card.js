import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ededed;
  padding: 8px;
  max-width: 240px;
  &.card button {
    background-color: #0a84ff;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
  }
  &.card small::before {
    content: "$";
  }
  &.onSale {
    background-color: #e8f6ff;
    display: flex;
    flex-direction: column;
    border: 1px solid #ededed;
    padding: 8px;
    max-width: 240px;
  }
`;

StyledCard.defaultProps = {
  textColor: "#2A2A2A",
};

const Card = ({ children, highlight }) => {
  const cardClassName = highlight ? "onSale" : "card";
  return <StyledCard className={cardClassName}>{children}</StyledCard>;
};

export default Card;
