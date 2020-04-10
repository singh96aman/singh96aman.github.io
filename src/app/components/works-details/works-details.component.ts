import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-works-details',
  templateUrl: './works-details.component.html',
  styleUrls: ['./works-details.component.css']
})
export class WorksDetailsComponent implements OnInit {

  urlKey = 'Default';
  pageImage : any;
  pageHeader : any;
  detailHeader : any;

  pageHeaderMapping = new Map();
  pageImageMapping = new Map();
  pageOverviewMapping = new Map();
  pageDetailHeaderMapping = new Map();
  pageFirstDetailMapping = new Map();
  pageSecondDetailMapping = new Map();

  contentTag : any;

  ngOnInit(): void {

    this.contentTag = document.getElementById('overview');
    this.pageOverviewMapping[this.urlKey].forEach((item) => {
      this.contentTag.appendChild(document.createElement('p'))
        .textContent = item;
    });

    this.contentTag = document.getElementById('detail1');
    this.pageFirstDetailMapping[this.urlKey].forEach((item) => {
      this.contentTag.appendChild(document.createElement('p'))
        .textContent = item;
    });

    this.contentTag = document.getElementById('detail2');
    this.pageSecondDetailMapping[this.urlKey].forEach((item) => {
      this.contentTag.appendChild(document.createElement('p'))
        .textContent = item;
    });

  }

  constructor(private route: ActivatedRoute) {
    this.intializepageHeaderMapping();
    this.intializepageImageMapping();
    this.intializepageOverviewMapping();
    this.intializepageFirstDetailMapping();
    this.intializepageSecondDetailMapping();
    this.intializepageDetailHeader();

      this.route.params.subscribe(params => {
        this.urlKey = params['pagename'];
    });

    this.pageHeader=this.pageHeaderMapping[this.urlKey];
    this.pageImage=this.pageImageMapping[this.urlKey];
    this.detailHeader = this.pageDetailHeaderMapping[this.urlKey];
    console.log(this.detailHeader);
  }
  
  navigateToWork(id:any){
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  intializepageImageMapping(){
    this.pageImageMapping['gsoc2019']='assets/img/gallery/1.png';
    this.pageImageMapping['panda']='assets/img/gallery/2.png';
    this.pageImageMapping['marketwatch']='assets/img/gallery/3.png';
    this.pageImageMapping['wolf']='assets/img/gallery/4.png';
    this.pageImageMapping['iitkgp']='assets/img/gallery/5.png';
    this.pageHeaderMapping['morganstanley']= 'assets/img/gallery/6.png';
  }

  intializepageHeaderMapping(){
    this.pageHeaderMapping['wolf']='Wolf Of Wall Street';
    this.pageHeaderMapping['iitkgp']='ALS Treatment';
    this.pageHeaderMapping['morganstanley']= 'Morgan Stanley';
    this.pageHeaderMapping['panda'] = 'The Panda Express';
    this.pageHeaderMapping['marketwatch'] = 'Market Watch';
    this.pageHeaderMapping['gsoc2019'] = 'Google Summer of Code';
  }

  intializepageOverviewMapping(){
    this.pageOverviewMapping['wolf']=['Wolf Of Wall Street'];
    this.pageOverviewMapping['iitkgp']=['ALS Treatment'];
    this.pageOverviewMapping['morganstanley']= ['Morgan Stanley'];
    this.pageOverviewMapping['panda'] = ['The Panda Express'];
    this.pageOverviewMapping['marketwatch'] = ['Market Watch'];
    this.pageOverviewMapping['gsoc2019'] = ['Google Summer of Code'];
  }

  intializepageDetailHeader(){
    this.pageDetailHeaderMapping['wolf']=['Wolf Of Wall Street', 'Col2'];
    this.pageDetailHeaderMapping['iitkgp']=['ALS Treatment',, 'Col2'];
    this.pageDetailHeaderMapping['morganstanley']= ['Morgan Stanley', 'Col2'];
    this.pageDetailHeaderMapping['panda'] = ['The Panda Express', 'Col2'];
    this.pageDetailHeaderMapping['marketwatch'] = ['Market Watch', 'Col2'];
    this.pageDetailHeaderMapping['gsoc2019'] = ['Google Summer of Code', 'Col2'];
  }

  intializepageFirstDetailMapping(){
    this.pageFirstDetailMapping['wolf']=['Wolf Of Wall Street2'];
    this.pageFirstDetailMapping['iitkgp']=['ALS Treatment2'];
    this.pageFirstDetailMapping['morganstanley']= ['Morgan Stanley2'];
    this.pageFirstDetailMapping['panda'] = ['The Panda Express2'];
    this.pageFirstDetailMapping['marketwatch'] = ['Market Watch2'];
    this.pageFirstDetailMapping['gsoc2019'] =[ 'Google Summer of Code2'];
  }
  
  intializepageSecondDetailMapping(){
    this.pageSecondDetailMapping['wolf']=['Wolf Of Wall Street3'];
    this.pageSecondDetailMapping['iitkgp']=['ALS Treatment3'];
    this.pageSecondDetailMapping['morganstanley']= ['Morgan Stanley3'];
    this.pageSecondDetailMapping['panda'] = ['The Panda Express3'];
    this.pageSecondDetailMapping['marketwatch'] = ['Market Watch3'];
    this.pageSecondDetailMapping['gsoc2019'] = ['Google Summer of Code3'];
  }

}
