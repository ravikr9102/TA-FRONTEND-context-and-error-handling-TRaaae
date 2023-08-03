import { useContext } from "react";
import { Context } from "../Context";

function Header() {
  let val = useContext(Context)
  return (
    <h1 className={`heading ${val ? "heading-dark" : "heading-light"}`}>
      {val ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
