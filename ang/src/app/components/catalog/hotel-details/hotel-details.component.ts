import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: Auth
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];


      this.hotel = {
        name: 'Grand',
        price: 100,
        city: 'Varna',
        description: 'helloo moto',
        image: 'https://pix10.agoda.net/hotelImages/659/6592334/6592334_19022704090072546036.jpg?s=1024x768',
        _id: 'adadadadadad'
      }
      
    });
  }

  delete() {
   console.log('delete');
   
    
  }
}
