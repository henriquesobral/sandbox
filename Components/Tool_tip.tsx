import * as React from "react";
import { StatefulTooltip } from "baseui/tooltip";

export default () => {
  return (
    <StatefulTooltip
      content="Comparações entre processamentos e as anotações de um voo somente serao feitas através de um projeto."
      returnFocus
      renderAll
      autoFocus
      overrides={{
        Input: {
          style: ({ $theme }) => {
            return {
              ...$theme.typography.ParagraphSmall
            };
          }
        }
      }}
    >
      (i)
    </StatefulTooltip>
  );
};
