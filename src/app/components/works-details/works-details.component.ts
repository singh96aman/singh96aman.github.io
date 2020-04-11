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
  projectLink : any;

  pageHeaderMapping = new Map();
  pageImageMapping = new Map();
  pageOverviewMapping = new Map();
  pageDetailHeaderMapping = new Map();
  pageFirstDetailMapping = new Map();
  pageSecondDetailMapping = new Map();
  pageProjectLinkMapping = new Map();

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
    this.initializepageProjectLinkMapping();

      this.route.params.subscribe(params => {
        this.urlKey = params['pagename'];
    });

    this.pageHeader=this.pageHeaderMapping[this.urlKey];
    this.projectLink=this.pageProjectLinkMapping[this.urlKey];
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
    this.pageImageMapping['iitkgp']='assets/img/gallery/5.jpg';
    this.pageImageMapping['morganstanley']= 'assets/img/gallery/6.jpg';
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
    this.pageOverviewMapping['wolf']=['Our college technical fest organizes an event called \'Wolf of Wall Street\' and thousands of people log in to take advantage of the live stock market simulation and make some big bucks (hypothetically)',' To approach such a problem statement would require to develop a full stack website that is able to load the latest stock bids from reliable sites lie Yahoo finance as well as simulatneously let many users to log in and place bids.'];
    this.pageOverviewMapping['iitkgp']=['As part of my summer internship at Indian Institute of Technology Kharagpur, I had to work with Mr. Tushar Mungle and Professor Jayanta Mukhopadhyay in coalition with Tata Medical Center Kolkata, to create a pill reminding application for ALS patients as well as develop framework to mimic doctor\'s decision making.'];
    this.pageOverviewMapping['morganstanley']= ['I joined Morgan Stanley Mumbai offices in the Prime Brokerage division in July 2019 as part of Software Consultant for Accolite. MS has given me amazing platform to study the intracies of investment banking as well as work on huge infrastructure and complex real world problems.'];
    this.pageOverviewMapping['panda'] = ['This project is by product of being quarantined due to COVID-19. I also wanted to connect with new tech aspirants to help/inspire them to be as productive as possible. This website, to showcase my projects, is built with tools that are free/opensourced.'];
    this.pageOverviewMapping['marketwatch'] = ['This project was built in the company of Mr. Pranjal where we sought out to develop an SVM model on historical data of top 30 BSE and top 50 NSE companies in the pursuit to accurately predict the movement of stocks.'];
    this.pageOverviewMapping['gsoc2019'] = ['AWAKE in CERN is working on compressing size of LHC from 27km to mere 6-8km. As a GSOC student, I was asked to read about 12TB of data created during 2017–18 experimental run and create a faster and simpler AWAKE database and to supply API for searching and visualizing multiple datasets in the timestamp range.'];
  }

  intializepageDetailHeader(){
    this.pageDetailHeaderMapping['wolf']=['Flask Engine', 'Reception'];
    this.pageDetailHeaderMapping['iitkgp']=['Why ?', 'Results'];
    this.pageDetailHeaderMapping['morganstanley']= ['Cherry of Finance on top of Tech', 'Accomplishments'];
    this.pageDetailHeaderMapping['panda'] = ['Ingredients', 'Future'];
    this.pageDetailHeaderMapping['marketwatch'] = ['The Idea', 'Inferences'];
    this.pageDetailHeaderMapping['gsoc2019'] = ['Excerpt from Medium', 'Experience'];
  }

  intializepageFirstDetailMapping(){
    this.pageFirstDetailMapping['wolf']=['The webpage was built using a beautiful open sourced colorlib template in front end and with flask engine operating in the backend. Flask is a very powerful lighweight framework in python and is the best place for a beginner to start. The site was hosted on a nginx server on digital ocean cloud with MYSQL as the default database language. Each player could log in, select the number of stocks they would wanna purchase with the default token money and create an investment portfolio. To achieve real time stock values, I had to use open sourced python libraries such as yahoo-finance (PyPI).'];
    this.pageFirstDetailMapping['iitkgp']=['ALS Patients in there last phase of treatment (post chemotherapy) have to take a lot of different types of medicines while maintaining bi-weekly doctor appointments. To make sure the disease doesn\'t relapse, doctors keep track of patients health and response to medicine. An android application was created to remind patients what quantity of medicine, at certain time, they have to ingest.'];
    this.pageFirstDetailMapping['morganstanley']= ['As part of PB Finance team, I was able to understand core investment banking principles as well as learn a very complex asynchronical infrastructure to ultimately churn data into human readable form.', 'As part of PB Custody space, I have been working on full stack applications to book incoming trades. This involved building complex scalable frameworks with front end working harmoniously with backend.'];
    this.pageFirstDetailMapping['panda'] = ['This site is inspired from an open sourced template and is running on a strong node server with Angular framework. The site is currently hosted on Github pages with midnight theme and refers to the github repository (of the same name) for source code.','Since, it\'s a static webpages, it\'s heavily dependent on JavaScript and TypeScript. The tranquil theme, though envisoned by me, is backed by thousands of lines of existing CSS code.'];
    this.pageFirstDetailMapping['marketwatch'] = ['As part of our DBMS lab in 2nd year, We had to develop complex realistic table structure with ER diagrams. To transform this into reality, we created a basic FLASk application with CRUD capabilties and inserted about 200,000 rows worth of historical data for 80 companies. The highlight of the project was that user could choose any company and the system would feed data to the SVM engine to dictate the probability as well as direction of movement of stock.'];
    this.pageFirstDetailMapping['gsoc2019'] =[ 'In the first attempt, we worked on writing multi-threaded sub-routines in Python to index the entire database. For each HDF file (Hierarchical Data Format), there will be one CSV file with one-to-one mapping whilst saving only relevant dataset metadata information. This allowed each file to compress from 50–60 MB to 250 KB. In total around 0.5 million files, CSVs were created reducing the 12 TB footprint to 150GB.', 'Unfortunately, it took about 3 hours to index about 25,000 files with 8 cores. So, we decided to go with SPARK technology provided by SWAN. With ~250 nodes, I was able to run the batch process the 12TB data in 3 hours as opposed to 30 days working remotely, which is clearly a feat for engineering teams working at CERN. If you have access to CERN’s database you can access the files by logging in to the server using ssh and try the following command and you should see the following in output.'];
  }
  
  intializepageSecondDetailMapping(){
    this.pageSecondDetailMapping['wolf']=['The event has been a huge success with this simulation for 3 continuous years because of the easy UI and internal caching of stocks. To make sure the servers work on optimal strength, each stock was cached after any user would click on it. With heavy traffic, almost all the stocks were regularly refreshed and it felt it was happening in realtime.'];
    this.pageSecondDetailMapping['iitkgp']=['After finishing the android application we moved to analyzing doctor\'s patterns while prescribing medicines. Many machine learning models such as HMM and decision trees were used to accurately predict and understand the complex decision making involved. Decision Tree models such as C4.5 and boosted regression trees showed great promise.'];
    this.pageSecondDetailMapping['morganstanley']= ['I was able to spearhead my team into Git and Agile.','I was able to build a complex ETL frameworks to link and find synergy between multiple MS teams.', 'Currently, I was able to get hands on Java, Angular, MQ, IBM DB2, Sybase, Autosys, Python.'];
    this.pageSecondDetailMapping['panda'] = ['I am not sure how long this quarantine will last but having a live project makes it easier for time to kill. With plans to expand with more technical blogs and projects, I am currently looking for inspiration from people who might reach out to me.  '];
    this.pageSecondDetailMapping['marketwatch'] = ['The model was able to accurately predict the movement of stock as well as the probability of it\'s movement if the market conditions were non-tumultous. However, To increase the accuracy of model, it\'s important to take in account the current context and the health of the stock in the news/market. The project needs to be expanded to include NLP techniques to get the binary emotion for the stock in news. Looking forward to any NLP enthusiasts to reach out to me.'];
    this.pageSecondDetailMapping['gsoc2019'] = ['Google Summer of Code is much more than handsome stipend and fame. It’s a great opportunity to connect with some of the most talented people in this world working on great projects. I’d like to formally thank Google for coming up with GSoC program. I would also like to thank the team at CERN-HSF, especially Prasanth and Piotr, who worked with me in figuring out deploying my packages as well as mentoring me in new technologies such as SWAN and SPARK.', 'I would like to thank my mentors, Marlene who constantly helped me understand the physics in our weekly journal class and Spencer who selected me, mentored me and introduced me to the AWAKE team at CERN. He really helped me bridge the gap between physics and it’s relevant use cases.It has been an amazing journey.'];
  }

  initializepageProjectLinkMapping(){
    this.pageProjectLinkMapping['wolf']='https://github.com/singh96aman/MarketWatch';
    this.pageProjectLinkMapping['iitkgp']='https://github.com/singh96aman/IIT-Kharagpur-Workspace';
    this.pageProjectLinkMapping['morganstanley']= 'https://www.morganstanley.com/ideas/prime-brokerage-creating-a-culture-of-partnership';
    this.pageProjectLinkMapping['panda'] = 'https://github.com/singh96aman/singh96aman.github.io';
    this.pageProjectLinkMapping['marketwatch'] = 'https://github.com/singh96aman/MarketWatchBETA';
    this.pageProjectLinkMapping['gsoc2019'] = 'https://medium.com/singh96aman/https-medium-com-singh96aman-gsoc-2019-cern-hsf-pyawake-153b1218ba25';
  }

}
