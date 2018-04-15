import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from '../app.setting';

@Injectable()
export class IntentService {

  intentChanged = new Subject();

  constructor(private http: Http) {}

  addIntent(intent) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post(AppSetting.API_ENDPOINT + 'intent',
      intent,
      {headers: headers});
  }

  updateIntent(intent, id:String) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put(AppSetting.API_ENDPOINT + 'intent/' + id,
      intent,
      {headers: headers});
  }

  updateResponse(intent, id:String) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    console.log('response fo intent ' + id + ' is being updated');
    return this.http.put(AppSetting.API_ENDPOINT + 'intent/response/' + id,
      intent,
      {headers: headers});
  }

  deleteIntent(id:string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.delete(AppSetting.API_ENDPOINT + 'intent/' + id,
            {headers: headers});
  }

  getIntents() {
    return this.http.get(AppSetting.API_ENDPOINT + 'intents')
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

  getIntentResponse(title:string) {
    console.log('Getting Intent Response');
    console.log(title);
    return this.http.get(AppSetting.API_ENDPOINT + 'intent/response/'+title)
      .map(
        (response: Response) => {
          //console.log(response.json());
          const data = response.json();
          console.log(data);
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  saveIntent(entity) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post(AppSetting.API_ENDPOINT + 'intent',
      entity,
      {headers: headers});
  }

  getIntent() {
    return this.http.get(AppSetting.API_ENDPOINT + 'intent')
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
