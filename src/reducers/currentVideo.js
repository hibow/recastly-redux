import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === "CHANGE_VIDEO") {
    return action.video
  }
  return state;
};

// currentVideoReducer({},{
//   type: 'CHANGE_VIDEO',
//   video: {video: 'movie'},
//  })

export default currentVideoReducer;


/**
 * var changeVideo = (video) => ({
    type: 'CHANGE_VIDEO',
    video: video,
   });
 */