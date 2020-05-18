import * as React from "react";
import { Button, KIND, SHAPE, SIZE } from "baseui/button";
import ChevronDown from "baseui/icon/chevron-down";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";

const ITEMS = [
  { label: "Todas" },
  { label: "Carregadas" },
  { label: "Carregando" }
];
export default () => {
  const [activeName, setActiveName] = React.useState("Todas");
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
            List: { style: { height: "116px", width: "142px" } }
          }}
        />
      )}
    >
      <Button
        endEnhancer={() => <ChevronDown size={24} />}
        shape={SHAPE.pill}
        kind={KIND.secondary}
        size={SIZE.mini}
      >
        {activeName}
      </Button>
    </StatefulPopover>
  );
};
