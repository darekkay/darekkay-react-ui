import React from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import clsx from "clsx";
import { Property } from "csstype";

import { IS_TEST } from "../utils";
import Icon from "../icon";
import Button from "../button";
import icons from "../icon/icons";

if (!IS_TEST) {
  // bind modal to the root app element
  ReactModal.setAppElement("#root");
} else {
  // create a mock modal root
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.append(modalRoot);
  ReactModal.setAppElement("#modal-root");
}

export const Modal = ({
  headline,
  maxWidth = "600px",
  closeModal,
  renderFooter,
  closeButtonAriaLabel = "Close modal",
  children,
  ...rest
}: ModalProps) => {
  return (
    <ReactModal
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 z-30 flex justify-center items-center p-3 md:p-8 backdrop"
      className="w-full my-8 mx-auto text-default bg-default border rounded outline-none shadow-xl max-h-full overflow-auto"
      contentLabel={headline}
      style={{
        content: {
          maxWidth,
        },
      }}
      {...rest}
    >
      {/* Modal header */}
      <div
        className={clsx("flex items-center px-3 md:px-6", {
          "py-3": !headline,
          "py-4 md:py-6 border-bottom bg-offset": headline,
        })}
      >
        {headline && (
          <h2 className="mb-0 text-4 font-bold cursor-default">{headline}</h2>
        )}
        <Button
          variant="unstyled"
          size="small"
          outline
          border={false}
          className="ml-auto"
          onClick={closeModal}
        >
          <div className="sr-only">{closeButtonAriaLabel}</div>
          <Icon definition={icons.times} />
        </Button>
      </div>

      {/* Modal content */}
      <div className="modal-content p-3 md:p-6">{children}</div>

      {/* Modal footer */}
      {renderFooter && (
        <div className="flex flex-col md:flex-row justify-end p-3 md:p-6 gap-6 border-top bg-offset text-right">
          {renderFooter()}
        </div>
      )}
    </ReactModal>
  );
};

export interface ModalProps extends ReactModalProps {
  headline?: string;
  maxWidth?: Property.MaxWidth<string>;
  closeModal: () => void;
  renderFooter?: () => React.ReactNode;
  closeButtonAriaLabel?: string;
  children: React.ReactNode;
}

export default Modal;
