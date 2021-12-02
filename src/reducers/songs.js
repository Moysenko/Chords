export const SET_SONG_LIST = 'SET_SONG_LIST';
export const SET_SONG = 'SET_SONG';
export const SET_ERROR = 'SET_ERROR';

const initialState = {
    songList: [],
    songs: {},
    isError: false,
};

export function songs(state = initialState, action) {
    switch (action.type) {
        case SET_SONG_LIST: {
            return {
                songList: action.payload.songList,
                songs: action.payload.songs,
                isError: false,
            };
        }

        case SET_ERROR: {
            return {
                ...state,
                isError: true,
            };
        }

        case SET_SONG: {
            const song = action.payload;
            let songList = state.songList;

            if (!songList.includes(song.id)) {
                songList.push(song.id);
            }

            return {
                songList,
                songs: {
                    ...state.songs,
                    [song.id]: song,
                },
                isError: false,
            };
        }

        default: {
            return state;
        }
    }
}
