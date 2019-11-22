import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {
   parentMessage: true;
   parentSearch: false;
   isSubmitted  =  false;
   registerForm: FormGroup;
   subscription: any;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.registerForm  =  this.formBuilder.group({
      position: ['', Validators.required],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      rating: ['', Validators.required],
      country: ['', Validators.required],
      runscored: ['', Validators.required],
      topscore: ['', Validators.required],
      fours: ['', Validators.required],
      sixes: ['', Validators.required],
      average: ['', Validators.required],
      strikerate: ['', Validators.required]
    });
  }
  get formControls() { return this.registerForm.controls; }

  register() {
    this.isSubmitted  =  true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.subscription = this.apiService.addPlayer(this.registerForm.value).subscribe((req) => {
      });
      console.log(JSON.stringify( this.registerForm.value));
  }
}
}
