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

  const [DensidadePontos, SetDensidadePontos] = React.useState([100000]);
  const [TamPontos, SetTamPontos] = React.useState([0]);
  const [ModeloThreedOpacity, SetModeloThreedOpacity] = React.useState([0]);

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
              Nuvem de Pontos
            </Checkbox>
          }
        >
          Densidade de Pontos:
          <Slider
            value={DensidadePontos}
            onChange={({ DensidadePontos }) =>
              DensidadePontos && SetDensidadePontos(DensidadePontos)
            }
            onFinalChange={({ DensidadePontos }) =>
              console.log(DensidadePontos)
            }
            min={100000}
            max={10000000}
          />
          Tamanho do Ponto:
          <Slider
            value={TamPontos}
            onChange={({ TamPontos }) => TamPontos && SetTamPontos(TamPontos)}
            onFinalChange={({ TamPontos }) => console.log(TamPontos)}
            min={0}
            max={3}
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
              Modelo 3D
            </Checkbox>
          }
        >
          Model Type
          <br />
          Opacidade
          <Slider
            value={ModeloThreedOpacity}
            onChange={({ ModeloThreedOpacity }) =>
              ModeloThreedOpacity && SetModeloThreedOpacity(ModeloThreedOpacity)
            }
            onFinalChange={({ ModeloThreedOpacity }) =>
              console.log(ModeloThreedOpacity)
            }
            min={0}
            max={100}
          />
          <br />
        </Panel>
      </Accordion>
    </React.Fragment>
  );
};
