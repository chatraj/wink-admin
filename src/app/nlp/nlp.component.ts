import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Subscription } from 'rxjs/Subscription';
import { NlpService } from './nlp.service';
import { IntentService } from '../intents/intent.service';

declare var $:any;

@Component({
  selector: 'app-nlp',
  templateUrl: './nlp.component.html',
  styleUrls: ['./nlp.component.css']
})
export class NlpComponent implements OnInit, AfterViewInit{

  private subscription: Subscription;
  chatForm: FormGroup;

  constructor(private nlpService: NlpService, private intentService: IntentService, public fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();  
    this.subscription = this.nlpService.nlpChanged
      .subscribe(
        () => {
          console.log('Refresh after deletion');
        }
      );
  }
//result = {'intent':'', 'response':''};
intentOutput = '';
uintent = 0;
outMessages  = [{"cls": "F", "txt": "Welcome to chat bot"}] ; 
resOutput = '';

ngAfterViewInit(){
      console.log('In JQuery');
      var mydiv = $("mychat");
      mydiv.scrollTop(mydiv.prop("scrollHeight"));
  }

scrolltoTop(){
      var mydiv = document.getElementById("mychat");
      //mydiv.scrollTop(mydiv.prop("scrollHeight"));
      //alert(mydiv.scrollHeight);
      mydiv.scrollTop = mydiv.scrollHeight;
}

private initForm(){
    this.chatForm = this.fb.group({
      query: ["", Validators.required]
    });
  }

predictQuery() {
    var str = this.chatForm.value.query;
    this.setOutputText(str, 'S');
    this.nlpService.predict({query:str})
      .subscribe(
        (result) => {
          this.intentOutput = result.intent;
          this.resOutput = JSON.stringify(result, undefined, 2);
          if (this.intentOutput != 'unknown'){
            this.uintent = 0;
            //this.setOutputText(this.intentOutput, 'F');
            this.nlpService.compileResponse(result).subscribe(
                (res) => {
                  this.setOutputText(res.response, 'F');
                },
                (error) => console.log(error)
              );
          }else{
            if (this.uintent > 0)
              this.setOutputText("Sorry, we couln't answer your query, our support staff will get back to you", 'F');
            else {
              this.setOutputText("We are unable to understand your, please clarify your ask", 'F');
              this.uintent ++;
            }
          }
        },
        (error) => console.log(error)
      );
      this.chatForm.setValue({
          query: ""
      });
  }

setOutputText(str:string, rtype:string){
  this.outMessages.push({"cls": rtype, "txt": str});
  setTimeout(this.scrolltoTop(), 1000);
  //this.scrolltoTop();
}

eventHandler(keycode:number, str:string){
  //alert(keycode);
  if (keycode == 13){
    this.predictQuery();
  }
}

}
