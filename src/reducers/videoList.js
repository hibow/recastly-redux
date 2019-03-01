import Redux from 'redux';

// var initialState = {currentVideo: null, videoList: []};
// var videoListReducer = (state = initialState, action) => {
//   //TODO: define a reducer for the videoList field of our state.
//   if (action.type === 'CHANGE_VIDEO_LIST') {
//     var newState = object.assign({}, state);
//     newState.videoList = action.video;
//     return newState;
//   } else {
//     return state;
//   }
// };
const videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  }
  return state;
};

export default videoListReducer;
