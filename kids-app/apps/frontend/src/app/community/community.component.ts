
import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-community-component',
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
  imports: [],
})
export class CommunityComponent {
  readonly path = 'community';
}
