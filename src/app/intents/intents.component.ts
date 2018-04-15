import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IntentService } from './intent.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.css']
})
export class IntentsComponent implements OnInit, AfterViewInit {

  private subscription: Subscription;

  iFlag = false;
  qFlag = false;
  editMode = false;
  editedItem;
  queryItem;

  constructor(private intentService: IntentService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //loading users data
    this.onGet();

    this.subscription = this.intentService.intentChanged
      .subscribe(
        (m) => {
          console.log('Refresh after' + m);
          this.onGet();
        }
      );
  }

  ngAfterViewInit(){
      console.log('In JQuery');
      $(document).ready(function(){
        console.log('In Document Ready');
        $('#myTable tbody tr').click(function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
      });
  }

  intents = [];

  onGet() {
    this.intentService.getIntent()
      .subscribe(
        (intents: any[]) => this.intents = intents,
        (error) => console.log(error)
      );
  }

  onEditItem(item) {
    this.editMode = true;
    this.qFlag = false;
    this.editedItem = item;
    this.iFlag = true;
  }

  onQueryEdit(item) {
    this.editMode = true;
    this.queryItem = item;
  }

  onAddItem() {
    this.editMode = false;
    this.qFlag = false;
    this.editedItem = {"title":"", "purpose":"", "query":[]};
    this.iFlag = true;
  }

  manageQuery(item) {
    this.editMode = false;
    this.iFlag = false;
    this.editedItem = item;
    this.queryItem = {"text":""}
    this.qFlag = true;
  }

  onSave() {
      if (this.editMode == false){
        this.intents.push(this.editedItem);
      }
      this.saveIntentFile();
      this.iFlag = false;
  }

  onSaveQuery() {
      if (this.editMode == false){
        this.editedItem.query.push(this.queryItem);
      }
      this.saveIntentFile();
  }

  onDeleteIntent(index){
    this.intents.splice(index, 1);
    this.saveIntentFile();
    this.iFlag = false;
    this.qFlag = false;
  }

  onDeleteIntentQuery(index){
    this.editedItem.query.splice(index, 1);
    this.saveIntentFile();  
  }

  saveIntentFile(){
      this.intentService.saveIntent(this.intents)
      .subscribe(
        (response) => {
          console.log(response);
          this.queryItem = {"text":""};
          this.editMode = false;
        },
        (error) => console.log(error)
      );
  }

  reloadTraining() {
    this.intentService.reloadTraining()
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
}