import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasEditComponent } from './ofertas-edit.component';

describe('OfertasEditComponent', () => {
  let component: OfertasEditComponent;
  let fixture: ComponentFixture<OfertasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
