import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { pageWidth } from '../../styles';
import Select from '../Select';

const NavContainer = styled.div`
  background: ${ props => props.theme.colorBackgroundNav };
  color: ${ props => props.theme.colorTextNav };
  height: 50px;
`;

const NavBody = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  ${ pageWidth() }
`;

const Brand = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
`;

const ThemeSelectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  margin-left: auto;
`;

const ThemeSelectLabel = styled.label`
  margin-right: 10px;
`;

const ThemeSelect = styled(Select)`
  width: 150px;
`;

export default class NavView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    currentThemeId: PropTypes.string.isRequired,
    onThemeSelect: PropTypes.func.isRequired,
    themePresets: PropTypes.objectOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  static defaultProps = {
    className: '',
  };

  handleThemeSelect = id => this.props.onThemeSelect(id);

  render() {
    const { className, currentThemeId, themePresets } = this.props;
    const options = Object.entries(themePresets)
      .map(([id, { name }]) => ({ label: name, value: id }));
    return (
      <NavContainer className={className}>
        <NavBody>
          <Brand>Video Scheduler</Brand>
          <ThemeSelectContainer>
            <ThemeSelectLabel>Theme:</ThemeSelectLabel>
            <ThemeSelect
              onChange={this.handleThemeSelect}
              options={options}
              value={currentThemeId}
            />
          </ThemeSelectContainer>
        </NavBody>
      </NavContainer>
    );
  }
}
