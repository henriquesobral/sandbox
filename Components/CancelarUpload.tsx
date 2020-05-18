import * as React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";
import { Button, KIND } from "baseui/button";

export default () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Modal
        onClose={() => setIsOpen(false)}
        closeable
        isOpen={isOpen}
        animate
        autoFocus
        size={SIZE.default}
        role={ROLE.dialog}
      >
        <ModalHeader
          overrides={{
            Input: {
              style: ({ $theme }) => {
                return {
                  ...$theme.typography.HeadingXSmall
                };
              }
            }
          }}
        >
          Tem certeza que quer sair?
        </ModalHeader>
        <ModalBody
          overrides={{
            Input: {
              style: ({ $theme }) => {
                return {
                  ...$theme.typography.ParagraphSmall
                };
              }
            }
          }}
        >
          Todos seus dados e ajustes feitos até então serão perdidos.
        </ModalBody>
        <ModalFooter>
          <ModalButton
            kind={KIND.secondary}
            overrides={{
              Input: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.LabelSmall
                  };
                }
              }
            }}
          >
            Cancelar
          </ModalButton>
          <ModalButton
            overrides={{
              Input: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.LabelSmall
                  };
                }
              }
            }}
          >
            Sim, tenho
          </ModalButton>
        </ModalFooter>
      </Modal>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
    </>
  );
};
