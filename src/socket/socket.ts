import { io, Socket as SocketType } from 'socket.io-client';
import ApiConstant from '../api/apiConstant';

export class SocketSingleton{
    socket: SocketType;

    constructor() {
        this.socket = io(ApiConstant.BASE_API_URL, {
            query: { token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInBob25lIjoiMDgyMjQyMzI0NiIsImlhdCI6MTY5MTkxMTYyOSwiZXhwIjoxNjkxOTk4MDI5fQ.ekwGdTmW-9B-2MteKJbi6Z__JRA1cVjCQG1AsOkXUrU` },
            secure: true,
          });
        this.socket.on('connect', () => {
          console.log('Connected to server admin page!.');
        });
    }

    getSocket() {
        return this.socket;
    }
}

const socketObj = new SocketSingleton()
export const Socket = socketObj.getSocket()