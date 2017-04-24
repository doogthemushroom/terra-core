import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';
import ModalAccessibility from './ModalAccessibility';
import classNames from 'classnames';

import './Modal.scss';

const propTypes = {
  /**
    Child nodes.
  */
  children: PropTypes.node.isRequired,
  /**
    Boolean describing if the modal should be fullscreen or not.
  */
  isFullscreen: PropTypes.bool,
  /**
    Boolean describing if the modal should be shown or not.
  */
  isOpen: PropTypes.bool.isRequired,
  /**
    Boolean describing if the modal should be scrollable or not. It is recommended to not use this and
    instead have the body of the modal scroll.
  */
  isScrollable: PropTypes.bool,
  /**
    Function that will be run after the modal has opened.
  */
  onAfterOpen: PropTypes.func,
  /**
    Function that will be run when the modal is requested to be closed, prior to actually closing.
  */
  onRequestClose: PropTypes.func,
  /**
    Number indicating the milliseconds to wait before closing the modal.
  */
  closeTimeoutMS: PropTypes.number,
  /**
    String indicating how the content container should be announced to screenreaders
  */
  contentLabel: PropTypes.string.isRequired,
  /**
     String className to be applied to the portal.
  */
  portalClassName: PropTypes.string,
  /**
     String className to be applied to the overlay.
  */
  overlayClassName: PropTypes.string,
  /**
     String className to be applied to the modal content.
  */
  className: PropTypes.string,
  /**
    Boolean indicating if the appElement should be hidden
  */
  ariaHideApp: PropTypes.bool,
  /**
    Boolean indicating if clicking on the overlay should close the modal.
  */
  shouldCloseOnOverlayClick: PropTypes.bool,
  /**
    String indicating the role of the modal, allowing the 'dialog' role to be applied if desired.
  */
  role: PropTypes.string,
  /**
    Function that will be called to get the parent element that the modal will be attached to.
  */
  parentSelector: PropTypes.func,
};

const defaultProps = {
  isFullscreen: false,
  isOpen: false,
  isScrollable: false,
  closeTimeoutMS: 0,
  ariaHideApp: true,
  shouldCloseOnOverlayClick: true,
  role: 'dialog',
  parentSelector() { return document.body; },
};

const Modal = ({
      isFullscreen,
      isOpen,
      isScrollable,
      onAfterOpen,
      onRequestClose,
      closeTimeoutMS,
      contentLabel,
      portalClassName,
      overlayClassName,
      className,
      ariaHideApp,
      shouldCloseOnOverlayClick,
      role,
      parentSelector,
      children,
      ...customProps }) => {

  const modalclasses = classNames([
      { 'terra-Modal--fullscreen': isFullscreen },
      { 'terra-Modal--scrollable': isScrollable },
    'terra-Modal',
    className,
  ]);

  const overlayclasses = classNames([
    'terra-Modal-overlay',
    overlayClassName,
  ]);

  const portalclasses = classNames([
    'terra-Modal-portal',
    portalClassName,
  ]);

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={closeTimeoutMS}
      contentLabel={contentLabel}
      portalClassName={portalclasses}
      overlayClassName={overlayclasses}
      className={modalclasses}
      ariaHideApp={ariaHideApp}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      role={role}
      parentSelector={parentSelector}
      {...customProps}
    >
      <ModalAccessibility />
      {children}
    </ReactModal>
  );
};

Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;

export default Modal;
