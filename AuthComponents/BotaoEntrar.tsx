import * as React from "react";
import { Button, SIZE, KIND } from "baseui/button";
import { lightThemePrimitives } from "baseui";
import ArrowRight from "baseui/icon/arrow-right";

export default () => {
  return (
    <Button
      onClick={() => alert("achoooooooou!")}
      size={SIZE.large}
      //disabled //(se precisar disable)
      //isLoading // (se precisar Load)
      kind={KIND.primary}
      overrides={{
        Input: {
          style: ({ $theme }) => {
            return {
              ...$theme.typography.LabelLarge
            };
          }
        },

        BaseButton: {
          style: ({ $theme }) => {
            return {
              width: "100%",
              position: "relative"
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
      Entrar{" "}
      <ArrowRight
        size="40px"
        overrides={{
          Svg: {
            style: {
              position: "absolute",
              right: "0px"
            }
          }
        }}
      />
    </Button>
  );
};
