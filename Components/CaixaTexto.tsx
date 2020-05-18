import * as React from "react";
import { Textarea } from "baseui/textarea";

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Textarea
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Escreva aqui comentários para equipe de suporte da Maply..."
      overrides={{
        Input: {
          style: ({ $theme }) => {
            return {
              ...$theme.typography.ParagraphXSmall,
              fontSize: "13px"
            };
          }
        }
      }}
    />
  );
};
