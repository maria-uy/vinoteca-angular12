import { Component, Input, OnInit } from '@angular/core';
import { Vino } from '../../../../modelos/vino';

@Component({
  selector: 'app-vino',
  templateUrl: './vino.component.html',
  styleUrls: ['./vino.component.scss']
})
export class VinoComponent implements OnInit {

  @Input()
  vino!: Vino;

  constructor() { }

  ngOnInit(): void {
  }

}
