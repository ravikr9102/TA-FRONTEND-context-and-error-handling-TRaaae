import { useContext } from "react";
import { Context } from "../Context";

function Title({ text }) {
  let val = useContext(Context)
  return (
    <h2
      className={`heading ${
        val ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
