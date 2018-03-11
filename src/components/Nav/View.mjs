import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { pageWidth } from '../../styles';

const NavContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.colorBackgroundNav};
  color: ${props => props.theme.colorTextNav};
  display: flex;
  flex-flow: row nowrap;
  height: 40px;
  ${pageWidth()}
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
        <span>Video Scheduler</span>
      </NavContainer>
    );
  }
}
