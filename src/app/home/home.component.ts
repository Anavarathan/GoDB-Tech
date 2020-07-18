import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(http: HttpClient, private spinner: NgxSpinnerService) {
    this.spinner.show();


    http.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      this.user = response;
    }),
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);

}

ngOnInit() {
}

}
