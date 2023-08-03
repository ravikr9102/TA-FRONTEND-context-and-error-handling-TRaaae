import React from "react";
import { useContext } from "react";
import { Context } from "../Context";

export default function SwitchButton({ changeMode }) {
  let val = useContext(Context)
  return (
    <button
      className={`btn ${val ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {val ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
