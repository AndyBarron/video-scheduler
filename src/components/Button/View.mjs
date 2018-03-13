import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { offset } from '../../styles';

const KIND_TO_COLORS = {
  danger: css`
    background: ${ props => props.theme.colorDanger };
    border-color: ${ props => offset(props.theme.colorDanger) };
    color: ${ props => props.theme.colorTextDanger };
  `,
  default: css`
    background: ${ props => props.theme.colorBackgroundDefault };
    border-color: ${ props => offset(props.theme.colorBackgroundDefault) };
    color: ${ props => props.theme.colorTextDefault };
  `,
  primary: css`
    background: ${ props => props.theme.colorActive };
    border-color: ${ props => offset(props.theme.colorActive) };
    color: ${ props => props.theme.colorTextActive };
  `,
};

const ButtonTag = styled.button`
  border: 1px solid;
  ${ ({ kind }) => KIND_TO_COLORS[kind] }
  opacity: ${ ({ disabled }) => (disabled ? 0.5 : 1) }
  padding: 5px;
  &:focus {
    box-shadow: 0px 0px 2px 0px ${ props => props.theme.colorTextDefault };
    outline: none;
  }
`;

export default class ButtonView extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    kind: PropTypes.oneOf(Object.keys(KIND_TO_COLORS)),
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    disabled: false,
    kind: 'default',
    type: 'button',
  };

  render() {
    const {
      children,
      className,
      disabled,
      kind,
      onClick,
      type,
    } = this.props;
    return (
      <ButtonTag
        className={className}
        disabled={disabled}
        kind={kind}
        onClick={onClick}
        type={type}
      >
        { children }
      </ButtonTag>
    );
  }
}
