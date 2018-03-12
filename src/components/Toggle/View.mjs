import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  align-items: center;
  background: ${ props => props.theme.colorBackgroundDefault };
  display: flex;
  flex-flow: row nowrap;
  padding: 5px;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  margin-right: 5px;
`;

export default class ToggleView extends React.Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleChange = (event) => {
    this.props.onChange(event.target.checked);
  };

  render() {
    const { checked, label } = this.props;
    return (
      <Label>
        <Checkbox
          checked={checked}
          onChange={this.handleChange}
        />
        { label }
      </Label>
    );
  }
}
