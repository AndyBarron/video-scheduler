import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className={`navbar ${this.props.className || ''}`}>
        <div className="container">
          <a className="navbar-brand" href="/">Video Scheduler</a>
        </div>
      </nav>
    );
  }
};
