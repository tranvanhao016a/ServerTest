import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthState } from 'src/app/ngrx/states/auth.state';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servers/auth/auth.service';
import * as UserAction from '../../ngrx/actions/user.actions';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/ngrx/states/user.state';
interface userExistsError {
  status: number;
  message: string;
  name: string;
}
interface invalidError {
  statusCode: number;
  message: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSuccess$ = this.store.select('user', 'isSuccess')
  idToken$: Observable<string> = this.store.select('idToken', 'idToken');
  message$ = this.store.select('user', 'message')
  constructor(private auth: Auth, private authService: AuthService, private store: Store<{ idToken: AuthState, user: UserState }>) {
    this.idToken$.subscribe(value => {


      if (value) {
        console.log('làm đúng r');
        console.log(value);
        this.store.dispatch(UserAction.createUser({ idToken: value }))
      }
    })
    this.isSuccess$.subscribe((value) => {
      console.log(value);
      if (value) {
        console.log('add User success');
      }
    })

  }
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }



  logout() {
    this.authService.logout();
  }
}
