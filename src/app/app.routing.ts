import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntentsComponent } from './intents/intents.component';
import { NlpComponent } from './nlp/nlp.component';
import { DialogComponent } from './dialog/dialog.component';
import { BlangpageComponent } from './blangpage/blangpage.component';
import { SdataComponent } from './sdata/sdata.component';
import { SdataFormComponent } from './sdata/sdata-form/sdata-form.component';
import { EntityComponent } from './entity/entity.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/intent', pathMatch: 'full' },
  { path: 'intent', component: IntentsComponent, children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: BlangpageComponent },
    ] 
  },
  { path: 'entity', component: EntityComponent, children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: BlangpageComponent },
    //{ path: ':id/edit', component: RecipeEditComponent },
    ] 
  },
  { path: 'response', component: DialogComponent, children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: BlangpageComponent },
    //{ path: ':id/edit', component: RecipeEditComponent },
    ] 
  },
  { path: 'nlp', component: NlpComponent },
  { path: 'sdata', component: SdataComponent },
  { path: 'dc', component: SdataFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class Routing {

}