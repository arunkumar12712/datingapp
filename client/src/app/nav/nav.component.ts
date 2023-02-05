import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  //loggedIn: false;
  currentUser$: Observable<User| null> = of(null);

  constructor(public accountService: AccountService, private router : Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$= this.accountService.currentUser$;
  }

  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe({
  //     next: user => this.loggedIn = !!user,
  //     error: error=> console.log(error)
  //   })
  // }


  login(){
    this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/members'),
      // next:response=>{
      //   console.log(response);
      //   //this.loggedIn = true;
      // },
      error: error=>this.toastrService.error(error.error)
    })
  }

  logout(){
    this.accountService.logout();
    //this.loggedIn = false;
    this.router.navigateByUrl('/');
  }
}
