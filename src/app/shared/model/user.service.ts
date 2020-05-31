import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Create a BehaviorSubject to store our user data in memory
  private _users: BehaviorSubject<any> = new BehaviorSubject<any>({logged: false})
  // Create an Observable to expose the data (kind of read-only)
  private users$: Observable<any> = this._users.asObservable()

  constructor() { }

  // Returns an Observable to be aware of changes
  public isLoggedUser$(): Observable<boolean> {
    // Source is the user object
    return this.users$.pipe(
      map(user => user.logged) // Here we keep only the logged property
    )
  }
}
