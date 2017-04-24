import React from 'react';


// This component disables background scrolling.
class ModalAccessibility extends React.Component {
  componentDidMount() {
    // Disable scrolling on the page when Overlay is displayed
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable scrolling on the page since Overlay has gone away
    document.documentElement.style.overflow = null;
  }

  render() {
    const { children, ...customProps } = this.props;
    return null;
  }
}

export default ModalAccessibility;
