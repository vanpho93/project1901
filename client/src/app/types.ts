export interface User {
    _id: string;
    name: string;
    email: string;
}

export interface AppState {
    user: User;
    loading: boolean;
    stories: Story[];
    people: People;
}

export interface UserInfo {
    _id: string;
    name: string;
}

export interface Comment {
    _id: string;
    author: UserInfo;
    fans: string[];
}

export interface Story {
    _id: string;
    content: string;
    author: UserInfo;
    fans: UserInfo[];
    comments: Comment[];
}

export interface People {
    friends: UserInfo[];
    incommingRequest: UserInfo[];
    sentRequests: UserInfo[];
    otherUsers: UserInfo[];
}
