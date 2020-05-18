import * as React from "react";
import { Input } from "baseui/input";

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Input
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Insira seu e-mail"
      clearable
    />
  );
};
