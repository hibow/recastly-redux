import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  console.log(q);
  let youtubeObj = {
 //   part: 'snippet',
    key: YOUTUBE_API_KEY,
    query: q,
    //max: 5,
//    type: 'video',
//    videoEmbeddable: 'true'
  }
  return (dispatch) => {
    searchYouTube( youtubeObj, (videos) => {
      // console.log(YOUTUBE_API_KEY);
      dispatch(changeVideoList(videos))
      dispatch(changeVideo(videos[0]))
    });
  }
};

export default handleVideoSearch;

/**
 * 'should return a function'
 * 'should take a query parameter'
 * 'should make a call to the youtube API'
 * 'should dispatch changeVideo'
 * 'should dispatch changeVideoList'
 */