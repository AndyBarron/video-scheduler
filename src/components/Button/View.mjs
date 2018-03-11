import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const KIND_TO_COLORS = {
  default: css`
    background: none;
    color: inherit;
  `,
  primary: css`
    background: ${ props => props.theme.colorActive };
    color: ${ props => props.theme.colorTextActive };
  `,
};

const ButtonTag = styled.button`
  border: none;
  ${ ({ kind }) => KIND_TO_COLORS[kind] }
  padding: 5px;
`;

export default class ButtonView extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    kind: PropTypes.oneOf([
      'default',
      'primary',
    ]),
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    kind: 'default',
    type: 'button',
  };

  render() {
    const {
      children,
      className,
      kind,
      onClick,
      type,
    } = this.props;
    return (
      <ButtonTag className={className} kind={kind} onClick={onClick} type={type}>
        { children }
      </ButtonTag>
    );
  }
}
