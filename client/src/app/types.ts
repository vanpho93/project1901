export interface User {
    _id: string;
    name: string;
    email: string;
}

export interface AppState {
    user: User;
    loading: boolean;
    stories: Story[];
}

export interface UserInfo {
    _id: string;
    name: string;
}

export interface Comment {
    _id: string;
    author: UserInfo;
}

export interface Story {
    _id: string;
    content: string;
    author: UserInfo;
    fans: UserInfo[];
    comments: Comment[];
}
