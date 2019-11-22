import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getAllURL = 'http://localhost:3000/api/';
  private addNewPlayer = 'http://localhost:3000/api/addplayer';
  constructor(private httpClient: HttpClient) { }

  public getDetails() {
    return this.httpClient.get(this.getAllURL);
  }
  public getOnePlayerDetails(id: any) {
    return this.httpClient.get(this.getAllURL + id );
  }
  public addPlayer(player) {
    return this.httpClient.post<any>(this.addNewPlayer, player);
  }
}
