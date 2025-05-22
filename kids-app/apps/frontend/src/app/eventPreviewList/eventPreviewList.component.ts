
import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { EventPreviewComponent } from '../eventPreview/eventPreview.component';
import { EventMockups } from '../shared/consts/eventPreviewList'

@Component({
  standalone: true,
  selector: 'app-eventPreviewList-component',
  templateUrl: './eventPreviewList.component.html',
  styleUrl: './eventPreviewList.component.css',
  imports: [
    NgForOf,
    EventPreviewComponent
  ],
})
export class EventPreviewListComponent {

  eventPreviews = EventMockups;
}
