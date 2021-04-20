import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exam3';

  constructor() {}

}