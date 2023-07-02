import React, { memo } from "react";
import styled from "styled-components";

const A = styled.a`
  text-decoration: none;
  color:inherit;
`;

function Anchor({ children, ...restProps })
{
  //TODO add interception to src to change method of Anchor retirval
  return <A {...restProps}>{children}</A>;
}
export default memo(Anchor);
