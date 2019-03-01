import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  console.log(action.video)
  switch (action.type) {
    case "CHANGE_VIDEO":
      return action.video
    default:
      return state;
  }
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