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
          Tem certeza que quer pular esta etapa?
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
          Ao pular essa etapa, seu processamento não ficará georeferenciado.
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
      <Button onClick={() => setIsOpen(true)}>Pular Etapa GCP</Button>
    </>
  );
};
