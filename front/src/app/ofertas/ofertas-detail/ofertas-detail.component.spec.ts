import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasDetailComponent } from './ofertas-detail.component';

describe('OfertasDetailComponent', () => {
  let component: OfertasDetailComponent;
  let fixture: ComponentFixture<OfertasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
