import { io, Socket as SocketType } from 'socket.io-client';
import ApiConstant from '../api/apiConstant';

export class SocketSingleton{
    socket: SocketType;

    constructor() {
        this.socket = io(ApiConstant.BASE_API_URL);
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