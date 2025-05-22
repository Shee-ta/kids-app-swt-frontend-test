
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
@Component({
  standalone: true,
  selector: 'app-startseite-component',
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.css',
  imports: [MatGridListModule, MatListModule],
})
export class StartseiteComponent {
  readonly path = 'startseite';
}
