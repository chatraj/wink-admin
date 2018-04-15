import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from '../app.setting';

@Injectable()
export class NlpService {

  nlpChanged = new Subject();

  constructor(private http: Http) {}


  predict(query:any) {
    const body = JSON.stringify(query);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(AppSetting.API_ENDPOINT + 'predict/', body, {headers:headers})
      .map(
        (response: Response) => {
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

  compileResponse(data:any){
    console.log('In compile response');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var entity = this.findEntity(data.entity);    
    console.log(entity);
    var userContext = {intent:"undefind", entityType:"none", entityValue:""};
    if (entity != null){
      userContext = {intent:data.intent, entityType:entity.entityType, entityValue:entity.value}
    }else{
      userContext = {intent:data.intent, entityType:"none", entityValue:""}
    }

    return this.http.post(AppSetting.API_ENDPOINT + 'dialog/response', userContext, {headers:headers})
        .map(
          (response: Response) => {
            const data = response.json();
            console.log(data);
            console.log("Entity Value " + userContext.entityValue);
            data.response = data.response.replace("@entity", userContext.entityValue);
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

  findEntity(data:any){
      for(var i=0; i<data.length; i++) {
        if (data[i].entityType){
          console.log(data[i].entityType);
          return data[i]; 
        }
    }
    return null;
  }
}
