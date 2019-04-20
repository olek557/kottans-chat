/* global io */

export class Socket {
    constructor() {
        this.socket = io();
    }

    onSetUsername = handler => {
        this.socket.on('set username', handler);
    };
    onUserJoined = handler => {
        this.socket.on('user joined', handler);
    };
}   
