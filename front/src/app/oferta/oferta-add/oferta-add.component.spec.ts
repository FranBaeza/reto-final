import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaAddComponent } from './oferta-add.component';

describe('OfertaAddComponent', () => {
  let component: OfertaAddComponent;
  let fixture: ComponentFixture<OfertaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
