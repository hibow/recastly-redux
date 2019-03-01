import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = (state, ownProps) => {

  return {
    video: state.currentVideo
  };
};
const mapDispatchToProps = (dispatch, ownpProps) => {
  return {
    //handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};

var VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

//var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
