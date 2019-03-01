import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//var VideoPlayerContainer = () => {};
var mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  }
};

/**
 * const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
 */

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);
export default VideoPlayerContainer;
