
import { Distributor } from './../data-model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateLocationService } from './../services/update-location.service';

@Component({
  selector: 'app-distributor-detail',
  templateUrl: './distributor-detail.component.html',
  styleUrls: ['./distributor-detail.component.css']
})
export class DistributorDetailComponent implements OnInit {
  geolocationPosition: Position;
  distributorForm: FormGroup;
  distributor: Distributor;
  lat = -32.9477132;
  lng = -60.630465800000025;

  constructor(private fb: FormBuilder,
              private uls: UpdateLocationService) {
    this.createForm();
  }
  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position;
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
      this.lat = this.geolocationPosition.coords.latitude;
      this.lng = this.geolocationPosition.coords.longitude;
    }
  }
  onSubmit() {
    this.setDistributor();
  }
  setDistributor(): void {
    const formModel = this.distributorForm.value;
    const response = this.uls
      .getDistributorByIdentification()
    .subscribe((data) => {
        const distributors = data.filter(element => element.identification.toString() === formModel.name);
        if (distributors.length) {
          this.distributor = distributors[0];
        } else {
          this.distributor = new Distributor();
        }
      }
    );
    if (this.distributor.latitude && this.distributor.latitude) {
      this.lat = Number(this.distributor.latitude);
      this.lng = Number(this.distributor.longitude);
      this.getLocation();
    }
  }
  getLocation() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position;
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
      const sameLatitude = Number(this.distributor.latitude) === this.geolocationPosition.coords.latitude;
      const sameLongitude = Number(this.distributor.longitude) === this.geolocationPosition.coords.longitude;
      if ( !sameLatitude && !sameLongitude ) {
        // only for testing
        this.distributor.latitude = String(Number(this.distributor.latitude) - 0.032);
        this.distributor.longitude = String(Number(this.distributor.latitude) + 0.015);
        /*
        this.distributor.latitude = String(this.geolocationPosition.coords.latitude);
        this.distributor.longitude = String(this.geolocationPosition.coords.longitude);
        */
        this.uls.updateLocation(this.distributor).subscribe((data) => {console.log(data); });
        this.lat = Number(this.distributor.latitude);
        this.lng = Number(this.distributor.longitude);
        setTimeout(() => this.getLocation(), 1000);
      }
    }
  }
  createForm() {
    this.distributorForm = this.fb.group({
      name: ['', Validators.required ],
    });
  }
}
