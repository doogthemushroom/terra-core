import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Portal from 'react-portal';
import FocusTrap from 'focus-trap-react';
import './Modal.scss';

export default class ModalExample extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
      isOpenedByClickOn: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModalByClickOn = this.handleCloseModalByClickOn.bind(this);
    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.handleBeforeClose = this.handleBeforeClose.bind(this);
  }

  /* eslint-disable */
  handleOnOpen(node) {
    console.log('onOpen: Called');
  }

  handleOnClose() {
    console.log('onClose: Called');
  }

  handleOnUpdate() {
    console.log('onUpdate: Called');
  }

  handleBeforeClose(node, callback) {
    console.log('beforeClose: Called');
    callback();
  }
  /* eslint-enable */

  handleOpenModal() {
    this.setState({ isOpened: true });
  }

  handleCloseModal() {
    this.setState({ isOpened: false });
  }

  handleCloseModalByClickOn() {
    this.setState({ isOpened: false });
  }


  render() {
    const button1 = <button>Open using the openByClickOn prop</button>;

    return (
      <div>
        <Modal
          closeOnEsc
          closeOnOutsideClick
          openByClickOn={button1}
          isOpened={this.state.isOpenedByClickOn}
          isFullscreen
          isScrollable
          role="dialog"
          onClose={this.handleOnClose}
          onOpen={this.handleOnOpen}
          onUpdate={this.handleOnUpdate}
          beforeClose={this.handleBeforeClose}
          {...this.props}
        >
              <h2>Pseudo Modal</h2>
              <p>Using the openByClickOn prop</p>
              <p>closeOnEsc is enabled</p>
              <p>closeOnOutsideClick is enabled</p>
              <p>isFullscreen is enabled</p>
              <p>isScrollable is enabled</p>
              <p>role=dialog</p>
              <p>onClose</p>
              <p>onOpen</p>
              <p>onUpdate</p>
              <p>beforeClose</p>
              <p>
                <button onClick={this.handleCloseModalByClickOn}>Close this</button>
              </p>
        </Modal>
        <Modal
          closeOnEsc={false}
          closeOnOutsideClick={false}
          isOpened={this.state.isOpened}
          classNameModal="modal-custom-class"
          classNameOverlay="overlay-custom-class"
          isFullscreen={false}
          isScrollable={false}
          role="dialog"
        >
              <h2>Pseudo Modal</h2>
              <p>closeOnEsc is disabled</p>
              <p>closeOnOutsideClick is disabled</p>
              <p>isFullscreen is disabled</p>
              <p>isScrollable is disabled</p>
              <p>
                <button onClick={this.handleCloseModal}>Close this</button>
              </p>
        </Modal>
        <button onClick={this.handleOpenModal}>Open using the isOpened prop</button>
        <div id="onOpen">onOpen: Not Called</div>
        <div id="onUpdate">onUpdate: Not Called</div>
        <div id="onClose">onClose: Not Called</div>
        <div id="beforeClose">beforeClose: Not Called</div>
      </div>
    );
  }
}



class Modal extends React.Component {
  render() {
    const button1 = <button>Open portal with pseudo modal</button>;

    return (
      <Portal
        closeOnEsc={this.props.closeOnEsc}
        closeOnOutsideClick={this.props.closeOnOutsideClick}
        openByClickOn={this.props.openByClickOn}
        isOpened={this.props.isOpened}
        onClose={this.props.onClose}
        onOpen={this.props.onOpen}
        onUpdate={this.props.onUpdate}
        beforeClose={this.props.beforeClose}
      >
        <ModalContent
          closeOnOutsideClick={this.props.closeOnOutsideClick}
          classNameModal={this.props.classNameModal}
          classNameOverlay={this.props.classNameOverlay}
          isFullscreen={this.props.isFullscreen}
          isScrollable={this.props.isScrollable}
          role={this.props.role}
        >
          {this.props.children}
        </ModalContent>
      </Portal>
    );
  }
}



class ModalContent extends React.Component {
  componentDidMount() {
    // Disable scrolling on the page when Overlay is displayed
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable scrolling on the page since Overlay has gone away
    document.documentElement.style.overflow = null;
  }


  render() {
    const modalClasses = classNames(['terra-Modal',
      { 'terra-Modal--fullscreen': this.props.isFullscreen },
      { 'terra-Modal--scrollable': this.props.isScrollable },
      this.props.classNameModal,
    ]);
    const modalOverlayClasses = classNames("terra-Modal-overlay", this.props.classNameOverlay);

    return (
      <FocusTrap >
        <div className={modalClasses}
             role={this.props.role}
             tabIndex="0"
        >
          {this.props.children}
        </div>
        <div
          className={modalOverlayClasses}
          onClick={this.props.closeOnOutsideClick ? this.props.closePortal : null}
        >
        </div>
      </FocusTrap>
    );
  }
}
