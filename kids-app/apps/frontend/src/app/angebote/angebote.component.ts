
import { Component } from '@angular/core';
import { EventPreviewListComponent } from '../eventPreviewList/eventPreviewList.component';

@Component({
  standalone: true,
  selector: 'app-angebote-component',
  templateUrl: './angebote.component.html',
  styleUrl: './angebote.component.css',
  imports: [EventPreviewListComponent],
})
export class AngeboteComponent {
  readonly path = 'angebote';
}
