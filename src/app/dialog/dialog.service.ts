import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from '../app.setting';

@Injectable()
export class DialogService {

  dialogChanged = new Subject();

  constructor(private http: Http) {}

  saveDialog(data) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(AppSetting.API_ENDPOINT + 'dialog',
      data,
      {headers: headers});
  }

  getDialog() {
    return this.http.get(AppSetting.API_ENDPOINT + 'dialog')
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

  getEntity() {
    return this.http.get(AppSetting.API_ENDPOINT + 'entity')
      .map(
        (response: Response) => {
          const data = response.json();
          const entityData = [];
          for(var i=0; i<data.length; i++) {
            entityData.push({entityType:data[i].entityType})
          }
          return entityData;
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
