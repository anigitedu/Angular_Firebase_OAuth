/*import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-flight-form',
  standalone: true,
  imports: [],
  templateUrl: './flight-form.component.html',
  styleUrl: './flight-form.component.css'
})*/
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})

export class FlightFormComponent {
  flightInfo = {
    airline: '',
    arrivalDate: '',
    arrivalTime: '',
    flightNumber: '',
    numOfGuests: 0,
    comments: ''
  };

  submitSuccess: boolean | null = null;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const headers = new HttpHeaders({
      'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
      'candidate': 'Animesh Dhole'
    });

    this.http.post('https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge', this.flightInfo, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          this.submitSuccess = true;
        },
        error => {
          console.error('Error:', error);
          this.submitSuccess = false;
        }
      );
  }
}
