import * as React from "react";
import { Link } from "react-router-dom";
import { PlasmicFab } from "./plasmic/copy_of_minitwitter/PlasmicFab";

function Fab_(props, ref) {

  return <PlasmicFab 
    root={{ ref, as: Link, props: {to: "/post"} }} {...props} 
    />;
}

const Fab = React.forwardRef(Fab_);

export default Fab;
