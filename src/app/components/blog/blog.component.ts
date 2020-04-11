import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  urlKey = 'Default';
  pageHeader : any;
  pageImage : any;

  pageOverviewMapping = new Map();
  pageHeaderMapping = new Map();
  pageImageMapping = new Map();

  contentTag : any;

  ngOnInit(): void {
    this.contentTag = document.getElementById('overview');
    console.log(this.urlKey);
    console.log(this.pageOverviewMapping);
    this.pageOverviewMapping[this.urlKey].forEach((item) => {
      this.contentTag.appendChild(document.createElement('p'))
        .textContent = item;
    });
  }

  constructor(private route: ActivatedRoute) {
    this.intializepageHeaderMapping();
    this.intializepageOverviewMapping();
    this.intializepageImageMapping();

      this.route.params.subscribe(params => {
        this.urlKey = params['blogname'];
    });
    this.pageHeader=this.pageHeaderMapping[this.urlKey];
    this.pageImage=this.pageImageMapping[this.urlKey];
  }

  navigateToWork(id:any){
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  intializepageHeaderMapping(){
    this.pageHeaderMapping['covid-19']='Impact of COVID-19';
  }

  intializepageOverviewMapping(){
    this.pageOverviewMapping['covid-19']=['Coming soon..'];  
  }

  intializepageImageMapping(){
    this.pageImageMapping['covid-19']='assets/img/gallery/1.png';
  }

}
