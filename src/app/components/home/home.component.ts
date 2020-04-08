import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  PerformanceTags = ["JavaProgressBar", "PythonProgressBar", "AngularProgressBar", "MLProgressBar", "DSAlgoProgressBar", "TotalProgressBar"]

  ProgressValues = [90, 75, 70, 60, 80, 100];

  Year2016  = [30, 25, 0, 10, 25, 20];
  Year2017  = [40, 35, 0, 20, 35, 40];
  Year2018  = [60, 40, 20, 40, 60, 60];
  Year2019  = [80, 50, 50, 50, 70, 80];
  Year2020  = [90, 75, 70, 60, 80, 100];

  ngOnInit(): void {

  }
  changeProgressForYear(year : any) {
    console.log('Let\'s work our magic')
    if(year==2016){
      for(var i=0; i<this.PerformanceTags.length; i++){
        document.getElementById(this.PerformanceTags[i]).style.width = this.Year2016[i]+"%";
        this.ProgressValues[i]=this.Year2016[i];
      }
    }else if(year==2017){
      for(var i=0; i<this.PerformanceTags.length; i++){
        document.getElementById(this.PerformanceTags[i]).style.width = this.Year2017[i]+"%";
        this.ProgressValues[i]=this.Year2017[i];
      }
    }else if(year==2018){
      for(var i=0; i<this.PerformanceTags.length; i++){
        document.getElementById(this.PerformanceTags[i]).style.width = this.Year2018[i]+"%";
        this.ProgressValues[i]=this.Year2018[i];
      }
    }else if(year==2019){
      for(var i=0; i<this.PerformanceTags.length; i++){
        document.getElementById(this.PerformanceTags[i]).style.width = this.Year2019[i]+"%";
        this.ProgressValues[i]=this.Year2019[i];
      }
    }else{
      for(var i=0; i<this.PerformanceTags.length; i++){
        document.getElementById(this.PerformanceTags[i]).style.width = this.Year2020[i]+"%";
        this.ProgressValues[i]=this.Year2020[i];
      }
    }
  }  
  
}
