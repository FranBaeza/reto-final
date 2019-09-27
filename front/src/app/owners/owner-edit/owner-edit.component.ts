/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/**
 * @author Vitaliy Fedoriv
 */

import {Component, OnInit} from '@angular/core';
import {OfertaService} from '../ofertas-add';
import {Oferta} from '../ofertas';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-oferta-edit',
  templateUrl: './oferta-edit.component.html',
  styleUrls: ['./oferta-edit.component.css']
})
export class OfertaEditComponent implements OnInit {
  oferta: Oferta;
  errorMessage: string; // server error message

  constructor(private ofertaService: OfertaService, private route: ActivatedRoute, private router: Router) {
    this.oferta = <Oferta>{};
  }

  ngOnInit() {
    const ofertaId = this.route.snapshot.params['id'];
    this.ofertaService.getOfertaById(ofertaId).subscribe(
      oferta => this.oferta = oferta,
      error => this.errorMessage = <any> error);
  }

  onSubmit(oferta: Oferta) {
    var that = this;
    this.ofertaService.updateOferta(oferta.id.toString(), oferta).subscribe(
      res => this.gotoOfertaDetail(oferta),
      error => this.errorMessage = <any> error
    )
  }

  gotoOfertaDetail(oferta: Oferta) {
    this.errorMessage = null;
    this.router.navigate(['/ofertas', oferta.id]);
  }



}