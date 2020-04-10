import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-works-details',
  templateUrl: './works-details.component.html',
  styleUrls: ['./works-details.component.css']
})
export class WorksDetailsComponent implements OnInit {

  urlKey = 'Default';
  pageHeader : any;
  pageHeaderMapping = new Map();

  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute) {
    this.intializePageHeaderMapping();
      this.route.params.subscribe(params => {
        this.urlKey = params['pagename'];
    });
    this.pageHeader=this.pageHeaderMapping[this.urlKey];
  }
  
  navigateToWork(id:any){
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  intializePageHeaderMapping(){
    this.pageHeaderMapping['wolf']='Wolf Of Wall Street';
    this.pageHeaderMapping['iitkgp']='ALS Treatment';
    this.pageHeaderMapping['morganstanley']= 'Morgan Stanley';
    this.pageHeaderMapping['panda'] = 'The Panda Express';
    this.pageHeaderMapping['marketwatch'] = 'Market Watch';
    this.pageHeaderMapping['gsoc2019'] = 'Google Summer of Code';
  }

}
