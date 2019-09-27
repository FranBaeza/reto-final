

import {Component, OnInit} from '@angular/core';
import {OfertasService} from '../ofertas.service';
import {Oferta} from '../oferta';
import {Router} from '@angular/router';



@Component({
  selector: 'app-ofertas-add',
  templateUrl: './ofertas-add.component.html',
  styleUrls: ['./ofertas-add.component.css']
})
export class OfertasAddComponent implements OnInit {

  oferta: Oferta;
  errorMessage: string;

  constructor(private ofertaService: OfertasService, private router: Router) {
    this.oferta = <Oferta>{};
  }

  ngOnInit() {
  }

  onSubmit(oferta: Oferta) {
    oferta.id = null;
    this.ofertaService.addOferta(oferta).subscribe(
      new_oferta => {
        this.oferta = new_oferta;
        this.gotoOfertasList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoOfertasList() {
    this.router.navigate(['/ofertas']);
  }

}
