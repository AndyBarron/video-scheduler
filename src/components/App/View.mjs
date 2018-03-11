import PropTypes from 'prop-types';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Schedule, Nav, Video } from '..';
import { mobile, offset, pageWidth } from '../../styles';

const AppContainer = styled.div`
  background-color: ${ props => props.theme.colorBackgroundDefault };
  bottom: 0;
  color: ${ props => props.theme.colorTextDefault };
  display: flex;
  flex-flow: column nowrap;
  font-family: ${ props => props.theme.fontDefault };
  font-size: 16px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  & *:focus {
    outline-color: ${ props => offset(props.theme.colorActive) };
  }
`;

const AppBody = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 20px;
  & > * {
    flex: 1;
    width: 50%;
  }
  ${ pageWidth() }
  ${ mobile(`
    flex-flow: column nowrap;
    & > * {
      flex-grow: 1;
      flex-shrink: 1;
      width: 100%;
    }
    & > *:not(:first-child) {
      margin-top: 20px;
    }
  `) }
`;

export default class AppView extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Nav />
          <AppBody>
            <Video />
            <Schedule />
          </AppBody>
        </AppContainer>
      </ThemeProvider>
    );
  }
}
