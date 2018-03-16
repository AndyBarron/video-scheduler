import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { offset } from '../../styles';

const Label = styled.label`
  align-items: center;
  background: ${ props => props.theme.colorBackgroundDefault };
  outline: 1px solid ${ props =>
    (props.invalid ?
      props.theme.colorDanger :
      offset(props.theme.colorBackgroundDefault)) };
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
    invalid: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    invalid: false,
  };

  handleChange = (event) => {
    this.props.onChange(event.target.checked);
  };

  render() {
    const { checked, invalid, label } = this.props;
    return (
      <Label invalid={invalid}>
        <Checkbox
          checked={checked}
          onChange={this.handleChange}
        />
        { label }
      </Label>
    );
  }
}
