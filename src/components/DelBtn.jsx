import * as React from "react";
import { PlasmicDelBtn } from "./plasmic/copy_of_minitwitter/PlasmicDelBtn";

function DelBtn_(props, ref) {

  return <PlasmicDelBtn root={{ ref }} {...props} />;
}

const DelBtn = React.forwardRef(DelBtn_);

export default DelBtn;
