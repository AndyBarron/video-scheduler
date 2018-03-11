import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';

export default class Select extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className, options: optionMap } = this.props;
    const options = Object.entries(optionMap).map(([value, label]) => ({ label, value }));
    return (
      <ReactSelect className={className} options={options} />
    );
  }
}
