import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SessionFactory } from '../../x/storage.utils';
import { userSessionKey } from '../../common/constant.common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(
  ) { }

  onLogin(f: NgForm) {
    this.authService.login(f.value, false).subscribe(res => {
      SessionFactory.setItem(userSessionKey, res)
      this.router.navigate(['/customer'])
    })
  }
}
