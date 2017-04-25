import { Component, OnInit,trigger } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
  	firebase.initializeApp({
  		apiKey: "AIzaSyDYdx9idJOAN48c8PR5KnRLBt4peSJdXjE",
    	authDomain: "recipe-book-e3fa8.firebaseapp.com"

  	});

  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
