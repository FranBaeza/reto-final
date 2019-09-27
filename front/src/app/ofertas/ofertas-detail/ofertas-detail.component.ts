import {Component, OnInit} from '@angular/core';
import {OfertasService} from '../ofertas.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Oferta} from '../oferta';
import 'rxjs/Rx';


@Component({
  selector: 'app-oferta-detail',
  templateUrl: './oferta-detail.component.html',
  styleUrls: ['./oferta-detail.component.css']
})
export class OfertaDetailComponent implements OnInit {
  errorMessage: string;
  oferta: Oferta;

  constructor(private route: ActivatedRoute, private router: Router, private ofertasService: OfertasService) {
    this.oferta = <Oferta>{};
  }

  ngOnInit() {
    const ofertaId = this.route.snapshot.params['id'];
    this.ofertasService.getOfertaById(ofertaId).subscribe(
      oferta => this.oferta = oferta,
      error => this.errorMessage = <any> error);
  }

  gotoOfertaList() {
    this.router.navigate(['/ofertas']);
  }

  editOferta() {
    this.router.navigate(['/ofertas', this.oferta.id, 'edit']);
  }

  addOferta(oferta: Oferta) {
    this.router.navigate(['/ofertas', oferta.id, 'oferta', 'add']);
  }


}
