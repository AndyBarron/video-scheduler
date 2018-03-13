import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { offset } from '../../styles';

const INVALID_MIXIN = css`
  border-color: ${ innerProps => innerProps.theme.colorDanger } !important;
`;

const StyledInput = styled.input`
  background: ${ props => props.theme.colorBackgroundDefault };
  border: 1px solid ${ props => props.theme.colorTextDefault };
  border-radius: 0;
  padding: 5px;
  &, &::placeholder {
    color: ${ props => props.theme.colorTextDefault };
  }
  &::placeholder {
    font-style: italic;
    opacity: 0.67;
  }
  &:focus {
    background: ${ props => offset(props.theme.colorBackgroundDefault) };
    outline: none;
  }
  &:focus::placeholder {
    opacity: 0;
  }
  ${ props => (
    !props.invalid ?
      '' :
      INVALID_MIXIN
  ) }
`;

export default class extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    invalid: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
    invalid: false,
    placeholder: '',
    type: 'text',
  };

  handleChange = event => this.props.onChange(event.target.value);

  render() {
    const { className, invalid, placeholder, type, value } = this.props;
    return (
      <StyledInput
        className={className}
        invalid={invalid}
        onChange={this.handleChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    );
  }
}
