import {Component, OnInit} from '@angular/core';
import {OfertaService} from '../oferta.service';
import {Oferta} from '../oferta';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ofertas-list',
  templateUrl: './ofertas-list.component.html',
  styleUrls: ['./ofertas-list.component.css']
})
export class OfertasListComponent implements OnInit {
  errorMessage: string;
  ofertas: Oferta[];

  constructor(private router: Router, private ofertaService: OfertaService) {
  }

  ngOnInit() {
    this.ofertaService.getOfertas().subscribe(
      ofertas => this.ofertas = ofertas,
      error => this.errorMessage = <any> error);
  }

  onSelect(oferta: Oferta) {
    this.router.navigate(['/ofertas', oferta.id]);
  }

  addOferta() {
    this.router.navigate(['/oferta/add']);
  }

}
