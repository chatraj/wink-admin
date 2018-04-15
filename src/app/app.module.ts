import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatInputModule, MatButtonModule, MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { Routing } from './app.routing';

import {PagerService} from './pager.service';

import { BlangpageComponent } from './blangpage/blangpage.component';


// Intent
import { IntentService } from './intents/intent.service';
import { IntentsComponent } from './intents/intents.component';

// NLP
import { NlpComponent } from './nlp/nlp.component';
import { NlpService } from './nlp/nlp.service';

// Response
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';

// SData
import { SdataComponent } from './sdata/sdata.component';
import { SdataFormComponent } from './sdata/sdata-form/sdata-form.component';
import { SdataService } from './sdata/sdata.service';

// Entity
import { EntityService } from './entity/entity.service';
import { EntityComponent } from './entity/entity.component';
import { EntityFormComponent } from './entity/entity-form/entity-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntentsComponent,
    NlpComponent,
    BlangpageComponent,
    DialogComponent,
    SdataComponent,
    SdataFormComponent,
    EntityComponent,
    EntityFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  entryComponents: [
    EntityFormComponent
  ],
  providers: [IntentService, EntityService, DialogService, NlpService, SdataService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
