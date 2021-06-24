import { Component, Input, OnInit } from '@angular/core';
import { UserPermissionService } from '../core/user-permission.service';

@Component({
  selector: 'app-feature-layout',
  templateUrl: './feature-layout.component.html',
  styleUrls: ['./feature-layout.component.css']
})
export class FeatureLayoutComponent implements OnInit {
  public isAdmin: boolean = false;
  constructor(private userService: UserPermissionService) { }

  ngOnInit() {
    this.isAdmin = this.userService.isAdmin();
  }

}