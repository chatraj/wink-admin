import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { DialogService } from './dialog.service';
import { Router, ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

declare var $:any;

export class Entity {
  constructor(public entityType: string) { }
}

@Component({
  selector: 'app-response',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})


export class DialogComponent implements OnInit, AfterViewInit {
  
  private subscription: Subscription;

  dialogForm: FormGroup;
  filteredEntities: Observable<any[]>;


  dFlag = false;
  rFlag = false;
  editMode = false;
  editedItem;
  dialogItem;


  dialogs = [];
  entities: Entity[] = [];
  filteredItems = [];

  constructor(private dialogService: DialogService, private router: Router,
              private route: ActivatedRoute, public fb: FormBuilder) {
    //this.filteredEntities = this.entityCtrl.valueChanges
  }

  ngOnInit() {
    //loading entity data
    this.onGet();
    this.initForm();

    this.subscription = this.dialogService.dialogChanged
      .subscribe(
        (m) => {
          console.log('Refresh after' + m);
          this.onSave();
        }
      );   
  }

  private initForm(){
    this.dialogForm = this.fb.group({
      entityType: ["none", Validators.nullValidator],
      response: ["", Validators.nullValidator]
    });  

    this.filteredEntities = this.dialogForm.controls['entityType'].valueChanges
      .pipe(
        startWith(''),
        map(entity => entity ? this.filterEntity(this.dialogForm.controls['entityType'].value) : this.entities.slice())
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

  
  onGet() {
    this.dialogService.getDialog()
      .subscribe(
        (dialogs: any[]) => this.dialogs = dialogs,
        (error) => console.log(error)
      );
    this.dialogService.getEntity()
      .subscribe(
        (entities: any[]) => {
          this.entities = entities;
        },
        (error) => console.log(error)
      );
  }

  filterEntity(entityType: string) {
    return this.entities.filter(entity =>
      entity.entityType.toLowerCase().indexOf(entityType.toLowerCase()) === 0);
  }
  

  onEditItem(item) {
    this.editMode = true;
    this.rFlag = false;
    this.editedItem = item;
    this.dFlag = true;
  }

  onEditDialog(item) {
    this.editMode = true;
    this.dialogItem = item;
    console.log({"entityType":item.entityType, "response":item.response});
    this.dialogForm.patchValue({"entityType":item.entityType, "response":item.response});
    //this.entityCtrl.patchValue(item.entityType);
    //this.responseCtrl.patchValue(item.response);
  }

  onAddItem() {
    this.editMode = false;
    this.rFlag = false;
    this.editedItem = {"intent":"","dialog":[]};
    this.dFlag = true;
  }

  manageDialog(item) {
    this.editMode = false;
    this.dFlag = false;
    this.editedItem = item;
    this.dialogItem = {"entityType":"", "response":""}
    this.rFlag = true;
    this.dialogForm.patchValue({"entityType":"", "response":""});
    //this.entityCtrl.patchValue("");
    //this.responseCtrl.patchValue("");    
  }

  onSave() {
      if (this.editMode == false){
        this.dialogs.push(this.editedItem);
      }

      this.dialogService.saveDialog(this.dialogs)
      .subscribe(
        (response) => {
          console.log(response);
          this.dFlag = false;
        },
        (error) => console.log(error)
      );
  }

  onSaveDialog() {
      this.dialogItem.entityType = this.dialogForm.controls['entityType'].value;
      this.dialogItem.response = this.dialogForm.controls['response'].value;;    
      if (this.editMode == false){
        this.editedItem.dialog.push(this.dialogItem);
      }
      this.saveDialogFile();
  }

  onDeleteDialog(index){
    this.dialogs.splice(index, 1);
    this.saveDialogFile();
    this.dFlag = false;
    this.rFlag = false;
  }

  onDeleteResponse(index){
    this.editedItem.dialog.splice(index, 1);
    this.saveDialogFile();  
  }

  saveDialogFile(){
    this.dialogService.saveDialog(this.dialogs)
      .subscribe(
        (response) => {
          console.log(response);
          this.dialogItem = {"entityType":"", "response":""}
          this.dialogForm.reset();
          this.editMode = false;
        },
        (error) => console.log(error)
      );
  }

  reloadTraining() {
    this.dialogService.reloadTraining()
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }

}
