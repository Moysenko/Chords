import {schema, normalize} from 'normalizr';
import {SET_SONG_LIST, SET_SONG_LIST_MORE, SET_SONG, SET_ERROR} from '../reducers/songs';

const userSchema = new schema.Entity('user');
const songSchema = new schema.Entity('song', {
    user: userSchema,
});

function setSongs(data, count) {
    const {result, entities} = normalize(data, [songSchema]);

    return {
        type: SET_SONG_LIST,
        payload: {
            count,
            songList: result,
            songs: entities.song,
            users: entities.user,
        },
    };
}

function setSongsMore(data) {
    const {result, entities} = normalize(data, [songSchema]);

    return {
        type: SET_SONG_LIST_MORE,
        payload: {
            songList: result,
            songs: entities.song,
            users: entities.user,
        },
    };
}

function setSong(payload) {
    return {
        type: SET_SONG,
        payload,
    };
}

function setIsError() {
    return {
        type: SET_ERROR,
    };
}

export function fetchSongs(query_line="") {
    if (query_line) {
        query_line = "?" + query_line;
    }
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8000/api/songs${query_line}`);
            const data = await response.json();
            console.log("Fetched songs: ", data);
            dispatch(setSongs(data.results, data.count));
        } catch {
            dispatch(setIsError());
        }
    };
}

export function fetchSongsMore(query_line="") {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const page = state.songs.page;
            const response = await fetch(
                `http://localhost:8000/api/songs?page=${page + 1}&${query_line}`
            );
            const data = await response.json();
            dispatch(setSongsMore(data.results));
        } catch {
            dispatch(setIsError());
        }
    };
}

export function fetchSong(songId) {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8000/api/songs/${songId}`);
            const song = await response.json();

            dispatch(setSong(song));
        } catch {
            dispatch(setIsError());
        }
    };
}

