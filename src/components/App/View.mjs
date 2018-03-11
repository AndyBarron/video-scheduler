import PropTypes from 'prop-types';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Nav } from '..';
import { pageWidth } from '../../styles';

const AppContainer = styled.div`
  background-color: ${props => props.theme.colorBackgroundDefault};
  bottom: 0;
  color: ${props => props.theme.colorTextDefault};
  display: flex;
  flex-flow: column nowrap;
  font-family: ${props => props.theme.fontDefault};
  font-size: 16px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const AppBody = styled.div`
  padding-top: 20px;
  ${pageWidth()}
`;

export default class AppView extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Nav />
          <AppBody>Hello World!</AppBody>
        </AppContainer>
      </ThemeProvider>
    );
  }
}
