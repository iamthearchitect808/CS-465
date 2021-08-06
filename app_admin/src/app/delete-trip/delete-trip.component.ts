import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Trip } from '../models/trip'
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  @Input('trip') trip: Trip;
  
  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    // retrieve stashed tripId
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('DeleteTripComponent#onInit found tripCode ' + tripCode);

    // initialize form
    /*this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })*/

    console.log('DeleteTripComponent#onInit calling TripDataService#getTrip(\'' + tripCode + '\')');
    this.tripService.getTrip(tripCode)
  }

  confirm(): void {
    console.log('Inside DeleteTripComponent@confirm');
    this.tripService.deleteTrip(localStorage.getItem("tripCode"));
    this.router.navigate(['']);
  } 

  noDelete(): void {
    console.log('Inside DeleteTripComponent@noDelete');
    this.router.navigate(['']);
  }

}
