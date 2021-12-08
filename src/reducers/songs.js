export const SET_SONG_LIST = 'SET_SONG_LIST';
export const SET_SONG = 'SET_SONG';
export const SET_ERROR = 'SET_ERROR';
export const SET_SONG_LIST_MORE = 'SET_SONG_LIST_MORE';

const initialState = {
    songList: [],
    songs: {},
    isError: false,
    page: 0,
    count: 0,
};

export function songs(state = initialState, action) {
    switch (action.type) {
        case SET_SONG_LIST: {
            return {
                count: action.payload.count,
                songList: action.payload.songList,
                songs: action.payload.songs,
                isError: false,
                page: 1,
            };
        }

        case SET_SONG_LIST_MORE: {
            return {
                ...state,
                songList: [...state.songList, ...action.payload.songList],
                songs: { ...state.songs, ...action.payload.songs },
                isError: false,
                page: state.page + 1,
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
                ...state,
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
