import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasAddComponent } from './ofertas-add.component';

describe('OfertasAddComponent', () => {
  let component: OfertasAddComponent;
  let fixture: ComponentFixture<OfertasAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
