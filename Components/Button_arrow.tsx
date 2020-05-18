import * as React from "react";
import { Button, KIND, SHAPE } from "baseui/button";
import { ArrowLeft } from "baseui/icon";

export default () => {
  return (
    <Button
      onClick={() => alert("click")}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return {
              padding: $theme.sizing.scale100
            };
          }
        }
      }}
      kind={KIND.secondary}
      shape={SHAPE.round}
    >
      <ArrowLeft size={28} />
    </Button>
  );
};
