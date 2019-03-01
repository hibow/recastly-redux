import Redux from 'redux';

//var initialState = {currentVideo: null, videoList: []};

// var currentVideoReducer = (state = initialState, action) => {
//   //TODO: define a reducer for the currentVideo field of our state.
//   if (action.type === 'CHANGE_VIDEO') {
//     var newState = object.assign({}, state);
//     newState.currentVideo = action.video;
//     return newState;
//   } else {
//     // if (action.video) {
//     //   return action.video;
//     // } else {
//     //   return state;
//     // }
//     return state;
//   }
// };
const currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return action.video || null;
  } else {
    return state;
  }
};

export default currentVideoReducer;
