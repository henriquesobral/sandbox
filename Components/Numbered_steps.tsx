import * as React from "react";
import { ProgressSteps, NumberedStep } from "baseui/progress-steps";
import { LabelXSmall, ParagraphXSmall } from "baseui/typography";
import ValidateNumberedStep from "./ValidateNumberedStep";
import { StyledLink } from "baseui/link";

export default () => {
  const [current] = React.useState(1);
  const [error] = React.useState(1);
  return (
    <ProgressSteps
      current={current}
      overrides={
        {
          Title: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.LabelXSmall,
                height: $theme.sizing.scale800,
                display: "flex",
                alignItems: "center"
              };
            }
          },
          Description: {
            style: ({ $theme }) => {
              return {};
            }
          },
          Icon: {
            style: ({ $theme, $isActive, $isCompleted }) => {
              console.log({ $isActive });
              return {};
            }
          },
          ErrorIcon: {
            style: ({ $theme, $isActive, $isCompleted }) => {
              console.log({ $isActive });
              return {
                backgroundColor: $theme.colors.negative,
                color: "white"
              };
            }
          },
          Tail: {
            style: () => {
              return {
                boxSizing: "content-box"
              };
            }
          }
        } as any
      }
    >
      <ValidateNumberedStep title="Quantidade de imagens" isError={error === 0}>
        <LabelXSmall>Máximo de 3000 imagens.</LabelXSmall>
        <ParagraphXSmall>
          Caso queira carregar mais imagens em único voo entrar em contato pelo
          &nbsp;
          <StyledLink href={`mailto:contato@maply.io`} color="#007AFF">
            contato@maply.io
          </StyledLink>
          .
        </ParagraphXSmall>
      </ValidateNumberedStep>

      <ValidateNumberedStep
        title="Informações geográficas"
        isError={error === 1}
      >
        <ParagraphXSmall>
          Imagens devem conter dados geotageados.
        </ParagraphXSmall>
      </ValidateNumberedStep>

      <ValidateNumberedStep title="Tamanho do mapeamento" isError={error === 2}>
        <ParagraphXSmall>Área máxima de mapeamento 3.000 ha.</ParagraphXSmall>
      </ValidateNumberedStep>
    </ProgressSteps>
  );
};
