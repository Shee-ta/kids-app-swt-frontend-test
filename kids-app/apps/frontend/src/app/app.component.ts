import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { KopfToolbarComponent } from './kopfToolbar/kopfToolbar.component';
interface ILink {
  path: string;
  label: string;
}
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet, 
    MatTabsModule, 
    RouterLink, 
    KopfToolbarComponent],
})
export class AppComponent {
  title = 'Kids App';

  links: ILink[] = [
    { path: 'startseite', label: 'Startseite' },
    { path: 'angebote', label: 'Angebote' },
    { path: 'community', label: 'Community' },
  ];

  activePath = this.links[0].path;

  onActivate(path: string) {
    this.activePath = path;
  }
}
