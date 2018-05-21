import { User, Story } from '../types';

export function userReducer(state = null, action): User {
    if (action.type === 'SET_USER') return action.user;
    if (action.type === 'LOG_OUT') return null;
    return state;
}

export function loadingReducer(state = true, action) {
    if (action.type === 'LOADED') return false;
    return state;
}

export function storiesReducer(state: Story[] = [], action): Story[] {
    if (action.type === 'SET_STORIES') return action.stories;
    if (action.type === 'CREATE_STORY') return [action.story, ...state];
    if (action.type === 'CREATE_COMMENT') return state.map(story => {
        if (story._id !== action._id) return story;
        return { ...story, comments: [...story.comments, action.comment] };
    });
    if (action.type === 'LIKE_STORY') return state.map(story => {
        if (story._id !== action._id) return story;
        return {...story, fans: [action.user, ...story.fans ]};
    });
    if (action.type === 'DISLIKE_STORY') return state.map(story => {
        if (story._id !== action._id) return story;
        return {...story, fans: story.fans.filter(fan => fan._id !== action.idUser) };
    });
    return state;
}
