import * as React from "react";
import { Accordion, Panel } from "baseui/accordion";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { Slider } from "baseui/slider";
import Drop_down_elevationmodels from "./Drop_down_elevationmodels";
import Drop_down_filtros from "./Drop_down_filtros";

export default () => {
  const [checkboxes, setCheckboxes] = React.useState([
    false,
    false,
    false,
    false
  ]);

  const [DensidadePontos, SetDensidadePontos] = React.useState([60]);
  const [TamPontos, SetTamPontos] = React.useState([60]);
  const [ModeloThreedOpacity, SetModeloThreedOpacity] = React.useState([60]);

  return (
    <React.Fragment>
      <Checkbox
        checked={checkboxes[0]}
        onChange={e => {
          const nextCheckboxes = [...checkboxes];
          nextCheckboxes[0] = e.currentTarget.checked;
          setCheckboxes(nextCheckboxes);
        }}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        <Accordion
          onChange={({ expanded }) => console.log(expanded)}
          overrides={{
            Header: {
              style: ({ $theme }) => {
                return {
                  ...$theme.typography.ParagraphLarge,
                  position: "relative",
                  top: "-14px",
                  height: "19px",
                  width: "300px"
                };
              }
            }
          }}
        >
          <Panel title="Nuvem de Pontos">
            Densidade de Pontos:
            <Slider
              value={DensidadePontos}
              onChange={({ DensidadePontos }) =>
                DensidadePontos && SetDensidadePontos(DensidadePontos)
              }
              onFinalChange={({ DensidadePontos }) =>
                console.log(DensidadePontos)
              }
              min={0}
              max={100}
            />
            <br />
            Tamanho do Ponto:
            <Slider
              value={TamPontos}
              onChange={({ TamPontos }) => TamPontos && SetTamPontos(TamPontos)}
              onFinalChange={({ TamPontos }) => console.log(TamPontos)}
              min={0}
              max={100}
            />
            <br />
            Filtros:
            <br />
            <Drop_down_filtros />
          </Panel>
        </Accordion>
      </Checkbox>

      <Checkbox
        checked={checkboxes[1]}
        onChange={e => {
          const nextCheckboxes = [...checkboxes];
          nextCheckboxes[1] = e.currentTarget.checked;
          setCheckboxes(nextCheckboxes);
        }}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        <Accordion
          onChange={({ expanded }) => console.log(expanded)}
          overrides={{
            Header: {
              style: ({ $theme }) => {
                return {
                  ...$theme.typography.ParagraphLarge,
                  position: "relative",
                  top: "-14px",
                  height: "19px",
                  width: "300px"
                };
              }
            }
          }}
        >
          <Panel title="Modelo 3D">
            Opacidade
            <Slider
              value={ModeloThreedOpacity}
              onChange={({ ModeloThreedOpacity }) =>
                ModeloThreedOpacity &&
                SetModeloThreedOpacity(ModeloThreedOpacity)
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
      </Checkbox>
    </React.Fragment>
  );
};
