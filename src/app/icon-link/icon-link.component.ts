import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss'],
})
export class IconLinkComponent {
  @Input() icon: any;
  @Input() link = '';
  @Input() hoverText = '';
  constructor() {}
}
