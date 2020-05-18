import * as React from "react";
import { Accordion, Panel } from "baseui/accordion";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import Drop_down_elevationmodels from "./Drop_down_elevationmodels";
import { Slider } from "baseui/slider";
export default () => {
  const [checkboxes, setCheckboxes] = React.useState([
    false,
    false,
    false,
    false
  ]);
  const [MapaTwodOpacity, setMapaTwodOpacity] = React.useState([60]);
  const [MdtOpacity, SetMdtOpacity] = React.useState([60]);

  return (
    <React.Fragment>
      <Accordion
        onChange={({ expanded }) => console.log(expanded)}
        overrides={{
          Header: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.ParagraphLarge
              };
            }
          },
          Content: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.ParagraphLarge
              };
            }
          }
        }}
      >
        <Panel
          title={
            <Checkbox
              checked={checkboxes[0]}
              onChange={e => {
                const nextCheckboxes = [...checkboxes];
                nextCheckboxes[0] = e.currentTarget.checked;
                setCheckboxes(nextCheckboxes);
              }}
              labelPlacement={LABEL_PLACEMENT.right}
            >
              2D Map
            </Checkbox>
          }
        >
          Opacidade
          <Slider
            value={MapaTwodOpacity}
            onChange={({ MapaTwodOpacity }) =>
              MapaTwodOpacity && setMapaTwodOpacity(MapaTwodOpacity)
            }
            onFinalChange={({ MapaTwodOpacity }) =>
              console.log(MapaTwodOpacity)
            }
            min={0}
            max={100}
          />
        </Panel>
      </Accordion>
      <Accordion
        onChange={({ expanded }) => console.log(expanded)}
        overrides={{
          Header: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.ParagraphLarge
              };
            }
          },
          Content: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.ParagraphLarge
              };
            }
          }
        }}
      >
        <Panel
          title={
            <Checkbox
              checked={checkboxes[1]}
              onChange={e => {
                const nextCheckboxes = [...checkboxes];
                nextCheckboxes[1] = e.currentTarget.checked;
                setCheckboxes(nextCheckboxes);
              }}
              labelPlacement={LABEL_PLACEMENT.right}
            >
              Elevation Models
            </Checkbox>
          }
        >
          Model Type
          <br />
          <Drop_down_elevationmodels />
          <br />
          Histogram
          <Slider
            value={MapaTwodOpacity}
            onChange={({ MapaTwodOpacity }) =>
              MapaTwodOpacity && setMapaTwodOpacity(MapaTwodOpacity)
            }
            onFinalChange={({ MapaTwodOpacity }) =>
              console.log(MapaTwodOpacity)
            }
            min={0}
            max={100}
          />
          <br />
        </Panel>
      </Accordion>
      <Accordion
        onChange={({ expanded }) => console.log(expanded)}
        overrides={{
          Header: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.ParagraphLarge
              };
            }
          },
          Content: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.ParagraphLarge
              };
            }
          }
        }}
      >
        <Panel
          title={
            <Checkbox
              checked={checkboxes[2]}
              onChange={e => {
                const nextCheckboxes = [...checkboxes];
                nextCheckboxes[2] = e.currentTarget.checked;
                setCheckboxes(nextCheckboxes);
              }}
              labelPlacement={LABEL_PLACEMENT.right}
            >
              Mapping Images
            </Checkbox>
          }
        >
          Henrique QUEIMA!!!!!
        </Panel>
      </Accordion>
    </React.Fragment>
  );
};
