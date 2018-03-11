import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonTag = styled.button`
  background: none;
  border: none;
  color: inherit;
`;

export default class ButtonView extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    type: 'button',
  };

  render() {
    const {
      children,
      className,
      onClick,
      type,
    } = this.props;
    return (
      <ButtonTag className={className} onClick={onClick} type={type}>
        { children }
      </ButtonTag>
    );
  }
}
