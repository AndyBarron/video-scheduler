import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Video Scheduler</a>
        </div>
      </nav>
    );
  }
};
