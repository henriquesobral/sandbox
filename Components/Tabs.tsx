import * as React from "react";
import { Tabs, Tab } from "baseui/tabs";
import Accordion_2D from "./Accordion_2D";
import Accordion_3D from "./Accordion_3D";

export default () => {
  const [activeKey, setActiveKey] = React.useState("0");
  return (
    <Tabs
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
      activeKey={activeKey}
      overrides={{
        Tab: {
          style: ({ $theme }) => {
            return {
              ...$theme.typography.ParagraphLarge
            };
          }
        }
      }}
    >
      <Tab title="2D">
        <Accordion_2D />
      </Tab>

      <Tab title="3D">
        <Accordion_3D />
      </Tab>
    </Tabs>
  );
};
