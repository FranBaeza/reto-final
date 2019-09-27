import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaEditComponent } from './oferta-edit.component';

describe('OfertaEditComponent', () => {
  let component: OfertaEditComponent;
  let fixture: ComponentFixture<OfertaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
