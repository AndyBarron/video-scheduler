import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { pageWidth } from '../../styles';

const NavContainer = styled.div`
  background: ${props => props.theme.colorBackgroundNav};
  color: ${props => props.theme.colorTextNav};
  height: 40px;
`;

const NavBody = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  ${pageWidth()}
`;

const Brand = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
`;

export default class NavView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;
    return (
      <NavContainer className={className}>
        <NavBody>
          <Brand>Video Scheduler</Brand>
        </NavBody>
      </NavContainer>
    );
  }
}
