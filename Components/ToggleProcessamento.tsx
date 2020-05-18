import * as React from "react";
import { Checkbox, STYLE_TYPE, LABEL_PLACEMENT } from "baseui/checkbox";
import { useStyletron } from "baseui";

export default () => {
  const [checked, setChecked] = React.useState(true);
  const [css, theme] = useStyletron();
  return (
    <Checkbox
      checked={checked}
      checkmarkType={STYLE_TYPE.toggle_round}
      onChange={e => setChecked(e.target.checked)}
      labelPlacement={LABEL_PLACEMENT.left}
      overrides={{
        Root: {
          style: ({ $theme }) => {
            return {
              display: "flex",
              alignItems: "center"
            };
          }
        },
        Label: {
          style: ({ $theme }) => {
            return {
              ...$theme.typography.ParagraphSmall
            };
          }
        }
      }}
    >
      Iniciar processamento assim que o upload terminar..
    </Checkbox>
  );
};
