import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';


class ExampleApp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="ModalDefautl Example"
           onRequestClose={this.handleCloseModal}
        >
          <p>ModalDefault Example!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

const props = {};

export default ExampleApp;
