import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)`
  padding: 1rem;
  color: white;
  text-decoration: none;
`;

const PStyled = styled.p`
  font-family: sans-serif;
  font-weight: bold;
`;

export { LinkStyled, PStyled };
