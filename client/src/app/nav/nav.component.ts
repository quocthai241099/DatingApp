import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { threadId } from 'worker_threads';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  login()
  {
    this.accountService.login(this.model).subscribe(response => 
      {
        console.log(response)
        this.loggedIn = true;
      }, error => {
        console.log(error);
      }
      );
  }

}