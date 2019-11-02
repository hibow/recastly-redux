import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {

  switch (action.type) {
    case "CHANGE_VIDEO":
      // let newState = Object.assign({}, state)
      // newState.video = action.video
      if (action.video){
        return action.video;
      } else {
        return state;
      }
      // return {
      //   ...state,
      //   script : action.video
      // }
    default:
      return state;
  }
};

// currentVideoReducer({},{
//   type: 'CHANGE_VIDEO',
//   video: {video: 'movie'},
//  })

export default currentVideoReducer;
