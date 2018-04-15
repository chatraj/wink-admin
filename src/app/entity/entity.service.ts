import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from '../app.setting';

@Injectable()
export class EntityService {

  entityChanged = new Subject();

  constructor(private http: Http) {}

  saveEntity(entity) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post(AppSetting.API_ENDPOINT + 'entity',
      entity,
      {headers: headers});
  }

  getEntity() {
    return this.http.get(AppSetting.API_ENDPOINT + 'entity')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getRemoteEntity(url) {
    return this.http.get(url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  reloadTraining() {
    return this.http.get(AppSetting.API_ENDPOINT + 'reload')
      .map((response: Response) => response.json());
  }

}
