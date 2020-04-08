import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-details',
  templateUrl: './works-details.component.html',
  styleUrls: ['./works-details.component.css']
})
export class WorksDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  navigateToWork(id:any){
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
