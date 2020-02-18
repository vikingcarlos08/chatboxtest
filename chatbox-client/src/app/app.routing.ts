import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { ChatboxComponent } from './modules/chatbox/chatbox.component'

const appRoutes = [
	{ path: 'chatbox', component: ChatboxComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }