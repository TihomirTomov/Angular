import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {
  form = new FormGroup({
    city: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
});

  data: Object;
  constructor( private router: Router) { }

  ngOnInit() {
  }
    createHotel () {   
       
      this.data = {
        city: this.form.get('city').value,
        model: this.form.get('name').value,
        image: this.form.get('image').value,
        price: this.form.get('price').value,
        description: this.form.get('description').value,
        userId: sessionStorage.getItem('userId')
      }

console.log(this.data);

      
          this.router.navigate(['/catalog'])
          
    }
}
