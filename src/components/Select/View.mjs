import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';

const StyledReactSelect = styled(ReactSelect)`
  & > .Select-control {
    border-radius: 0;
  }
  & > .Select-menu-outer {
    border-radius: 0;
  }
`;

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
