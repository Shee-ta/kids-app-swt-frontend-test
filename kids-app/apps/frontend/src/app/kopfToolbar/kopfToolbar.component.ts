
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  imports: [RouterModule, MatSlideToggleModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTabsModule],
  selector: 'app-kopf-toolbar-component',
  standalone: true,
  templateUrl: './kopfToolbar.component.html',
  styleUrl: './kopfToolbar.component.css',
})
export class KopfToolbarComponent {

  URL_HOME: string = "/";

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
