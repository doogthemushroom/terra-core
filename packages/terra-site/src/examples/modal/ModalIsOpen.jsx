import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';

class ModalDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onClose() {
    console.log('onClose');
  }

  onOpen() {
    console.log('onOpen');
  }

  onUpdate() {
    console.log('onUpdate');
  }

  beforeClose() {
    console.log('beforeClose');
  }

 handleOpenModal() {
  this.setState({ isOpened: true });
 }

 handleCloseModal() {
  this.setState({ isOpened: false });
 }

 render() {
    return (
      <div>
      <Modal
        ariaLabel="Terra Modal"
        isOpened={this.state.isOpened}
        closeOnEsc
        closeOnOutsideClick
        onClose={this.onClose}
        onOpen={this.onOpen}
        onUpdate={this.onUpdate}
      >
        <div>
          <h1>Terra Modal</h1>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </div>
      </Modal>
      <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}


export default ModalDefault;
