import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';
import { readableColor } from 'polished';
import styled from 'styled-components';
import { offset, withAlpha } from '../../styles';

const StyledReactSelect = styled(ReactSelect)`
  &, & * {
    background: ${ props => props.theme.colorBackgroundDefault } !important;
    border-color: ${ props => props.theme.colorTextDefault } !important;
    border-radius: 0 !important;
    color: ${ props => props.theme.colorTextDefault } !important;
  }
  &.is-focused:not(.is-open) .Select-control {
    border-color: ${ props => props.theme.colorActive } !important;
    box-shadow: 0 0 0 3px ${ props => withAlpha(0.1, props.theme.colorActive) } !important;
  }
  & .Select-option.is-focused {
    background: ${ props => offset(props.theme.colorBackgroundDefault) } !important;
    color: ${ props => readableColor(offset(props.theme.colorBackgroundDefault)) } !important;
  }
  & .Select-option.is-selected {
    background: ${ props => props.theme.colorActive } !important;
    color: ${ props => props.theme.colorTextActive } !important;
  }
  & .Select-option.is-selected.is-focused {
    background: ${ props => offset(props.theme.colorActive) } !important;
    color: ${ props => readableColor(offset(props.theme.colorActive)) } !important;
  }
`;

const renderArrow = ({ isOpen }) => (isOpen ? '▲' : '▼');

export default class Select extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    clearable: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    searchable: PropTypes.bool,
    value: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    clearable: false,
    searchable: false,
    value: undefined,
  };

  render() {
    const {
      className,
      clearable,
      onChange,
      options,
      searchable,
      value,
    } = this.props;
    return (
      <StyledReactSelect
        arrowRenderer={renderArrow}
        className={className}
        clearable={clearable}
        onChange={onChange}
        options={options}
        searchable={searchable}
        value={value}
      />
    );
  }
}
