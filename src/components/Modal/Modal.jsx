import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  state = {
    isKeyEscape: false,
    isBackdrop: false,
  };

  render() {
    return createPortal(
      <Backdrop class="overlay">
        <Modal class="modal">
          <img src="src" alt="alt" />
        </Modal>
      </Backdrop>,
      modalRoot
    );
  }
}
