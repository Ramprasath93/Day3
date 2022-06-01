import { Component } from '@angular/core';
import {Book} from './book'
import {Books} from './serverbook'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book-app';
  booklists:Book[]=Books;

  //Method declaration

  onGetAuthorDetail(){

    
  }

}
