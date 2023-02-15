import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeClick);
  }

  handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  handleEscapeClick = evt => {
    if (evt.code === 'Escape') {
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

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  imageInfo: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
