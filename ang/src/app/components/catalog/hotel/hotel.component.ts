import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input('hotel') hotel: any;
  userId: string = window.sessionStorage.getItem('userId')
  constructor( private router: Router) { }

  ngOnInit() {
    
  }

}
