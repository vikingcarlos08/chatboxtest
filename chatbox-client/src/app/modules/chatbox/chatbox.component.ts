import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/export'
import { MessageContent } from '../../services/Models/MessageContent'

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

message: string;
messageList: string[] = [];
messagePast: MessageContent[] = [];
messageCon = new MessageContent();

  constructor(
  		private _chatService: ChatService,
  			
  	) { }

  ngOnInit() {
      this.getPastMessage();
  		this.getMessage();
      this.scrollToBottom();
  }
  // calculate(base: number, upkeep: number, level: number){
  //   let imp = base + ((base + ((300 * upkeep) / 7)) * (Math.pow(1.007, level) - 1));
  //   //imp.toFixed(2);
  //   console.log(imp.toFixed(1));
  // }
  async getPastMessage(){
    this.messagePast = await this._chatService.getAllChats();
  }

  scrollToBottom(){
    let display = $('#chatmessages');
    display.animate({ scrollTop: display[0].scrollHeight }, 'fast');
  }

  getMessage(){
  	this._chatService.getMessages()
  		.subscribe((message: string) => {
	        this.messageList.push(message);
	      });
      this.scrollToBottom();
  }
  
  sendMessage(){
    this.messageCon.message = this.message;
    this.messageCon.user = "user" + this.messagePast.length;
    this.messageCon.DateSent = new Date();
  	this._chatService.sendMessage(this.message);
    this._chatService.saveChats(this.messageCon);
  	this.message = "";
  }

}
