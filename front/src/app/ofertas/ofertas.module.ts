import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasListComponent } from './ofertas-list/ofertas-list.component';
import { OfertaDetailComponent } from './ofertas-detail/ofertas-detail.component';
import { OfertasEditComponent } from './ofertas-edit/ofertas-edit.component';
import { OfertasAddComponent } from './ofertas-add/ofertas-add.component';
import { OfertasService } from './ofertas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OfertasRoutingModule
  ],
  declarations: [
    OfertasListComponent,
    OfertaDetailComponent,
    OfertasEditComponent,
    OfertasAddComponent
  ],
  providers: [OfertasService]

})
export class OfertasModule { }
