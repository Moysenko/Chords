import { schema, normalize } from 'normalizr';
import { SET_SONG_LIST, SET_SONG, SET_ERROR } from '../reducers/songs';

const userSchema = new schema.Entity('user');
const songSchema = new schema.Entity('song', {
    user: userSchema,
});

function setSongs(data) {
    const { result, entities } = normalize(data, [songSchema]);

    return {
        type: SET_SONG_LIST,
        payload: {
            songList: result,
            songs: entities.song,
            users: entities.user,
        },
    };
}

function setIsError() {
    return {
        type: SET_ERROR,
    };
}

export function fetchSongs() {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3000/songs');
            const data = await response.json();
            dispatch(setSongs(data));
        } catch {
            dispatch(setIsError());
        }
    };
}

export function fetchSong(songId) {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3000/songs/${songId}`);
            const song = await response.json();
            document.title = song.singer;

            dispatch(setSong(song));
        } catch {
            dispatch(setIsError());
        }
    };
}

export function setSong(payload) {
    return {
        type: SET_SONG,
        payload,
    };
}
