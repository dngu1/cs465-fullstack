import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, Form } from "@angular/forms";

import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './delete-trip.html',
  styleUrl: './delete-trip.css',
  providers: [TripData]
})

export class DeleteTrip implements OnInit {
  public deleteForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private tripData: TripData,
    private router: Router
    ) {
    console.log('delete-trip constructor');
  }

  ngOnInit(): void {
    // Retrieve stashed trip ID
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }
  
    console.log('DeleteTripComponent::ngOnInit');
    console.log('tripcode: ' + tripCode);

    this.deleteForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.tripData.getTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          this.trip = value;
          // Populate our record into the form
          this.deleteForm.patchValue(value[0]);
          if(!value) {
            this.message = 'No Trip Retrieved!';
          }
          else {
            this.message = 'Trip: ' + tripCode + ' retrieved';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public onSubmit() {
    this.submitted = true;

    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    if(this.deleteForm.valid) {
      this.tripData.deleteTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          console.log("Trip: " + tripCode + " deleted");
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
    }
  }
  // get the form short name to access the form fields
  get f() { return this.deleteForm.controls; }

}
