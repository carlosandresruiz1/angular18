import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = " http://127.0.0.1:8000/api";
readonly PhotoUrl = " http://127.0.0.1:8000/api/savefile";
  constructor(private http:HttpClient) { }


  getSongList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/song/');
  }

  addSong(val:any){
    return this.http.post(this.APIUrl + '/song/', val);
  }

  updateSong(val:any){
    return this.http.put(this.APIUrl + '/song/', val);
  }

  deleteSong(val:any){
    return this.http.delete(this.APIUrl + '/song/' + val);
  }

  getartistList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/artist/');
  }

  addArtist(val:any){
    return this.http.post(this.APIUrl + '/artist/', val);
  }

  updateArtist(val:any){
    return this.http.put(this.APIUrl + '/artist/', val);
  }

  deleteArtist(val:any){
    return this.http.delete(this.APIUrl + '/artist/' + val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/savefile', val);
  }
  
  getAlbumList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/album/');
  }

  addAlbum(val:any){
    return this.http.post(this.APIUrl + '/album/', val);
  }

  updateAlbum(val:any){
    return this.http.put(this.APIUrl + '/album/', val);
  }

  deleteAlbum(val:any){
    return this.http.delete(this.APIUrl + '/album/' + val);
  }

  getSongs():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/song/');
  }
  getAlbum(album_id: number): Observable<any> {
    console.log(`Fetching album with ID: ${album_id}`); // Log the album ID being fetched
    return this.http.get<any>(`${this.APIUrl}/album/${album_id}`);
  }
 getAlbums():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/album/');
  }

}

