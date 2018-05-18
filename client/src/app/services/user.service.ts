import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { decode } from 'jsonwebtoken';
import { AppState } from '../types';
import { RequestService } from './request.service';

const SERVER_URL = 'http://localhost:3000';

@Injectable()

export class UserService {
    constructor(
        private router: Router,
        private store: Store<AppState>,
        private request: RequestService
    ) {}

    signIn(email: string, password: string) {
        return this.request.post('/user/signin', { email, password })
        .then(resJson => {
            this.store.dispatch({ type: 'SET_USER', user: resJson.user });
            this.router.navigate(['/profile']);
            localStorage.setItem('token', resJson.user.token);
        })
        .catch(error => alert(error.message));
    }

    verifyToken(): boolean {
        try {
            const token = localStorage.getItem('token');
            if (!token) return false;
            const decoded: any = decode(token);
            if (!decode) return false;
            if (decoded.exp * 1000 < Date.now()) return false;
            return true;
        } catch (error) {
            return false;
        }
    }

    check() {
        if (!this.verifyToken()) {
            console.log('ko dung');
            localStorage.removeItem('token');
            return this.store.dispatch({ type: 'LOADED' });
        }
        return this.request.get('/user/check')
        .then(resJson => {
            this.store.dispatch({ type: 'SET_USER', user: resJson.user });
            localStorage.setItem('token', resJson.user.token);
        })
        .catch(error => localStorage.removeItem('token'))
        .then(() => this.store.dispatch({ type: 'LOADED' }));
    }

    logOut() {
        this.store.dispatch({ type: 'LOG_OUT' });
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
    }
}
