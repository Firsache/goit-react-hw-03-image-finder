import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  state = {
    isKeyEscape: false,
    isBackdrop: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        console.log('кликнули на esc');
        this.props.onClose();
      }
    });
  }

  handleBackdropClick = evt => {
    //   console.log('кликнули на меня');
    if (evt.target) {
      this.props.onClose();
    }
  };
  handleEscapeClick = evt => {
    console.log(evt);
    //
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <Modal onKeyDown={this.handleEscapeClick}>
          <img
            src="https://i.guim.co.uk/img/media/87929f76cb1cbd05350d5a7b8fe759857a2e7e78/388_698_3299_1979/master/3299.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=875b2f73d7fb4832f0b1720a0851af51"
            alt="alt"
          />
        </Modal>
      </Backdrop>,
      modalRoot
    );
  }
}
