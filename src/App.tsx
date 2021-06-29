import * as React from "react";
import { useMoonSpinner } from "./hooks/useMoonSpinner";

export const App = () => {
  const toggle = useMoonSpinner("🎱");

  return <button onClick={() => toggle()}>Vite and React</button>;
};
