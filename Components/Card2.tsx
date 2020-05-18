import * as React from "react";
import { Card } from "baseui/card";
import { Overflow } from "baseui/icon";
import { Alert } from "baseui/icon";
import Drop_down_button from "./Drop_down_button";
import { Popover } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { TriangleDown } from "baseui/icon";

const items = [
  { label: "deploy" },
  { label: "restart" },
  { label: "scale" },
  { label: "rollback" },
  { label: "abort" }
];

const Dropdown = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover
      isOpen={isOpen}
      onClick={() => setIsOpen(s => !s)}
      content={
        <StatefulMenu items={items} onItemSelect={() => setIsOpen(false)} />
      }
    >
      <Overflow
        overrides={{
          Svg: {
            style: {
              cursor: "pointer",
              position: "absolute",
              top: "12px",
              right: "16px",
              color: "#757575"
            }
          }
        }}
        onClick={() => <Dropdown />}
        size={24}
      />
    </Popover>
  );
};

export default () => (
  <Card
    title="Voo Sem Título"
    overrides={{
      Root: {
        style: ({ $theme, $isActive, $isCompleted }) => {
          console.log({ $isActive });
          return {
            width: "276px",
            height: "108px",
            position: "relative",
            backgroundColor: $theme.colors.processingCardBackground
          };
        }
      },

      Title: {
        style: ({ $theme }) => {
          return {
            ...$theme.typography.LabelSmall
          };
        }
      },

      Body: {
        style: ({ $theme }) => {
          return {
            ...$theme.typography.ParagraphXSmall
          };
        }
      }
    }}
  >
    <Dropdown>
      <Overflow
        overrides={{
          Svg: {
            style: {
              cursor: "pointer",
              position: "absolute",
              top: "12px",
              right: "16px",
              color: "#757575"
            }
          }
        }}
        onClick={() => <Dropdown />}
        size={24}
      />
    </Dropdown>
    17 de março de 2020
    <br />
    <font color="#AFAFAF">São Bernardo do Campo, São Paulo - Brasil</font>
    <br />
    <Alert size={12} /> Carregamento Incompleto
  </Card>
);

// <ButtonGroup>
//     <Button>First</Button>
//     <Button>Second</Button>
//     <Dropdown>Third</Dropdown>
//   </ButtonGroup>
