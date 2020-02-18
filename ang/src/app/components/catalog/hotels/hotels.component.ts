import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})

export class HotelsComponent implements OnInit {
hotels: any[];


searchedMotor: any;

  constructor(
     private router: Router,
    ) { }

    ngOnInit() {
    this.hotels = [{
      name: 'Grand',
      price: 100,
      city: 'Varna',
      description: 'helloo moto',
      image: 'https://pix10.agoda.net/hotelImages/659/6592334/6592334_19022704090072546036.jpg?s=1024x768',
      _id: 'adadadadadad'
    },
    {
      name: 'Grand',
      price: 100,
      city: 'Varna',
      description: 'helloo moto',
      image: 'https://pix10.agoda.net/hotelImages/659/6592334/6592334_19022704090072546036.jpg?s=1024x768',
      _id: 'adadadadadad'
    }] 
    }
  
}

