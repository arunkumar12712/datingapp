import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() usersFromHomeComponent : any;
  @Output() cancelRegister= new EventEmitter();
  model: any = {}

  constructor(private accountService: AccountService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () =>{

        this.cancel();
      },
      error: error => this.toastrService.error(error.error)
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
