import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { EntityService } from './entity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EntityFormComponent } from './entity-form/entity-form.component';
import { DialogComponent } from '../dialog/dialog.component';

declare var $:any;

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit, AfterViewInit {

  private subscription: Subscription;

  eFlag = false;
  iFlag = false;
  editMode = false;
  editedItem;
  inputItem;
  remoteEntity=[];
  
  constructor(private entityService: EntityService, private router: Router,
              private route: ActivatedRoute, private dialog: MatDialog) { }

 ngOnInit() {
    //loading entity data
    this.onGet();

    this.subscription = this.entityService.entityChanged
      .subscribe(
        (m) => {
          console.log('Refresh after' + m);
          this.onSave();
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

  entities = [];

  onGet() {
    this.entityService.getEntity()
      .subscribe(
        (entities: any[]) => this.entities = entities,
        (error) => console.log(error)
      );
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    if (this.editMode == true)
      dialogConfig.data = {entityType:this.editedItem.entityType, repository:this.editedItem.repository, apiurl:this.editedItem.apiurl};
    else
      dialogConfig.data = {entityType:"", repository:"", apiurl:""};

    const dialogRef = this.dialog.open(EntityFormComponent, dialogConfig);

    //this.dialog.open(EntityFormComponent, dialogConfig);

     dialogRef.afterClosed().subscribe(
      data => {
          if (data){
            this.editedItem.entityType = data.entityType;
            this.editedItem.repository = data.repository;
            this.editedItem.apiurl = data.apiurl;
            this.onSave();
          }else{
            console.log('No Value Return');
          }
        }
    );   

  }

  onEditItem(item) {
    this.editMode = true;
    //this.iFlag = false;
    this.editedItem = item;
    //this.eFlag = true;
    this.openDialog();
  }

  onEditInput(item) {
    this.editMode = true;
    this.inputItem = item;
  }

  onAddItem() {
    this.editMode = false;
    //this.iFlag = false;
    this.editedItem = {entityType:"", repository:"", apiurl:"", input:[]};
    //this.eFlag = true;
    this.openDialog();
    
  }

  manageInput(item) {
    this.editMode = false;
    this.eFlag = false;
    this.editedItem = item;
    this.inputItem = {"text":"","id":"","value":""}
    this.iFlag = true;
    console.log(this.editedItem.repository + ' - ' + this.editedItem.apiurl);
    if (this.editedItem.repository == 'remote'){
      this.entityService.getRemoteEntity(this.editedItem.apiurl)
      .subscribe(
        (entities: any[]) => this.remoteEntity = entities,
        (error) => console.log(error)
      );
    }
  }

  onSave() {
      if (this.editMode == false){
        this.entities.push(this.editedItem);
      }
      this.saveEntityFile();
      this.eFlag = false;     
  }

  onSaveInput() {
      if (this.editMode == false){
        this.editedItem.input.push(this.inputItem);
      }
      this.saveEntityFile();
  }

  onDeleteEntity(index){
    this.entities.splice(index, 1);
    this.saveEntityFile();
    this.eFlag = false;
    this.iFlag = false;
  }

  onDeleteEntityInput(index){
    this.editedItem.input.splice(index, 1);
    this.saveEntityFile();  
  }

  saveEntityFile(){
    this.entityService.saveEntity(this.entities)
      .subscribe(
        (response) => {
          console.log(response);
          this.inputItem = {"text":"","id":"","value":""};
          this.editMode = false;
        },
        (error) => console.log(error)
      );
  }

  reloadTraining() {
    this.entityService.reloadTraining()
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }

}
