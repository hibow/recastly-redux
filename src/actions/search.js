import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Thunk from 'redux-thunk';

var handleVideoSearch = function(q) {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q,
    max: 5
  };
  //not sure what dispatch means for middleware
  return (dispatch) => {
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  };
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
