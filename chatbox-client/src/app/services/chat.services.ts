import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'
import * as io from 'socket.io-client';

import { MessageContent }  from "./Models/MessageContent"
import { HttpService } from './http.service'
import { map } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'http://localhost:3000';
  private socket;    

    constructor(private http: HttpService) {
         this.socket = io(this.url)
    }

    public sendMessage(message) {
        this.socket.emit('new-message', message);
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });
        });
    }

    public getAllChats():Promise<MessageContent[]>{
        return this.http.toGet<MessageContent[]>(`${this.url}/GetAllChats`).toPromise();
    }

    public saveChats(MessageContent: MessageContent):Promise<number>{
        return  this.http.toPost<number>(`${this.url}/SaveChats`, MessageContent).toPromise();
    }
}
