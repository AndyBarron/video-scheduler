import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input.attrs({
  type: 'text',
})`

`;

export default class extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  handleChange = event => this.props.onChange(event.target.value);

  render() {
    const { value } = this.props;
    return (
      <StyledInput
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}
