import { DataStorageService } from './shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private dataStorageService : DataStorageService){

  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDp4pY2Pt_F1HbZrizeFXu34DXh1jZyqZc",
      authDomain: "recipebook-41046.firebaseapp.com",
      databaseURL: "https://recipebook-41046.firebaseio.com",
      projectId: "recipebook-41046",
      storageBucket: "recipebook-41046.appspot.com",
      messagingSenderId: "48579265855"
    });

    this.dataStorageService.getRecipes();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
