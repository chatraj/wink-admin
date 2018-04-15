import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})

export class EntityFormComponent implements OnInit {

  entityForm: FormGroup;

  formData = {entityType:"", repository:"", apiurl:""};

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EntityFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.formData = data;
     }

  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.entityForm = this.fb.group({
      entityType: [this.formData.entityType, Validators.nullValidator],
      repository: [this.formData.repository, Validators.nullValidator],
      apiurl: [this.formData.apiurl]
    });  
  }

  save() {
    this.dialogRef.close(this.entityForm.value);
  }

  close() {
      this.dialogRef.close();
  }

}
