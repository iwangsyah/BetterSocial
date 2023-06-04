import _ from 'lodash';

const feedReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FEED':
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default feedReducer;
