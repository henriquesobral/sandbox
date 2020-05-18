import * as React from "react";
import { RadioGroup, Radio, ALIGN } from "baseui/radio";

export default () => {
  const [value, setValue] = React.useState("1");
  return (
    <RadioGroup
      value={value}
      onChange={e => setValue(e.target.value)}
      name="number"
      align={ALIGN.horizontal}
      //disabled //(se precisar disable)
      overrides={{
        Label: {
          style: ({ $theme }) => {
            return {
              ...$theme.typography.ParagraphSmall
            };
          }
        },
        RadioMarkOuter: {
          style: ({ $theme }) => {
            return {
              width: $theme.sizing.scale600,
              height: $theme.sizing.scale600
            };
          }
        },
        RadioMarkInner: {
          style: ({ $theme, $checked }) => {
            return {
              height: $checked
                ? $theme.sizing.scale200
                : $theme.sizing.scale500,
              width: $checked ? $theme.sizing.scale200 : $theme.sizing.scale500
            };
          }
        }
      }}
    >
      <Radio value="1">X, Y, Z</Radio>
      <Radio value="2">Y, X, Z</Radio>
    </RadioGroup>
  );
};
