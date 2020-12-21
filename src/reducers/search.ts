import { SearchAction } from '../defaults/types';

const searcherReducer = (state = '', action: SearchAction): string => {
  switch (action.type) {
    case 'SEARCHING':
      return action.payload
    default:
      return state;
  }
}

export default searcherReducer;