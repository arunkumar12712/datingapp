import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member> {
  constructor(private memberSerice: MembersService){

  }
  resolve(route: ActivatedRouteSnapshot): Observable<Member> {
    return this.memberSerice.getMember(route.paramMap.get('username')!);
  }
}
