import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private service:SharedService) { }

  artistList: any[] = []

  ngOnInit(): void {
    this.refreshArtistList();
  }

  refreshArtistList(){
    this.service.getartistList().subscribe(data =>{
      this.artistList = data;
    });
  }
}
