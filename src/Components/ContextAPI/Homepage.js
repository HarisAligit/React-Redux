import React, { useContext } from "react";
import contextProvider from "./ThemeContext";

export const HomePage = () => {
  const colorValue = useContext(contextProvider);

  return <div>{colorValue}</div>;
};
