import { combineReducers } from 'redux';
import photosReducer from './photos';
import categoryReducer from './category';
import imageModalReducer from './imageModal';
import backgroundReducer from './background';

const rootReducer = combineReducers({
  photos: photosReducer,
  category: categoryReducer,
  imageModal: imageModalReducer,
  background: backgroundReducer,
});

export default rootReducer;
