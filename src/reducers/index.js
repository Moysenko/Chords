import { combineReducers } from 'redux';
import { songs } from './songs';
import { chords } from  './chords'

export const reducers = combineReducers({ songs, chords});
