import { Component, OnInit } from '@angular/core';
import { SessionFactory } from '../../../x/storage.utils';
import { userSessionKey } from '../../../common/constant.common';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'customer-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userInfo: any
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userInfo = SessionFactory.getItem(userSessionKey).user_info
  }

  onLogout() {
    this.authService.logout().subscribe(res => {
      sessionStorage.clear()
      this.router.navigate(['/auth/login'])
    })
  }
}
