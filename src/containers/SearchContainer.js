import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';



const mapDispatchToProps = (dispatch, ownpProps) => {
  return {
    handleSearchInputChange: (query) => dispatch(handleSearchChange(query))
  };
};

var SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search);


//action dispatcher - handleSearchChange (its name is different from search.js of actions)
//handleSearchInputChange  - it is the props we need to pass to search component
//it will dispatch handleSearchChnage(query) action


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.

//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
