import * as React from "react";
import { Button, KIND, SHAPE, SIZE } from "baseui/button";
import ChevronDown from "baseui/icon/chevron-down";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";

const ITEMS = [
  { label: "RGB" },
  { label: "Elevação" },
  { label: "RGB / Elevação" }
];
export default () => {
  const [activeName, setActiveName] = React.useState("RGB");
  return (
    <StatefulPopover
      focusLock
      placement={PLACEMENT.bottomLeft}
      content={({ close }) => (
        <StatefulMenu
          items={ITEMS}
          onItemSelect={ret => {
            setActiveName(ret.item.label);
            close();
          }}
          overrides={{
            List: {
              style: ({ $theme }) => {
                return {
                  ...$theme.typography.ParagraphLarge,
                  height: "116px",
                  width: "142px"
                };
              }
            }
          }}
        />
      )}
    >
      <Button
        endEnhancer={() => <ChevronDown size={24} />}
        kind={KIND.secondary}
        size={SIZE.mini}
      >
        {activeName}
      </Button>
    </StatefulPopover>
  );
};
