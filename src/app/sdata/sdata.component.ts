import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SdataService } from './sdata.service';
import { PagerService } from '../pager.service';



import * as _ from 'underscore';

@Component({
  selector: 'app-sdata',
  templateUrl: './sdata.component.html',
  styleUrls: ['./sdata.component.css']
})
export class SdataComponent implements OnInit {

  private subscription: Subscription;

   // array of all items to be paged
    private allItems: any[];
 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];

  constructor(private sdataService: SdataService, private pagerService: PagerService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQueryList();
    
    this.subscription = this.sdataService.queryChanged
      .subscribe(
        () => {
          console.log('Refresh Query List');
          this.getQueryList();
        }
      );
  }

  queries = [];

  getQueryList() {
    this.sdataService.getQueries()
      .subscribe(
        (queries: any[]) => {
          this.queries = queries;
          // set items to json response
          this.allItems = queries;
 
          // initialize to page 1
          this.setPage(1);
        },
        (error) => console.log(error)
      );
  }

  /*downloadData(){
    var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false, 
    showTitle: false
    };
    new Angular2Csv(this.queries, 'Sample Data',options);
    //new Angular2Csv(dummyData, 'My Report',options);
  }*/

  onDeleteItem(id:string) {
    console.log("Delete item for :- " + id);
    this.sdataService.deleteQuery(id).subscribe(
        (response) => {
          console.log(response);
          this.sdataService.queryChanged.next();
        },
        (error) => console.log(error)
      );
  }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
