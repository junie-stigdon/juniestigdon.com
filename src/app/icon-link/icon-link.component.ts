import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss']
})
export class IconLinkComponent {
  @Input() icon: any;
  @Input() link = '';
  @Input() hoverText = '';
  constructor() { }
}
