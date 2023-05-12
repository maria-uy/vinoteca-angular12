import { Component, OnInit, Input } from '@angular/core';
import { Vino } from '../../../../modelos/vino';

@Component({
  selector: 'app-zoom-vino',
  templateUrl: './zoom-vino.component.html',
  styleUrls: ['./zoom-vino.component.scss']
})
export class ZoomVinoComponent implements OnInit {
  @Input() selectedVino?: Vino;

  constructor() { }

  ngOnInit(): void {
  }

}
