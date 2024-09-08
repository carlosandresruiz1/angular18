import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  artistList: any[] = [];
  randomLyrics: { lyrics: string, song: string } = { lyrics: '', song: '' };
  randomSongs: any[] = []; // Add a property to store random songs with album details
  randomAlbums: any[] = []; // Add a property to store random albums

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshArtistList();
    this.fetchRandomLyrics();
    this.fetchRandomSongsWithAlbums(); // Ensure this method is defined
    this.fetchRandomAlbums(); // Fetch random albums
  }

  refreshArtistList(): void {
    this.sharedService.getartistList().subscribe(data => {
      this.artistList = data;
    });
  }

  fetchRandomLyrics(): void {
    this.sharedService.getSongs().subscribe(
      data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomSong = data[randomIndex];
        this.randomLyrics = {
          lyrics: randomSong.song_lyrics_e,
          song: randomSong.song_name
        };
      },
      error => console.error('Error fetching songs', error)
    );
  }

  fetchRandomSongsWithAlbums(): void {
    this.sharedService.getSongs().subscribe(
      songs => {
        const shuffledSongs = songs.sort(() => 0.5 - Math.random()).slice(0, 3);
        shuffledSongs.forEach(song => {
          console.log('Song Data:', song); // Log song data to check album_id
          if (song.album_id) {
            this.sharedService.getAlbum(song.album_id).subscribe(
              (album: any) => { // Specify the type of 'album' as 'any'
                const combinedData: any = {
                  song_name: song.song_name,
                  album_name: album.album_name,
                  album_image: album.album_image
                };
                console.log('Combined Data:', combinedData); // Log combined data
                this.randomSongs.push(combinedData);
              },
              error => console.error('Error fetching album', error)
            );
          } else {
            console.error('Album ID is undefined for song:', song);
          }
        });
      },
      error => console.error('Error fetching songs', error)
    );
  }

  fetchRandomAlbums(): void {
    this.sharedService.getAlbums().subscribe(
      albums => {
        this.randomAlbums = albums.sort(() => 0.5 - Math.random()).slice(0, 3);
        console.log('Random Albums:', this.randomAlbums); // Log random albums
      },
      error => console.error('Error fetching albums', error)
    );
  }
}
