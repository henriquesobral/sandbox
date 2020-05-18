import * as React from "react";
import { Input, SIZE } from "baseui/input";

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Input
      value={value}
      onChange={e => setValue(e.target.value)}
      size={SIZE.compact}
      placeholder="Sem título"
      clearable
      overrides={{
        Input: {
          style: ({ $theme }) => {
            return {
              ...$theme.typography.ParagraphSmall
            };
          }
        }
      }}
    />
  );
};
