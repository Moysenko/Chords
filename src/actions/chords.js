import {schema, normalize} from 'normalizr';
import {SET_CHORD_LIST} from '../reducers/chords';

const chordSchema = new schema.Entity('chord');

function setChords(data) {
    const {result, entities} = normalize(data, [chordSchema]);
    console.log("Result: ", result, "; Entities: ", entities);
    return {
        type: SET_CHORD_LIST,
        payload: {
            chordList: result,
            chords: entities.chord,
        },
    };
}

export function fetchChords() {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8000/api/chords");
        const data = await response.json();
        console.log("Fetched chords: ", data);
        dispatch(setChords(data));
    };
}
