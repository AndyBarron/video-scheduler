import PropTypes from 'prop-types';
import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import TextInput from '../TextInput';

const VideoContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const StyledInput = styled(TextInput)`
  width: 100%;
`;

const StyledPlayer = styled(ReactPlayer)`
  max-width: 100%;
`;

export default class VideoView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onDurationUpdate: PropTypes.func.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    urlInput: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    errorMessage: null,
  };

  handleDurationUpdate = (seconds) => {
    this.props.onDurationUpdate(seconds * 1000);
  };
  handleError = () => {
    const { url } = this.props;
    const errorMessage = ReactPlayer.canPlay(url) ?
      'An error occurred.' :
      "That video either doesn't exist or can't be played.";
    this.setState({ errorMessage });
  };
  handleUrlChange = (url) => {
    this.props.onUrlChange(url);
    this.setState({ errorMessage: null });
  };

  render() {
    const { className, url, urlInput } = this.props;
    const { errorMessage } = this.state;
    return (
      <VideoContainer className={className}>
        <div>
          <StyledInput
            onChange={this.handleUrlChange}
            placeholder="Paste video URL here"
            value={urlInput}
          />
        </div>
        {url && (
          <StyledPlayer
            hidden={!ReactPlayer.canPlay(url)}
            onDuration={this.handleDurationUpdate}
            onError={this.handleError}
            url={url}
          />
        )}
        {errorMessage && (
          <div>{ errorMessage }</div>
        )}
      </VideoContainer>
    );
  }
}
window.ReactPlayer = ReactPlayer;
