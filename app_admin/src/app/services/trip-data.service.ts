import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from '../models/Trip';
import { User } from '../models/user';
import { Authresponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) { }
    @Inject(Authresponse) private response: Token;

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    return this.http
       .post(this.tripUrl, formData, httpOptions) // pass form data in request body
       .toPromise()
       .then(response => response/*.json()*/ as Trip[])
       .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataSErvice#getTrip(tripCode)');
    return this.http
        .get(this.tripUrl + tripCode)
        .toPromise()
        .then(response => response/*.json()*/ as Trip)
        .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    console.log(formData);
    return this.http
      .put(this.tripUrl + formData.code, formData, httpOptions)
      .toPromise()
      .then(response => response/*.json()*/ as Trip[])
      .catch(this.handleError);
  }

  public deleteTrip(tripCode: string) {
    console.log('Inside TripDataService#deleteTrip');
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    return this.http
      .delete(this.tripUrl + tripCode, httpOptions).subscribe();
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response/*.json()*/ as Authresponse)
      .catch(this.handleError);
  }

}
