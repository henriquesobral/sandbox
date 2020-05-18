import * as React from "react";
import { Button, SHAPE } from "baseui/button";
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";

export default () => {
  return (
    <Button onClick={() => alert("click")} shape={SHAPE.pill}>
      ✔
    </Button>
  );
};
