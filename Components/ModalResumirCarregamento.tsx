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
import { FileUploader } from "baseui/file-uploader";

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
                  ...$theme.typography.HeadingSmall
                };
              }
            }
          }}
        >
          Resumir um carregamento
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
          Para continuar seu carregamento clique abaixo e selecione todas as
          imagens novamente.
        </ModalBody>

        <ModalBody>
          <FileUploader />
        </ModalBody>

        <ModalFooter $style={{ textAlign: "center", borderTopWidth: "0" }}>
          <ModalButton
            kind={KIND.primary}
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
            Continuar carregamento
          </ModalButton>
        </ModalFooter>
      </Modal>
      <Button onClick={() => setIsOpen(true)}>Resumir Carregamento</Button>
    </>
  );
};
