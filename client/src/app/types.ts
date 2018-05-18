export interface User {
    name: string;
    email: string;
}

export interface AppState {
    user: User;
    loading: boolean;
}
