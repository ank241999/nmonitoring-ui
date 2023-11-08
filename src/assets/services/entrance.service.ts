import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEntrance } from '../interfaces/ientrance';
import { environment } from '../../environments/environment';

@Injectable()
export class EntranceService {
  constructor(private http: HttpClient) { }

  public getEntrance(): Observable<IEntrance[]> {
    return this.http.get(environment.apiGatewayUrl + '/entrance') as Observable<IEntrance[]>;
  }

  public getEntranceByLocationId(locationId: number): Observable<IEntrance[]> {
    return this.http.get(environment.apiGatewayUrl + '/entrance?locationId=' + locationId) as Observable<IEntrance[]>;
  }

  public getEntranceByIds(id: number, locationId: number): Observable<IEntrance> {
    return this.http.get(environment.apiGatewayUrl + '/entrance?id=' + id + '&locationId=' + locationId) as Observable<IEntrance>;
  }

  public addEntrance(entrance: IEntrance): Observable<IEntrance> {
    return this.http.post<IEntrance>(environment.apiGatewayUrl + '/entrance', entrance);
  }

  public updateEntrance(entrance: IEntrance[]): Observable<IEntrance> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };

    return this.http.put<IEntrance>(environment.apiGatewayUrl + '/entrance', entrance, httpOptions);
}

  public deleteEntrance(ids: number[]): Observable<IEntrance> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<IEntrance>(environment.apiGatewayUrl + '/entrance/delete/', ids, httpOptions);
  }
}
