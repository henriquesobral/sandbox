import * as React from "react";
import { Button, SIZE, KIND } from "baseui/button";
import { lightThemePrimitives } from "baseui";

export default () => {
  return (
    <Button
      onClick={() => alert("click")}
      size={SIZE.compact}
      //disabled //(se precisar disable)
      isLoading // (se precisar Load)
      kind={KIND.primary}
      overrides={{
        Input: {
          style: ({ $theme }) => {
            return {
              ...$theme.typography.LabelSmall,
              fontSize: "13px"
            };
          }
        },

        BaseButton: {
          style: ({ $theme }) => {
            return {
              height: "36px",
              width: "100%"
            };
          }
        },

        LoadingSpinner: {
          style: ({ $theme }) => {
            return {
              height: "16px",
              width: "16px"
            };
          }
        }
      }}
    >
      Validar Dataset
    </Button>
  );
};
