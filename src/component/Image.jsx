import React, { memo } from "react";

function Image({ src, alt, ...restProps }) {
  //TODO add interception to src to change method of image retirval
  return <img src={src} alt={alt} {...restProps} />;
}
export default memo(Image);
