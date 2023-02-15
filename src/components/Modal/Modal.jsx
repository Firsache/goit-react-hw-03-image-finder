import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  componentDidMount() {
    document.body.style = 'overflow-y: hidden';
    window.addEventListener('keydown', this.handleEscapeClick);
  }

  componentWillUnmount() {
    document.body.style = 'overflow-y: auto';
    window.removeEventListener('keydown', this.handleEscapeClick);
  }

  handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  handleEscapeClick = evt => {
    if (evt.code === 'Escape') {
      console.log('кликнули на esc');
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props.imageInfo;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <Modal onKeyDown={this.handleEscapeClick}>
          <img src={largeImageURL} alt={alt} />
        </Modal>
      </Backdrop>,
      modalRoot
    );
  }
}
