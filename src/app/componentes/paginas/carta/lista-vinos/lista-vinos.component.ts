import { Component, OnInit } from '@angular/core';
import { Vino } from '../../../../modelos/vino';
import { VinoService } from '../../../../servicios/vino.service';

@Component({
  selector: 'app-lista-vinos',
  templateUrl: './lista-vinos.component.html',
  styleUrls: ['./lista-vinos.component.scss']
})
export class ListaVinosComponent implements OnInit {
  vinos!: Vino[];
  selectedVino!: Vino;

  constructor(private vinoService: VinoService) { }

  ngOnInit(): void {
    this.vinoService.getVinos().subscribe(
      (data) => this.vinos = data,
      (error) => console.log('Error al recuperar la lista'+ error),
      () => console.log('Vinos recuperados correctamente')
    )
  }
  selecVino(vino: Vino) {
    this.selectedVino = vino;
  }
  unSelecVino() {
    // this.selectedVino = null;
  }
}
