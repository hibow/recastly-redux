import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === "CHANGE_VIDEO_LIST" && action.videos.length>0) {
    return action.videos;
  }
  return state;
};

export default videoListReducer;
