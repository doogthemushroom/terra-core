'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _ModalAccessibility = require('./ModalAccessibility');

var _ModalAccessibility2 = _interopRequireDefault(_ModalAccessibility);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Modal.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
    Child nodes.
  */
  children: _react.PropTypes.node.isRequired,
  /**
    Boolean describing if the modal should be fullscreen or not.
  */
  isFullscreen: _react.PropTypes.bool,
  /**
    Boolean describing if the modal should be shown or not.
  */
  isOpen: _react.PropTypes.bool.isRequired,
  /**
    Boolean describing if the modal should be scrollable or not. It is recommended to not use this and
    instead have the body of the modal scroll.
  */
  isScrollable: _react.PropTypes.bool,
  /**
    Function that will be run after the modal has opened.
  */
  onAfterOpen: _react.PropTypes.func,
  /**
    Function that will be run when the modal is requested to be closed, prior to actually closing.
  */
  onRequestClose: _react.PropTypes.func,
  /**
    Number indicating the milliseconds to wait before closing the modal.
  */
  closeTimeoutMS: _react.PropTypes.number,
  /**
    String indicating how the content container should be announced to screenreaders
  */
  contentLabel: _react.PropTypes.string.isRequired,
  /**
     String className to be applied to the portal.
  */
  portalClassName: _react.PropTypes.string,
  /**
     String className to be applied to the overlay.
  */
  overlayClassName: _react.PropTypes.string,
  /**
     String className to be applied to the modal content.
  */
  className: _react.PropTypes.string,
  /**
    Boolean indicating if the appElement should be hidden
  */
  ariaHideApp: _react.PropTypes.bool,
  /**
    Boolean indicating if clicking on the overlay should close the modal.
  */
  shouldCloseOnOverlayClick: _react.PropTypes.bool,
  /**
    String indicating the role of the modal, allowing the 'dialog' role to be applied if desired.
  */
  role: _react.PropTypes.string,
  /**
    Function that will be called to get the parent element that the modal will be attached to.
  */
  parentSelector: _react.PropTypes.func
};

var defaultProps = {
  isFullscreen: false,
  isOpen: false,
  isScrollable: false,
  closeTimeoutMS: 0,
  ariaHideApp: true,
  shouldCloseOnOverlayClick: true,
  role: 'dialog',
  parentSelector: function parentSelector() {
    return document.body;
  }
};

var Modal = function Modal(_ref) {
  var isFullscreen = _ref.isFullscreen,
      isOpen = _ref.isOpen,
      isScrollable = _ref.isScrollable,
      onAfterOpen = _ref.onAfterOpen,
      onRequestClose = _ref.onRequestClose,
      closeTimeoutMS = _ref.closeTimeoutMS,
      contentLabel = _ref.contentLabel,
      portalClassName = _ref.portalClassName,
      overlayClassName = _ref.overlayClassName,
      className = _ref.className,
      ariaHideApp = _ref.ariaHideApp,
      shouldCloseOnOverlayClick = _ref.shouldCloseOnOverlayClick,
      role = _ref.role,
      parentSelector = _ref.parentSelector,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['isFullscreen', 'isOpen', 'isScrollable', 'onAfterOpen', 'onRequestClose', 'closeTimeoutMS', 'contentLabel', 'portalClassName', 'overlayClassName', 'className', 'ariaHideApp', 'shouldCloseOnOverlayClick', 'role', 'parentSelector', 'children']);

  var modalclasses = (0, _classnames2.default)([{ 'terra-Modal--fullscreen': isFullscreen }, { 'terra-Modal--scrollable': isScrollable }, 'terra-Modal', className]);

  var overlayclasses = (0, _classnames2.default)(['terra-Modal-overlay', overlayClassName]);

  var portalclasses = (0, _classnames2.default)(['terra-Modal-portal', portalClassName]);

  return _react2.default.createElement(
    _reactModal2.default,
    _extends({
      isOpen: isOpen,
      onAfterOpen: onAfterOpen,
      onRequestClose: onRequestClose,
      closeTimeoutMS: closeTimeoutMS,
      contentLabel: contentLabel,
      portalClassName: portalclasses,
      overlayClassName: overlayclasses,
      className: modalclasses,
      ariaHideApp: ariaHideApp,
      shouldCloseOnOverlayClick: shouldCloseOnOverlayClick,
      role: role,
      parentSelector: parentSelector
    }, customProps),
    _react2.default.createElement(_ModalAccessibility2.default, null),
    children
  );
};

Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;

exports.default = Modal;