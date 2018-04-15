import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { SdataService } from '../sdata.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sdata-form',
  templateUrl: './sdata-form.component.html',
  styleUrls: ['./sdata-form.component.css']
})
export class SdataFormComponent implements OnInit {
  
  private subscription: Subscription;
  queryForm: FormGroup;
  showSaveButton: boolean;

  constructor(private sdataService: SdataService, private router: Router,
              private route: ActivatedRoute, public fb: FormBuilder) {
                  this.showSaveButton = false;
                  //this.startDictation();
               }

  ngOnInit() {
      this.initForm();
  }

  private initForm(){
    this.queryForm = this.fb.group({
      query: ["", Validators.required]
    });
  }

  doSave(){
  //console.log(event);
      this.sdataService.addQuery(this.queryForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.queryForm.patchValue({
                query: ""
            });
          this.showSaveButton = false;
        },
        (error) => console.log(error)
      );
  }

  startDictation(): void {
      //this.showSaveButton = false;

      this.sdataService.record()
          .subscribe(
          //listener
          (value) => {
              //this.speechData = value;
              console.log(value);
              this.queryForm.patchValue({
                query: value
              });
              this.showSaveButton = true;
          },
          //errror
          (err) => {
              console.log(err);
              if (err.error == "no-speech") {
                  console.log("--restatring service--");
                  this.startDictation();
              }
          },
          //completion
          () => {
              this.showSaveButton = false;
              console.log("--complete--");
              this.startDictation();
          });
  }

  ngOnDestroy() {
        this.sdataService.DestroySpeechObject();
    }

}
