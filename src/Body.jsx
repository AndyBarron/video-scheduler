import React from 'react';
import Schedule from './ScheduleConnected';
import Video from './Video';

export default class Body extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Video className='col-sm-8'/>
          <Schedule className='col-sm-4'/>
        </div>
      </div>
    );
  }
}
