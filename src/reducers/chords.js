export const SET_CHORD_LIST = 'SET_CHORD_LIST';

const initialState = {
    chords: {},
    chordList: []
}

export function chords(state = initialState, action) {
    switch (action.type) {
        case SET_CHORD_LIST: {
            return {
                chordList: action.payload.chordList,
                chords: action.payload.chords,
            }
        }

        default: {
            return state;
        }
    }
}