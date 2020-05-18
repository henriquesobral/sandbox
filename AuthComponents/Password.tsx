import React from "react";
import { Input } from "baseui/input";
export default () => {
  const [value, setValue] = React.useState("peak-a-boo motherfucker");
  return (
    <Input
      onChange={event => setValue(event.currentTarget.value)}
      type="password"
      value={value}
      placeholder="Insira sua senha"
      clearable
    />
  );
};
